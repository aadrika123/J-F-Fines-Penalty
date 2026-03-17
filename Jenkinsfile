pipeline {
    agent any

    environment {
        BUILD_DIR    = 'fines_app_build'
        OUTPUT_DIR   = 'dist'
        SUBDIRECTORY = ''

        STAGING_HOST = '172.18.1.52'
        STAGING_PATH = '/opt/Frontend_Staging'
        PROD_HOST    = '172.18.1.55'
        PROD_PATH    = '/opt/Frontend_Production'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                script {
                    COMMIT_HASH = sh(script: 'git rev-parse --short=7 HEAD', returnStdout: true).trim()
                }
            }
        }

        stage('Inject Environment') {
            when {
                allOf {
                    expression { env.CHANGE_ID == null }
                    anyOf { branch 'dev'; branch 'main' }
                }
            }
            steps {
                script {
                    def workDir = SUBDIRECTORY?.trim() ? "${WORKSPACE}/${SUBDIRECTORY}" : WORKSPACE
                    def envFile = (env.BRANCH_NAME == 'main') ? '.env.production' : '.env.dev'
                    def envPath = SUBDIRECTORY?.trim() ? "${WORKSPACE}/${SUBDIRECTORY}/${envFile}" : "${WORKSPACE}/${envFile}"

                    if (fileExists(envPath)) {
                        sh "cp '${envPath}' '${workDir}/.env'"
                        echo "Loaded ${envFile} as .env"
                    } else {
                        echo "WARNING: ${envFile} not found. Building without environment file."
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    def workDir = SUBDIRECTORY?.trim() ? "${WORKSPACE}/${SUBDIRECTORY}" : WORKSPACE
                    docker.image('node:20-alpine').inside("-e HOME=${WORKSPACE} -e npm_config_cache=${WORKSPACE}/.npm-cache") {
                        sh """
                            apk add --no-cache git 2>/dev/null || true
                            cd '${workDir}'
                            node --version && npm --version
                            npm install --legacy-peer-deps
                            npm install @rollup/rollup-linux-x64-musl --no-save 2>/dev/null || true
                            npm run build
                        """
                    }
                }
            }
        }

        stage('Validate') {
            steps {
                script {
                    def workDir = SUBDIRECTORY?.trim() ? "${SUBDIRECTORY}/" : ''
                    def indexPath = "${WORKSPACE}/${workDir}${OUTPUT_DIR}/index.html"

                    if (!fileExists(indexPath)) {
                        error "Build failed: ${OUTPUT_DIR}/index.html not found"
                    }

                    def size = sh(script: "du -sb '${WORKSPACE}/${workDir}${OUTPUT_DIR}' | awk '{print \$1}'", returnStdout: true).trim()
                    echo "Build OK: index.html present, total size = ${size} bytes"
                }
            }
        }

        stage('PR Status') {
            when { expression { env.CHANGE_ID != null } }
            steps {
                echo "PR #${env.CHANGE_ID} validated. Build output: ${OUTPUT_DIR}/, commit: ${COMMIT_HASH}. Safe to merge."
            }
        }

        stage('Deploy') {
            when {
                allOf {
                    expression { env.CHANGE_ID == null }
                    anyOf { branch 'dev'; branch 'main' }
                }
            }
            steps {
                script {
                    def isProduction = (env.BRANCH_NAME == 'main')
                    def targetHost = isProduction ? PROD_HOST : STAGING_HOST
                    def targetPath = isProduction ? PROD_PATH : STAGING_PATH
                    def deployKey  = isProduction ? 'production-deploy-key' : 'staging-deploy-key'
                    def envLabel   = isProduction ? 'PRODUCTION' : 'STAGING'

                    def workDir = SUBDIRECTORY?.trim() ? "${SUBDIRECTORY}/" : ''
                    def srcPath = "${WORKSPACE}/${workDir}${OUTPUT_DIR}/"

                    withCredentials([sshUserPrivateKey(
                        credentialsId: deployKey,
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    )]) {
                        sh """
                            ssh -i \$SSH_KEY -o StrictHostKeyChecking=no \
                                \$SSH_USER@${targetHost} \
                                "mkdir -p '${targetPath}/.backups' && \
                                 if [ -d '${targetPath}/${BUILD_DIR}' ]; then \
                                     cp -r '${targetPath}/${BUILD_DIR}' \
                                           '${targetPath}/.backups/${BUILD_DIR}_\$(date +%Y%m%d-%H%M%S)'; \
                                 fi"
                        """

                        sh """
                            rsync -avz --delete \
                                -e "ssh -i \$SSH_KEY -o StrictHostKeyChecking=no" \
                                '${srcPath}' \
                                \$SSH_USER@${targetHost}:${targetPath}/${BUILD_DIR}/
                        """
                    }

                    echo "DEPLOYED: ${BUILD_DIR} (${COMMIT_HASH}) -> ${envLabel} at ${targetHost}:${targetPath}/${BUILD_DIR}/"
                }
            }
        }
    }

    post {
        success { echo "SUCCESS: ${BUILD_DIR} | branch=${env.BRANCH_NAME} | commit=${COMMIT_HASH}" }
        failure { echo "FAILED: ${BUILD_DIR} | branch=${env.BRANCH_NAME}" }
        always  { cleanWs() }
    }
}
