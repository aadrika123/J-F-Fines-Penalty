import{r as l,j as t,n as L}from"./index-78655fd1.js";import{L as T}from"./ListTable-0e74feb6.js";import{A}from"./ApiHeader-6d683756.js";import{u as xe}from"./useSetTitle-0da54cab.js";import{A as F}from"./AxiosInterceptors-0a109868.js";import{P as he}from"./ProjectApiList-562e8dac.js";import{n as b,c as $,a as ue,b as V}from"./PowerupFunctions-256b5cea.js";import{S as B}from"./ShimmerEffectInline-5001c5b1.js";import{B as ge}from"./BarLoader-35c52a18.js";import{B as be}from"./BottomErrorCard-5376566d.js";import{R as Ne}from"./index.esm-4c795d95.js";import{c as we,a as je,u as ye}from"./formik.esm-62c31159.js";import{F as Se}from"./index.esm-e4d5a008.js";import{A as _e}from"./ApiHeader2-b363f7b8.js";import"./index-245cdb5c.js";import"./index-37ca6af9.js";import"./index.esm-004650a9.js";import"./iconBase-20ddb3f6.js";import"./index-3a643443.js";const We=()=>{xe("Violation Master");const{api_addRole:O,api_updateRole:Y,api_deletedRole:K,api_enf_cell:D,api_addUser:G,api_updateUser:J,api_deletedUser:Q,api_enf_officer:W,api_assignRole:X}=he(),h=l.useRef(),[u,N]=l.useState(!1),[Z,R]=l.useState(!1),[v,ee]=l.useState(""),[te,re]=l.useState(!1),[c,ke]=l.useState(""),[k,Ce]=l.useState(null),[g,w]=l.useState([]),[p,Ee]=l.useState([]),[n,se]=l.useState(null),[ie,Ae]=l.useState(!1),[s,Fe]=l.useState("user"),[j,z]=l.useState(null),[y,I]=l.useState(null),[q,C]=l.useState(null),ae="text-gray-800 text-sm",P="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",oe="block w-full border focus:outline-none drop-shadow-sm focus:drop-shadow-md p-1 text-sm text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border file:text-xs file:font-semibold file:bg-zinc-100 hover:file:bg-zinc-200",de=e=>`px-4 py-1 text-sm bg-${e}-500 hover:bg-${e}-600 select-none rounded-sm hover:drop-shadow-md text-white`,f=(e,r)=>{re(e),ee(r)},le=[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Roles",accessor:"role_name",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.role_name)}}],ne=[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Profile",accessor:"profile",Cell:({cell:e})=>{var r,a;return t.jsx(t.Fragment,{children:(r=e.row.original)!=null&&r.profile_image?t.jsx("img",{className:"border drop-shadow-lg h-8 rounded-sm",src:(a=e.row.original)==null?void 0:a.profile_image,alt:"profile",srcset:""}):"N/A"})}},{Header:"Name",accessor:"user_name",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.user_name)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.mobile)}},{Header:"E-mail",accessor:"email",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.email.replace("@","[at]").replace(".","[dot]"))}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var r;return b((r=e.row.original)==null?void 0:r.address)}}],S=[{title:"Role",key:"role",width:` w-full ${s=="role"?"block ":"hidden "}`,type:s=="role"?"text":"select",hint:"Enter role",required:!0,options:p,okey:"id",ovalue:"role_name",required:s=="role"&&!0},{title:"First Name",key:"firstName",width:`md:w-[31%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter first name",required:s=="user"&&!0},{title:"Middle Name",key:"middleName",width:`md:w-[31%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter middle name",required:!1},{title:"Last Name",key:"lastName",width:`md:w-[31%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter last name",required:s=="user"&&!0},{title:"Mobile No.",key:"mobileNo",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter mobile no.",required:s=="user"&&!0},{title:"E-Mail",key:"email",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"email",hint:"Enter email",required:s=="user"&&!0},{title:"Employee Code",key:"employeeCode",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter employee code",required:s=="user"&&!0},{title:"Designation",key:"designation",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter designation",required:s=="user"&&!0},{title:"Upload Profile Picture",key:"profile",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Upload Signature",key:"signature",width:`md:w-[48%] w-full ${s=="user"?"block ":"hidden "}`,type:"file",hint:"Enter employee code",required:!1},{title:"Address",key:"address",width:` w-full ${s=="user"?"block ":"hidden "}`,type:"text",hint:"Enter address",required:s=="user"&&!0}],ce=we().shape([...S].reduce((e,r)=>(r!=null&&r.required&&(e[r.key]=je().required(r==null?void 0:r.hint)),e),{})),d=ye({initialValues:{role:"",firstName:"",middleName:"",lastName:"",mobileNo:"",email:"",designation:"",employeeCode:"",address:"",signature:"",profile:""},enableReinitialize:!0,validationSchema:ce,onSubmit:e=>{M(e)}}),E=()=>{w([]),N(!0);let e;s=="role"&&(e=D),s=="user"&&(e=W),F.post(e,{userType:"EO"},A()).then(r=>{var a,i,o;(a=r==null?void 0:r.data)!=null&&a.status?w((i=r==null?void 0:r.data)==null?void 0:i.data):(f(!0,$((o=r==null?void 0:r.data)==null?void 0:o.message)),w([]))}).catch(r=>{f(!0,"Server Error! Please try again later."),w([])}).finally(()=>{N(!1),se(null),z(null),I(null),C(null),h.current.close()})},pe=(e,r="",a,i="",o="",m=!1,x=[],_="",fe="")=>t.jsxs("div",{className:`flex flex-col ${i} `,children:[r!=""&&t.jsxs("label",{htmlFor:e,className:ae,children:[r," ",m&&t.jsx("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),a!="select"&&a!="file"&&t.jsx("input",{...d.getFieldProps(e),type:a,className:P+` ${d.touched[e]&&d.errors[e]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:e,id:"",placeholder:o}),a=="file"&&t.jsx("input",{type:"file",className:oe+`${d.touched[e]&&d.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400 file:border-red-200 file:text-red-400":" focus:border-zinc-300 border-zinc-200 file:border-zinc-300 file:text-gray-600"}`,name:e,id:"",placeholder:o,accept:".jpg, .jpeg, .png"}),a=="select"&&t.jsx("select",{...d.getFieldProps(e),className:P+` ${d.touched[e]&&d.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:ie?t.jsx("option",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx("option",{value:null,children:"Select"}),typeof x=="object"&&(x==null?void 0:x.map(U=>t.jsx("option",{className:"",value:U[_],children:U[fe]})))]})})]}),M=e=>{R(!0),h.current.close();let r,a,i=new FormData;switch(c){case"add":s=="role"&&(r={roleName:e==null?void 0:e.role},a=O),s=="user"&&(i.append("firstName",e==null?void 0:e.firstName),i.append("middleName",e==null?void 0:e.middleName),i.append("lastName",e==null?void 0:e.lastName),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("designation",e==null?void 0:e.designation),i.append("employeeCode",e==null?void 0:e.employeeCode),i.append("address",e==null?void 0:e.address),j&&i.append("signature",j),y&&i.append("profile",y),a=G);break;case"edit":s=="role"&&(r={roleId:n==null?void 0:n.id,roleName:e==null?void 0:e.role},a=Y),s=="user"&&(i.append("userId",n==null?void 0:n.id),i.append("firstName",e==null?void 0:e.firstName),i.append("middleName",e==null?void 0:e.middleName),i.append("lastName",e==null?void 0:e.lastName),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("designation",e==null?void 0:e.designation),i.append("employeeCode",e==null?void 0:e.employeeCode),i.append("address",e==null?void 0:e.address),j&&i.append("signature",j),y&&i.append("profile",y),a=J);break;case"delete":s=="role"&&(a=K,r={roleId:k}),s=="user"&&(a=Q,i.append("userId",k));break}F.post(a,s=="user"?i:r,s=="user"?_e():A()).then(o=>{var m,x,_;(m=o==null?void 0:o.data)!=null&&m.status?(L.success((x=o==null?void 0:o.data)==null?void 0:x.message),E()):f(!0,$((_=o==null?void 0:o.data)==null?void 0:_.message))}).catch(o=>{f(!0,"Server Error! Please try again later.")}).finally(()=>{R(!1),d.resetForm()})},H=e=>{var i,o;const r=e.target.name,a=e.target.value;if(r=="mobileNo"&&d.setFieldValue("mobileNo",ue(a,d.values.mobileNo,10)),r=="signature"){let m=(i=e==null?void 0:e.target)==null?void 0:i.files[0];if(!V(m)){d.setFieldValue("signature","");return}z(m)}if(r=="profile"){let m=(o=e==null?void 0:e.target)==null?void 0:o.files[0];if(!V(m)){d.setFieldValue("profile","");return}I(m)}r=="roleAssign"&&C(a)},me=()=>{N(!0);let e={userId:k,roleId:q};F.post(X,e,A()).then(r=>{var a,i;(a=r==null?void 0:r.data)!=null&&a.status?(L.success("Role Assigned Successfully !!!"),E()):f(!0,$((i=r==null?void 0:r.data)==null?void 0:i.message))}).catch(r=>{f(!0,"Server Error! Please try again later.")}).finally(()=>{N(!1),h.current.close()})};return l.useEffect(()=>{E()},[s]),t.jsxs(t.Fragment,{children:[Z&&t.jsx(ge,{}),te&&t.jsx(be,{activateBottomErrorCard:f,errorTitle:v}),t.jsxs("div",{className:"poppins p-4 px-6",children:[t.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"Know Your Enforcement Officer"}),t.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),u&&t.jsx(B,{}),!u&&t.jsx(t.Fragment,{children:(g==null?void 0:g.length)>0?t.jsxs(t.Fragment,{children:[s=="role"&&t.jsx(T,{columns:le,dataList:g,exportStatus:!1}),s=="user"&&t.jsx(T,{columns:ne,dataList:g,exportStatus:!1})]}):t.jsx(t.Fragment,{children:t.jsx("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})})})]}),t.jsxs("dialog",{ref:h,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster w-full ${s=="role"&&"md:w-[21rem]"} ${s=="user"&&c!="delete"&&"md:w-[50rem]"} ${c=="delete"&&"md:w-[21rem]"} ${c=="assign"&&"md:w-[40rem]"}`,children:[c!="delete"&&t.jsx("span",{onClick:()=>(h.current.close(),d.resetForm(),C(null)),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:t.jsx(Ne,{})}),c!="delete"&&c!="assign"&&t.jsxs("form",{onChange:e=>(d.handleChange(e),H(e)),onSubmit:d.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[t.jsxs("section",{className:"flex flex-row justify-between gap-4 flex-wrap",children:[t.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[c," ",s]}),c=="edit"&&s=="user"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-4 mb-4 mt-2",children:[t.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Profile Image : ",t.jsx("img",{src:(n==null?void 0:n.profile_image)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Profile",srcset:""})]}),t.jsxs("div",{className:"md:col-span-6 col-span-12 flex gap-2 items-center flex-wrap text-sm",children:["Signature : ",t.jsx("img",{src:(n==null?void 0:n.signature)||"",className:"ml-4 h-20 border drop-shadow-md rounded-sm p-1",alt:"Signature",srcset:""})]})]})}),S==null?void 0:S.map(e=>pe(e==null?void 0:e.key,e==null?void 0:e.title,e==null?void 0:e.type,e==null?void 0:e.width,e==null?void 0:e.hint,e==null?void 0:e.required,e==null?void 0:e.options,e==null?void 0:e.okey,e==null?void 0:e.ovalue))]}),t.jsx("footer",{className:"mt-4 flex justify-center",children:t.jsxs("button",{type:"submit",className:de("green"),children:[c=="add"&&"Add",c=="edit"&&"Update"]})})]}),c=="delete"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsx("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:t.jsx(Se,{size:25})}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),t.jsx("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>h.current.close(),children:"No"}),t.jsx("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>M(),children:"Yes"})]})]})}),c=="assign"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"p-4 px-8 py-6 shadow-lg",children:[t.jsxs("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 mt-4 text-center",children:["Assign Role to ",t.jsx("span",{className:"text-amber-600",children:n==null?void 0:n.user_name})]}),!u&&Array.isArray(p)&&(p==null?void 0:p.length)>0&&t.jsx("div",{className:" mt-4 animate__animated animate__fadeIn animate__faster",children:t.jsx("button",{onClick:()=>me(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),t.jsxs("div",{className:"flex flex-col h-[40vh] w-full overflow-y-auto md:overflow-x-hidden mt-6",children:[t.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[t.jsx("div",{className:"col-span-3",children:"Sl. No."}),t.jsx("div",{className:"col-span-6",children:"Role Name"}),t.jsx("div",{className:"col-span-3 text-end"})]}),u&&t.jsx(B,{}),!u&&Array.isArray(p)&&(p==null?void 0:p.map((e,r)=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[t.jsx("div",{className:"col-span-1",children:r+1}),t.jsx("div",{className:"col-span-10",children:e==null?void 0:e.role_name}),t.jsx("div",{className:"col-span-1",children:t.jsx("label",{class:"inline-flex items-center px-4",children:t.jsx("input",{type:"radio",name:"roleAssign",checked:q==(e==null?void 0:e.id)||"",value:e==null?void 0:e.id,onChange:H,class:"cursor-pointer form-radio h-5 w-5 text-slate-800"})})})]},r)}))),!u&&Array.isArray(p)&&(p==null?void 0:p.length)==0&&t.jsx("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Roles Available"})]})]})})]})]})};export{We as default};