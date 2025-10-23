import BackendUrl from "./BackendUrl"

export default function ProjectApiList() {
    let baseUrl = BackendUrl
    let apiList = {

        api_moduleList: `${baseUrl}/api/user-managment/v2/crud/module/list`,
        api_moduleList: `${baseUrl}/api/user-managment/v2/crud/module/list`,
        //heartBeatApi
        api_checkHeartBeat: `${baseUrl}/heartbeat`,
        // 1 API TO MENU LIST
        api_getFreeMenuList: `${baseUrl}/api/menu/by-module`,

        api_login: `${baseUrl}/api/login`,
        api_logout: `${baseUrl}/api/logout`,
        api_setPassword: `${baseUrl}/user/set-password`,
    
       
        // 19 API TO GET WORKFLOW BASIC INFO LIKE PERMISSIONS/WORKFLOW-CANDIDATES
        api_workflowInfo: `${baseUrl}/workflow/role-map/workflow-info`,


        // 21 API TO POST DEPARTMENTAL COMMUNICATION DATA
        api_postDepartmental: `${baseUrl}/post-custom-data`,

        // 22 API TO TO GET SAF DEPARTMENTAL COMMUNICATION LIST
        api_getDepartmentalData: `${baseUrl}/get-all-custom-tab-data`,

        
        //application demand detail in demand screen
        api_verifyDocuments: `${baseUrl}/workflows/document/verify-reject`,
        //application demand detail in demand screen
        api_changePassword: `${baseUrl}/api/change-password`,

        // API TO EDIT ADMIN PROFILE
        api_editAdminProfile: `${baseUrl}/edit-my-profile`,
        // API TO FETCH JSK DASHBOARD RECENT APPLICATIONS AND RECENT PAYMENTS

        // API TO FETCH NOTIFICATION DATA
        api_getNotification: `${baseUrl}/get-user-notifications`,
        // API TO CREATE NOTIFICATION DATA
        api_createNotification: `${baseUrl}/dashboard/jsk/prop-dashboard`,
        // API TO DELETE NOTIFICATION DATA
        api_deleteNotification: `${baseUrl}/dashboard/jsk/prop-dashboard`,

        // ════════════════════════║🔰 Marriage Api List 🔰║═══════════════════════════ 
        marriageInbox : baseUrl + '/marriage/inbox',
        marriageDetails : baseUrl + '/marriage/details',
        workflowInfo : baseUrl + "/workflow/role-map/workflow-info",
        appointSet : baseUrl + "/marriage/set-appiontment-date",
        getUploadedDocument : baseUrl + "/marriage/get-uploaded-document",
        docVerify : baseUrl + "/marriage/doc-verify-reject",
        approveReject : baseUrl + "/marriage/final-approval-rejection",
        approvedList : baseUrl + "/marriage/approved-application",
        marriageApplicationList : baseUrl + "/marriage/search-application",
        marriageOrderId : baseUrl + "/marriage/generate-order-id",
        api_postMarriageOfflinePayment: baseUrl + '/marriage/offline-payment',
        api_MarriageReceipt: baseUrl + '/marriage/payment-receipt',
        api_marriageNextLevel: baseUrl + '/marriage/post-next-level',
        
        api_postMarriageSubmission: `${baseUrl}/marriage/apply`,
        api_getDocList: `${baseUrl}/marriage/get-doc-list`,
        api_docUpload: `${baseUrl}/marriage/upload-document`,
        api_getDetails: `${baseUrl}/marriage/static-details`,
        api_getList: `${baseUrl}/marriage/applied-application`,
        api_deleteApplication: `${baseUrl}/marriage/`,
        api_editMarriageApplication: `${baseUrl}/marriage/edit-application`,

        // 👉 ================ Fines & Penalties API List =================== 👈
        api_submitInfractionForm : `${baseUrl}/api/fines/penalty-record/crud/save`,
        api_updateInfractionForm : `${baseUrl}/api/fines/penalty-record/crud/edit`,
        api_getInfractionById    : `${baseUrl}/api/fines/v2/penalty-record/crud/show`,
        api_getInfractionList    : `${baseUrl}/api/fines/penalty-record/crud/active-all`,        
        
        api_getViolationList     : `${baseUrl}/api/fines/violation/crud/list`,        
        // api_getWardList          : `${baseUrl}/api/fines/ward-list`,    //old     
        api_getWardList          : `${baseUrl}/api/workflow/v1/crud/ward-by-ulb`,    //new     
        
        api_violationMasterList : `${baseUrl}/api/fines/violation/crud/list`,  
        api_getViolationById    : `${baseUrl}/api/fines/violation/crud/get`,
        api_updateViolation     : `${baseUrl}/api/fines/violation/crud/edit`,
        api_addViolation        : `${baseUrl}/api/fines/violation/crud/save`,
        api_deleteViolation     : `${baseUrl}/api/fines/violation/crud/delete`,

        fpInbox                 : baseUrl + '/api/fines/penalty-record/inbox',
        fpDetails               : baseUrl + '/api/fines/penalty-record/detail',
        fpDocList               : baseUrl + '/api/fines/penalty-record/crud/show-document',
        fpApprove               : baseUrl + '/api/fines/penalty-record/approve',
        api_fpChallan2          : baseUrl + '/api/fines/penalty-record/get-challan',
        getFpUploadedDocument   : baseUrl + '/api/fines/penalty-record/get-uploaded-document',

        api_FPTrack                 :`${baseUrl}/api/fines/penalty-record/challan-search`,

        api_FpApplyReport:           `${baseUrl}/api/fines/penalty-record/challan-search`,
        api_ChallanGeneratingReport: `${baseUrl}/api/fines/report/challan-wise`,
        api_ViolationWiseReport:     `${baseUrl}/api/fines/report/violation-wise`,
        api_CollectionReport:        `${baseUrl}/api/fines/report/collection-wise`,

        api_getChallanById:        `${baseUrl}/api/fines/penalty-record/get-challan`,
        api_challanOfflinePayment: `${baseUrl}/api/fines/penalty-record/offline-challan-payment`,

        api_FpReceipt : baseUrl + '/api/fines/penalty-record/payment-receipt',

        api_getViolationList:    `${baseUrl}/api/fines/violation/list`,
        api_getSectionList:      `${baseUrl}/api/fines/section/list`,
        api_assignViolation:     `${baseUrl}/api/fines/violation/onspot`,
        api_getDepartmentList:   `${baseUrl}/api/fines/department/list`,
        api_getUserList:         `${baseUrl}/api/fines/user-list`,
        
        api_getViolationByDept:  `${baseUrl}/api/fines/violation/by-department`,

        api_listDepartment: `${baseUrl}/api/fines/department/crud/list`,
        api_addDepartment : `${baseUrl}/api/fines/department/crud/save`,
        api_updateDepartment: `${baseUrl}/`,
        api_deleteDepartment: `${baseUrl}/api/fines/department/crud/delete`,

        api_listSection: `${baseUrl}/api/fines/section/crud/list`,
        api_addSection: `${baseUrl}/api/fines/section/crud/save`,
        api_updateSection: `${baseUrl}/`,
        api_deleteSection: `${baseUrl}/api/fines/section/crud/delete`,
        
        api_compData: `${baseUrl}/api/fines/report/comparison`,

        api_addRole:        `${baseUrl}/api/fines/wfrole/crud/save`,
        api_updateRole:     `${baseUrl}/api/fines/wfrole/crud/edit`,
        api_deletedRole:    `${baseUrl}/api/fines/wfrole/crud/delete`,
        api_listRole:       `${baseUrl}/api/fines/wfrole/crud/list`,

        api_addUser:        `${baseUrl}/api/fines/user/crud/create`,
        api_updateUser:     `${baseUrl}/api/fines/user/crud/edit`,
        api_deletedUser:    `${baseUrl}/api/fines/user/crud/delete`,
        api_listUser:       `${baseUrl}/api/fines/user/crud/list`,

        api_assignRole:     `${baseUrl}/api/fines/user/role-assign`,

        // Cash Verification
        api_cashVerificaionList : `${baseUrl}/api/fines/cash-verification-list`,
        api_cashVerificaionById : `${baseUrl}/api/fines/cash-verification-dtl`,
        api_verifyCash          : `${baseUrl}/api/fines/verify-cash`,

        // ════════════════════║ ONLINE PAYMENT APIS  ║═════════════════════════
        // api_generateOrderId : `${baseUrl}/fines/razorpay/initiate-payment`,
        api_generateOrderId : `${baseUrl}/api/fines/citizen-online-payment`,
        api_verifyPaymentStatus: `${baseUrl}/`, 

        // ════════════════════║ API TO SEARCH CHALLAN DIRECT  ║═════════════════════════
        api_searchChallanDirect : `${baseUrl}/api/fines/penalty-record/citizen-challan-search`,

        // ════════════════════║ API TO GET TRANSACTION NUMBER FROM ORDER ID  ║═════════════════════════
        api_getTransactionNo : `${baseUrl}/api/fines/penalty-record/get-tran-no`,

        // ═════════════║ API TO GET SEND ONLINE PAYMENT RESPONSE ║══════════════════ 
        api_sendOnlineResponse: `${baseUrl}/api/fines/razorpay/save-response`,

        //get captcha for login
        api_getCaptcha: `${baseUrl}/api/login-Captcha`,

    //    -==================Citizen API List=========================
    api_enf_officer: `${baseUrl}/api/fines/user/enf-officer`,
    api_enf_cell: `${baseUrl}/api/fines/user/enf-officer`,
    api_violation_list: `${baseUrl}/api/fines/v2/violation/crud/list`,

    }


    return apiList
}


