import{r as reactExports,c as contextVar,n,a as useNavigate,d as getLocalStorageItem,s as setLocalStorageItem,e as setLocalStorageItemStrigified,j as jsxRuntimeExports}from"./index-e38c13c4.js";import{h as hoistStatics,u as useFormik,c as create$3,a as create$6}from"./formik.esm-9a93aef2.js";/* empty css              */import{R as RotatingLines}from"./Hourglass-f3edf316.js";import{P as ProjectApiList}from"./ProjectApiList-aaddad78.js";import{A as ApiHeader}from"./ApiHeader-6d683756.js";import{i as img}from"./fp-d98bddc3.js";import{A as AxiosInterceptors}from"./AxiosInterceptors-69122494.js";import{P as PropTypes}from"./index-9efa0d0d.js";import{c as checkErrorMessage,a as allowNumberInput}from"./PowerupFunctions-32214351.js";import{R as RxCross2}from"./index.esm-27d33e49.js";import"./iconBase-384e9125.js";var _excluded=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(s){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(s[t]=i[t])}return s},_extends$1.apply(this,arguments)}function _objectWithoutPropertiesLoose$1(s,a){if(s==null)return{};var i={},t=Object.keys(s),e,r;for(r=0;r<t.length;r++)e=t[r],!(a.indexOf(e)>=0)&&(i[e]=s[e]);return i}function _assertThisInitialized(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _inheritsLoose$1(s,a){s.prototype=Object.create(a.prototype),s.prototype.constructor=s,_setPrototypeOf(s,a)}function _setPrototypeOf(s,a){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(s,a)}var ReCAPTCHA=function(s){_inheritsLoose$1(a,s);function a(){var t;return t=s.call(this)||this,t.handleExpired=t.handleExpired.bind(_assertThisInitialized(t)),t.handleErrored=t.handleErrored.bind(_assertThisInitialized(t)),t.handleChange=t.handleChange.bind(_assertThisInitialized(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(_assertThisInitialized(t)),t}var i=a.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&this._widgetId!==void 0?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&this._widgetId!==void 0)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise(function(r,o){e.executionResolve=r,e.executionReject=o,e.execute()})},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&this._widgetId!==void 0&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&this._widgetId===void 0){var r=document.createElement("div");this._widgetId=e(r,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(r)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props;e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated;var r=_objectWithoutPropertiesLoose$1(e,_excluded);return reactExports.createElement("div",_extends$1({},r,{ref:this.handleRecaptchaRef}))},a}(reactExports.Component);ReCAPTCHA.displayName="ReCAPTCHA";ReCAPTCHA.propTypes={sitekey:PropTypes.string.isRequired,onChange:PropTypes.func,grecaptcha:PropTypes.object,theme:PropTypes.oneOf(["dark","light"]),type:PropTypes.oneOf(["image","audio"]),tabindex:PropTypes.number,onExpired:PropTypes.func,onErrored:PropTypes.func,size:PropTypes.oneOf(["compact","normal","invisible"]),stoken:PropTypes.string,hl:PropTypes.string,badge:PropTypes.oneOf(["bottomright","bottomleft","inline"]),isolated:PropTypes.bool};ReCAPTCHA.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function _extends(){return _extends=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(s[t]=i[t])}return s},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(s,a){if(s==null)return{};var i={},t=Object.keys(s),e,r;for(r=0;r<t.length;r++)e=t[r],!(a.indexOf(e)>=0)&&(i[e]=s[e]);return i}function _inheritsLoose(s,a){s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.__proto__=a}var SCRIPT_MAP={},idCount=0;function makeAsyncScript(s,a){return a=a||{},function(t){var e=t.displayName||t.name||"Component",r=function(m){_inheritsLoose(d,m);function d(u,c){var l;return l=m.call(this,u,c)||this,l.state={},l.__scriptURL="",l}var x=d.prototype;return x.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+idCount++),this.__scriptLoaderID},x.setupScriptURL=function(){return this.__scriptURL=typeof s=="function"?s():s,this.__scriptURL},x.asyncScriptLoaderHandleLoad=function(c){var l=this;this.setState(c,function(){return l.props.asyncScriptOnLoad&&l.props.asyncScriptOnLoad(l.state)})},x.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=SCRIPT_MAP[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var l in c.observers)c.observers[l](c);delete window[a.callbackName]},x.componentDidMount=function(){var c=this,l=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),f=a,y=f.globalName,R=f.callbackName,E=f.scriptId;if(y&&typeof window[y]<"u"&&(SCRIPT_MAP[l]={loaded:!0,observers:{}}),SCRIPT_MAP[l]){var b=SCRIPT_MAP[l];if(b&&(b.loaded||b.errored)){this.asyncScriptLoaderHandleLoad(b);return}b.observers[h]=function(p){return c.asyncScriptLoaderHandleLoad(p)};return}var w={};w[h]=function(p){return c.asyncScriptLoaderHandleLoad(p)},SCRIPT_MAP[l]={loaded:!1,observers:w};var g=document.createElement("script");g.src=l,g.async=!0;for(var N in a.attributes)g.setAttribute(N,a.attributes[N]);E&&(g.id=E);var k=function(j){if(SCRIPT_MAP[l]){var _=SCRIPT_MAP[l],v=_.observers;for(var S in v)j(v[S])&&delete v[S]}};R&&typeof window<"u"&&(window[R]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),g.onload=function(){var p=SCRIPT_MAP[l];p&&(p.loaded=!0,k(function(j){return R?!1:(j(p),!0)}))},g.onerror=function(){var p=SCRIPT_MAP[l];p&&(p.errored=!0,k(function(j){return j(p),!0}))},document.body.appendChild(g)},x.componentWillUnmount=function(){var c=this.__scriptURL;if(a.removeOnUnmount===!0)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h+=1)l[h].src.indexOf(c)>-1&&l[h].parentNode&&l[h].parentNode.removeChild(l[h]);var f=SCRIPT_MAP[c];f&&(delete f.observers[this.asyncScriptLoaderGetScriptLoaderID()],a.removeOnUnmount===!0&&delete SCRIPT_MAP[c])},x.render=function(){var c=a.globalName,l=this.props;l.asyncScriptOnLoad;var h=l.forwardedRef,f=_objectWithoutPropertiesLoose(l,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(f[c]=typeof window[c]<"u"?window[c]:void 0),f.ref=h,reactExports.createElement(t,f)},d}(reactExports.Component),o=reactExports.forwardRef(function(m,d){return reactExports.createElement(r,_extends({},m,{forwardedRef:d}))});return o.displayName="AsyncScriptLoader("+e+")",o.propTypes={asyncScriptOnLoad:PropTypes.func},hoistStatics(o,t)}}var callbackName="onloadcallback",globalName="grecaptcha";function getOptions(){return typeof window<"u"&&window.recaptchaOptions||{}}function getURL(){var s=getOptions(),a=s.useRecaptchaNet?"recaptcha.net":"www.google.com";return s.enterprise?"https://"+a+"/recaptcha/enterprise.js?onload="+callbackName+"&render=explicit":"https://"+a+"/recaptcha/api.js?onload="+callbackName+"&render=explicit"}makeAsyncScript(getURL,{callbackName,globalName,attributes:getOptions().nonce?{nonce:getOptions().nonce}:{}})(ReCAPTCHA);const{api_login,api_getFreeMenuList}=ProjectApiList();function Login(){var s,a,i,t;const{setmenuList,setuserDetails,setheartBeatCounter}=reactExports.useContext(contextVar),[loaderStatus,setLoaderStatus]=reactExports.useState(!1),[manualDialogStatus,setmanualDialogStatus]=reactExports.useState(!1),userManualModalRef=reactExports.useRef(),modalRef=reactExports.useRef(),generateCaptcha=()=>{const num1=Math.floor(Math.random()*10)+1,num2=Math.floor(Math.random()*10)+1,operator=["+","-","*"][Math.floor(Math.random()*3)],expression=`${num1} ${operator} ${num2}`,answer=eval(expression);return{expression,answer}},[captcha,setCaptcha]=reactExports.useState(generateCaptcha()),[isFormSubmitted,setIsFormSubmitted]=reactExports.useState(!1),formik=useFormik({initialValues:{userAnswer:"",username:"",password:""},validationSchema:create$3({userAnswer:create$6().required("Please solve the captcha.").test("correctAnswer","Incorrect answer. Please try again.",e=>!isFormSubmitted||e===captcha.answer.toString()),username:create$6().required("Enter Username"),password:create$6().required("Enter Password")}),onSubmit:async e=>{if(setIsFormSubmitted(!0),e.userAnswer===captcha.answer.toString())try{await authUser(e.username,e.password),setCaptcha(generateCaptcha()),setIsFormSubmitted(!1),formik.resetForm()}catch{setIsFormSubmitted(!1)}}});reactExports.useEffect(()=>{setIsFormSubmitted(!1),setCaptcha(generateCaptcha())},[]);const formik2=useFormik({initialValues:{email:"",mobile:""},onSubmit:e=>{submitFun(e)},validationSchema:create$3().shape({email:create$6().test("email-or-mobile","Please provide an email or mobile number",function(e){const{mobile:r}=this.parent;return!(!e&&!r)}),mobile:create$6().test("email-or-mobile","Please provide an email or mobile number",function(e){const{email:r}=this.parent;return!(!e&&!r)})})}),submitFun=e=>{setLoaderStatus(!0);let r={mobileNo:e==null?void 0:e.mobile,email:e==null?void 0:e.email};axios.post("",r,header).then(function(o){var m,d;o.data.status==!0?(n.success((m=o==null?void 0:o.data)==null?void 0:m.message),modalRef.current.close(),formik2.resetForm()):(setLoaderStatus(!1),n.error((d=o==null?void 0:o.data)==null?void 0:d.message))}).catch(function(o){setLoaderStatus(!1),n.error("Server Error")})},navigate=useNavigate();reactExports.useEffect(()=>{getLocalStorageItem("token")!="null"&&getLocalStorageItem("token")!=null&&navigate("/home")},[]);const labelStyle="text-gray-800 text-sm",inputStyle="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",header={headers:{Accept:"application/json"}},authUser=e=>{setLoaderStatus(!0);let r={email:formik.values.username,password:formik.values.password};AxiosInterceptors.post(api_login,r,header).then(function(o){var m,d,x,u,c;o.data.status==!0?(setLocalStorageItem("token",(d=(m=o==null?void 0:o.data)==null?void 0:m.data)==null?void 0:d.token),setLocalStorageItemStrigified("userDetails",(u=(x=o==null?void 0:o.data)==null?void 0:x.data)==null?void 0:u.userDetails),fetchMenuList(),setheartBeatCounter(l=>l+1),n.success("Login Successfull")):(setLoaderStatus(!1),n.error((c=o==null?void 0:o.data)==null?void 0:c.message))}).catch(function(o){setLoaderStatus(!1),n.error("Server Error")})},fetchMenuList=()=>{let e={moduleId:14};AxiosInterceptors.post(api_getFreeMenuList,e,ApiHeader()).then(function(r){var o,m,d,x,u,c;r.data.status==!0?(setmenuList((m=(o=r==null?void 0:r.data)==null?void 0:o.data)==null?void 0:m.permission),setuserDetails((x=(d=r==null?void 0:r.data)==null?void 0:d.data)==null?void 0:x.userDetails),setLocalStorageItemStrigified("menuList",(c=(u=r==null?void 0:r.data)==null?void 0:u.data)==null?void 0:c.permission),window.location.href="/fines/home"):(setLoaderStatus(!1),seterrorMsg(checkErrorMessage(r.data.message)))}).catch(function(r){setLoaderStatus(!1)})},handleChange=e=>{let r=e.target.name,o=e.target.value;r=="email"&&(formik2.setFieldValue("mobile",""),formik2.setFieldValue("email",o)),r=="mobile"&&(formik2.setFieldValue("email",""),formik2.setFieldValue("mobile",allowNumberInput(o,formik2==null?void 0:formik2.values.mobile,10)))};return reactExports.useEffect(()=>{manualDialogStatus?userManualModalRef.current.open||userManualModalRef.current.showModal():userManualModalRef.current.open&&userManualModalRef.current.close()},[manualDialogStatus]),jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("dialog",{ref:userManualModalRef,className:"bg-transparent w-full",children:jsxRuntimeExports.jsx("div",{className:"w-full md:w-2/3 mx-auto my-10 bg-white px-2 rounded-xl shadow shadow-slate-300 pt-7 relative min-h-[500px]",children:jsxRuntimeExports.jsxs("div",{className:"",children:[jsxRuntimeExports.jsx("button",{onClick:()=>setmanualDialogStatus(!1),type:"button",className:"absolute top-6 right-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:jsxRuntimeExports.jsx("svg",{className:"w-5 h-5",fill:"currentColor",children:jsxRuntimeExports.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),jsxRuntimeExports.jsxs("div",{className:"bg-white ",children:[jsxRuntimeExports.jsx("h1",{className:"text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ",children:"Download User Manual"}),jsxRuntimeExports.jsxs("div",{className:"container p-10 mx-auto grid grid-cols-12 space-x-2",children:[jsxRuntimeExports.jsx("div",{className:"col-span-12 md:col-span-3 gap-4 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3",children:jsxRuntimeExports.jsxs("div",{className:"w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg bg-gray-200",children:[jsxRuntimeExports.jsx("p",{className:"font-medium text-gray-500 uppercase ",children:"Enforcement Officer App"}),jsxRuntimeExports.jsx("a",{href:"/manual-enf-off.pdf",download:!0,children:jsxRuntimeExports.jsx("button",{className:"w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80",children:"Download"})})]})}),jsxRuntimeExports.jsx("div",{className:"col-span-12 md:col-span-3 gap-4 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3",children:jsxRuntimeExports.jsxs("div",{className:"w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg bg-gray-200",children:[jsxRuntimeExports.jsx("p",{className:"font-medium text-gray-500 uppercase ",children:"Commitee Member Web"}),jsxRuntimeExports.jsx("a",{href:"/manual-enf-commitee.pdf",download:!0,children:jsxRuntimeExports.jsx("button",{className:"w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80",children:"Download"})})]})}),jsxRuntimeExports.jsx("div",{className:"col-span-12 md:col-span-3 gap-4 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3",children:jsxRuntimeExports.jsxs("div",{className:"w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg bg-gray-200",children:[jsxRuntimeExports.jsx("p",{className:"font-medium text-gray-500 uppercase ",children:"Enforcement Cell Web"}),jsxRuntimeExports.jsx("a",{href:"/manual-enf-cell.pdf",download:!0,children:jsxRuntimeExports.jsx("button",{className:"w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80",children:"Download"})})]})}),jsxRuntimeExports.jsx("div",{className:"col-span-12 md:col-span-3 gap-4 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3",children:jsxRuntimeExports.jsxs("div",{className:"w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg bg-gray-200",children:[jsxRuntimeExports.jsxs("p",{className:"font-medium text-gray-500 uppercase ",children:["JSK",jsxRuntimeExports.jsx("div",{children:" "})]}),jsxRuntimeExports.jsx("a",{href:"/manual-jsk.pdf",download:!0,children:jsxRuntimeExports.jsx("button",{className:"w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80",children:"Download"})})]})})]})]})]})})}),jsxRuntimeExports.jsx("header",{className:" border-b border-gray-200 bg-white darks:bg-gray-800 darks:border-gray-800",children:jsxRuntimeExports.jsx("div",{className:"container mx-auto xl:max-w-6xl ",children:jsxRuntimeExports.jsxs("nav",{className:"flex flex-row flex-nowrap items-center justify-between mt-0 py-4 ",id:"desktop-menu",children:[jsxRuntimeExports.jsx("a",{className:"flex items-center py-2 ltr:mr-4 rtl:ml-4 text-xl cursor-default",children:jsxRuntimeExports.jsxs("div",{className:"flex gap-2",children:[" ",jsxRuntimeExports.jsx("span",{className:"w-9",children:jsxRuntimeExports.jsx("img",{src:"https://res.cloudinary.com/djkewhhqs/image/upload/v1708507605/JUIDCO_IMAGE/Juidco%20svg%20file/Fines_y6gbu1.svg",alt:"",srcset:"",className:""})})," ",jsxRuntimeExports.jsx("span",{className:"font-bold text-xl uppercase",children:"Login - Fines & Penalties Management System"})]})}),jsxRuntimeExports.jsx("div",{className:" flex justify-center h-max select-none space-x-4",children:jsxRuntimeExports.jsxs("a",{onClick:()=>setmanualDialogStatus(!0),className:"h-[40%] cursor-pointer py-2 flex items-center gap-4 text-gray-100 bg-gray-800 pl-4 pr-6 drop-shadow-lg transition-all duration-200 hover:scale-105 rounded-md",children:[jsxRuntimeExports.jsx("div",{className:"h-[70%] "}),jsxRuntimeExports.jsx("div",{className:"flex flex-col",children:jsxRuntimeExports.jsx("span",{className:"text-sm font-semibold py-1",children:"Downloads"})})]})})]})})}),jsxRuntimeExports.jsx("main",{className:" bg-gray-100 flex justify-center items-center md:h-[78vh]",children:jsxRuntimeExports.jsx("div",{className:"pt-8 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-40",children:jsxRuntimeExports.jsx("div",{className:"mx-auto px-4 ",children:jsxRuntimeExports.jsxs("div",{className:"flex flex-wrap flex-row justify-center gap-2 items-center",children:[jsxRuntimeExports.jsx("div",{className:" px-4 w-full md:w-[40%] 2xl:w-[30%]",children:jsxRuntimeExports.jsx("div",{className:"max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-10 lg:mb-0",children:jsxRuntimeExports.jsx("div",{className:"relative",children:jsxRuntimeExports.jsx("div",{className:"p-6 sm:py-8 sm:px-12 rounded-lg bg-white darks:bg-gray-800 shadow-xl",children:jsxRuntimeExports.jsxs("form",{onSubmit:formik.handleSubmit,children:[jsxRuntimeExports.jsx("div",{className:"text-center",children:jsxRuntimeExports.jsx("h1",{className:"text-2xl leading-normal mb-3 font-bold text-gray-800 darks:text-gray-300 text-center",children:"Login"})}),jsxRuntimeExports.jsx("hr",{className:"block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700"}),jsxRuntimeExports.jsxs("div",{className:"mb-6",children:[jsxRuntimeExports.jsx("label",{htmlFor:"inputemail",className:"inline-block mb-2",children:"E-mail"}),jsxRuntimeExports.jsx("input",{...formik.getFieldProps("username"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",defaultValue:!0,"aria-label":"email",type:"email",required:!0}),jsxRuntimeExports.jsx("span",{className:"text-red-600 text-xs",children:formik.touched.username&&formik.errors.username?formik.errors.username:null})]}),jsxRuntimeExports.jsxs("div",{className:"mb-6",children:[jsxRuntimeExports.jsx("div",{className:"flex flex-wrap flex-row",children:jsxRuntimeExports.jsx("div",{className:"flex-shrink max-w-full w-1/2",children:jsxRuntimeExports.jsx("label",{htmlFor:"inputpass",className:"inline-block mb-2",children:"Password"})})}),jsxRuntimeExports.jsx("input",{...formik.getFieldProps("password"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600","aria-label":"password",type:"password",defaultValue:!0,required:!0}),jsxRuntimeExports.jsx("span",{className:"text-red-600 text-xs",children:formik.touched.password&&formik.errors.password?formik.errors.password:null})]}),jsxRuntimeExports.jsxs("div",{className:"mb-6",children:[jsxRuntimeExports.jsxs("label",{htmlFor:"userAnswer",className:"block text-gray-700 text-sm font-bold mb-2",children:["Solve the Captcha: ",captcha.expression," ="]}),jsxRuntimeExports.jsx("input",{type:"text",id:"userAnswer",name:"userAnswer",onChange:formik.handleChange,onBlur:formik.handleBlur,value:formik.values.userAnswer,className:"w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"}),formik.touched.userAnswer&&formik.errors.userAnswer&&jsxRuntimeExports.jsx("div",{className:"text-red-600 text-sm mt-1",children:formik.errors.userAnswer})]}),jsxRuntimeExports.jsx("div",{className:"grid",children:loaderStatus?jsxRuntimeExports.jsx("div",{className:"flex justify-center",children:jsxRuntimeExports.jsx(RotatingLines,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):jsxRuntimeExports.jsxs("button",{type:"submit",className:"py-2 px-4 inline-block text-center rounded leading-normal text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:[jsxRuntimeExports.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right",viewBox:"0 0 16 16",children:[jsxRuntimeExports.jsx("path",{fillRule:"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),jsxRuntimeExports.jsx("path",{fillRule:"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]}),"Login"]})})]})})})})}),jsxRuntimeExports.jsx("div",{className:"px-4 w-full md:w-[45%]",children:jsxRuntimeExports.jsxs("div",{className:"text-center mt-6 lg:mt-0",children:[jsxRuntimeExports.jsx("img",{src:img,alt:"welcome",className:"w-[60%] h-auto mx-auto hue-rotate-[90deg]"}),jsxRuntimeExports.jsx("div",{className:"px-4 mt-2",children:jsxRuntimeExports.jsx("h1",{className:"text-bold text-2xl",children:"Fines & Penalties Admin Portal"})})]})})]})})})}),jsxRuntimeExports.jsx("footer",{className:"bg-white  border-t pt-5 border-gray-200 darks:bg-gray-800 darks:border-gray-800",children:jsxRuntimeExports.jsx("div",{className:"container mx-auto px-4 xl:max-w-6xl ",children:jsxRuntimeExports.jsx("div",{className:"mx-auto px-4",children:jsxRuntimeExports.jsxs("div",{className:"flex flex-wrap flex-row -mx-4",children:[jsxRuntimeExports.jsx("div",{className:"flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right",children:jsxRuntimeExports.jsxs("ul",{className:"ltr:pl-0 rtl:pr-0 space-x-4",children:[jsxRuntimeExports.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:jsxRuntimeExports.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Support |"})}),jsxRuntimeExports.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:jsxRuntimeExports.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Help Center |"})}),jsxRuntimeExports.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:jsxRuntimeExports.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Privacy |"})}),jsxRuntimeExports.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:jsxRuntimeExports.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Terms of Service"})})]})}),jsxRuntimeExports.jsx("div",{className:"flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left",children:jsxRuntimeExports.jsxs("p",{className:"mb-0 mt-3 md:mt-0",children:[jsxRuntimeExports.jsx("a",{href:"#",className:"hover:text-indigo-500",children:"UD&HD"})," | All right reserved"]})})]})})})}),jsxRuntimeExports.jsxs("dialog",{ref:modalRef,className:"relative overflow-clip animate__animated animate__zoomIn animate__faster w-[20rem] backdrop:backdrop-blur-sm p-4 px-6",children:[jsxRuntimeExports.jsx("span",{onClick:()=>(modalRef.current.close(),formik2.resetForm()),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:jsxRuntimeExports.jsx(RxCross2,{})}),jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsxs("form",{onSubmit:formik2.handleSubmit,onChange:e=>handleChange(e),children:[jsxRuntimeExports.jsx("div",{className:"text-center",children:jsxRuntimeExports.jsx("h1",{className:"text-2xl border-b pb-1 leading-normal mb-4 font-semibold text-gray-800 darks:text-gray-300 text-center",children:"Reset Password"})}),jsxRuntimeExports.jsxs("div",{className:" flex flex-col",children:[jsxRuntimeExports.jsxs("label",{htmlFor:"email",className:labelStyle,children:["E-mail :"," "]}),jsxRuntimeExports.jsx("input",{...formik.getFieldProps("email"),value:formik2.values.email,type:"text",className:inputStyle+` ${(s=formik2.touched)!=null&&s.email&&((a=formik2.errors)!=null&&a.email)?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:"email",id:"",placeholder:"Enter email"})]}),jsxRuntimeExports.jsx("div",{className:"my-4 text-center font-semibold ",children:"OR"}),jsxRuntimeExports.jsxs("div",{className:" flex flex-col mb-6",children:[jsxRuntimeExports.jsxs("label",{htmlFor:"mobile",className:labelStyle,children:["Mobile No. :"," "]}),jsxRuntimeExports.jsx("input",{...formik.getFieldProps("mobile"),value:formik2.values.mobile,type:"text",className:inputStyle+` ${(i=formik2.touched)!=null&&i.mobile&&((t=formik2.errors)!=null&&t.mobile)?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:"mobile",id:"",placeholder:"Enter mobile no."})]}),jsxRuntimeExports.jsx("div",{className:"grid mb-2",children:loaderStatus?jsxRuntimeExports.jsx("div",{className:"flex justify-center",children:jsxRuntimeExports.jsx(RotatingLines,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):jsxRuntimeExports.jsx("button",{onClick:formik2.handleSubmit,className:"py-2 px-4 inline-block text-center rounded leading-normal text-white bg-slate-500 border border-slate-500 hover:text-white hover:bg-slate-600 hover:ring-0 hover:border-indigo-600 focus:bg-slate-600 focus:border-slate-600 focus:outline-none focus:ring-0",children:"Reset"})})]})})]})]})}export{Login as default};