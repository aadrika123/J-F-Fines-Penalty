function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:Be}=Object.prototype,{getPrototypeOf:Z}=Object,I=(e=>t=>{const n=Be.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>I(t)===e),v=e=>t=>typeof t===e,{isArray:N}=Array,$=v("undefined");function Ue(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const me=R("ArrayBuffer");function ke(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&me(e.buffer),t}const je=v("string"),E=v("function"),ye=v("number"),H=e=>e!==null&&typeof e=="object",Ie=e=>e===!0||e===!1,F=e=>{if(I(e)!=="object")return!1;const t=Z(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ve=R("Date"),He=R("File"),Me=R("Blob"),qe=R("FileList"),ze=e=>H(e)&&E(e.pipe),Ve=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=I(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Je=R("URLSearchParams"),We=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(r=0;r<o;r++)l=s[r],t.call(null,e[l],l,e)}}function we(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const be=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ee=e=>!$(e)&&e!==be;function K(){const{caseless:e}=Ee(this)&&this||{},t={},n=(r,i)=>{const s=e&&we(t,i)||i;F(t[s])&&F(r)?t[s]=K(t[s],r):F(r)?t[s]=K({},r):N(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&C(arguments[r],n);return t}const Ke=(e,t,n,{allOwnKeys:r}={})=>(C(t,(i,s)=>{n&&E(i)?e[s]=he(i,n):e[s]=i},{allOwnKeys:r}),e),Ge=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xe=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qe=(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&Z(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ze=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ye=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!ye(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Z(Uint8Array)),tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rt=R("HTMLFormElement"),it=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ie=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),st=R("RegExp"),ge=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},ot=e=>{ge(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},at=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return N(e)?r(e):r(String(e).split(t)),n},ct=()=>{},lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),z="abcdefghijklmnopqrstuvwxyz",se="0123456789",Se={DIGIT:se,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+se},ut=(e=16,t=Se.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ft(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pt=e=>{const t=new Array(10),n=(r,i)=>{if(H(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=N(r)?[]:{};return C(r,(o,l)=>{const p=n(o,i+1);!$(p)&&(s[l]=p)}),t[i]=void 0,s}}return r};return n(e,0)},dt=R("AsyncFunction"),ht=e=>e&&(H(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:N,isArrayBuffer:me,isBuffer:Ue,isFormData:Ve,isArrayBufferView:ke,isString:je,isNumber:ye,isBoolean:Ie,isObject:H,isPlainObject:F,isUndefined:$,isDate:ve,isFile:He,isBlob:Me,isRegExp:st,isFunction:E,isStream:ze,isURLSearchParams:Je,isTypedArray:et,isFileList:qe,forEach:C,merge:K,extend:Ke,trim:We,stripBOM:Ge,inherits:Xe,toFlatObject:Qe,kindOf:I,kindOfTest:R,endsWith:Ze,toArray:Ye,forEachEntry:tt,matchAll:nt,isHTMLForm:rt,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:ge,freezeMethods:ot,toObjectSet:at,toCamelCase:it,noop:ct,toFiniteNumber:lt,findKey:we,global:be,isContextDefined:Ee,ALPHABET:Se,generateString:ut,isSpecCompliantForm:ft,toJSONObject:pt,isAsyncFn:dt,isThenable:ht};function m(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Re=m.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(m,_e);Object.defineProperty(Re,"isAxiosError",{value:!0});m.from=(e,t,n,r,i,s)=>{const o=Object.create(Re);return a.toFlatObject(e,o,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),m.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const mt=null;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Oe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function oe(e,t,n){return e?e.concat(t).map(function(i,s){return i=Oe(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function yt(e){return a.isArray(e)&&!e.some(G)}const wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function M(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,_){return!a.isUndefined(_[h])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(i))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,_){let g=f;if(f&&!_&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&yt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(g=a.toArray(f)))return h=Oe(h),g.forEach(function(L,Fe){!(a.isUndefined(L)||L===null)&&t.append(o===!0?oe([h],Fe,s):o===null?h:h+"[]",c(L))}),!1}return G(f)?!0:(t.append(oe(_,h,s),c(f)),!1)}const d=[],b=Object.assign(wt,{defaultVisitor:u,convertValue:c,isVisitable:G});function y(f,h){if(!a.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(f),a.forEach(f,function(g,T){(!(a.isUndefined(g)||g===null)&&i.call(t,g,a.isString(T)?T.trim():T,h,b))===!0&&y(g,h?h.concat(T):[T])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Y(e,t){this._pairs=[],e&&M(e,this,t)}const Ae=Y.prototype;Ae.append=function(t,n){this._pairs.push([t,n])};Ae.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function bt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Te(e,t,n){if(!t)return e;const r=n&&n.encode||bt,i=n&&n.serialize;let s;if(i?s=i(t,n):s=a.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Et{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ce=Et,xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gt=typeof URLSearchParams<"u"?URLSearchParams:Y,St=typeof FormData<"u"?FormData:null,Rt=typeof Blob<"u"?Blob:null,_t=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ot=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:gt,FormData:St,Blob:Rt},isStandardBrowserEnv:_t,isStandardBrowserWebWorkerEnv:Ot,protocols:["http","https","file","blob","url","data"]};function At(e,t){return M(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Tt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function xt(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Ne(e){function t(n,r,i,s){let o=n[s++];const l=Number.isFinite(+o),p=s>=n.length;return o=!o&&a.isArray(i)?i.length:o,p?(a.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!a.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&a.isArray(i[o])&&(i[o]=xt(i[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,i)=>{t(Tt(r),i,n,0)}),n}return null}function Nt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ee={transitional:xe,adapter:S.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return i&&i?JSON.stringify(Ne(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return At(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return M(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Nt(t)):t}],transformResponse:[function(t){const n=this.transitional||ee.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ee.headers[e]={}});const te=ee,Pt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$t=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Pt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},le=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function B(e){return e===!1||e==null?e:a.isArray(e)?e.map(B):String(e)}function Ct(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Dt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,n,r,i){if(a.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Lt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ft(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class q{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(l,p,c){const u=P(p);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(i,u);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||p]=B(l))}const o=(l,p)=>a.forEach(l,(c,u)=>s(c,u,p));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Dt(t)?o($t(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ct(i);if(a.isFunction(n))return n.call(this,i,r);if(a.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||V(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=P(o),o){const l=a.findKey(r,o);l&&(!n||V(r,r[l],l,n))&&(delete r[l],i=!0)}}return a.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||V(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return a.forEach(this,(i,s)=>{const o=a.findKey(r,s);if(o){n[o]=B(i),delete n[s];return}const l=t?Lt(s):String(s).trim();l!==s&&delete n[s],n[l]=B(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[le]=this[le]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=P(o);r[l]||(Ft(i,o),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(q);const O=q;function J(e,t){const n=this||te,r=t||n,i=O.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function Pe(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,m,{__CANCEL__:!0});function Bt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ut=S.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,l){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(i)&&p.push("expires="+new Date(i).toGMTString()),a.isString(s)&&p.push("path="+s),a.isString(o)&&p.push("domain="+o),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function $e(e,t){return e&&!kt(t)?jt(e,t):t}const It=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=a.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function vt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ht(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),u=r[s];o||(o=c),n[i]=p,r[i]=c;let d=s,b=0;for(;d!==i;)b+=n[d++],d=d%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function ue(e,t){let n=0;const r=Ht(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,p=r(l),c=s<=o;n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:p||void 0,estimated:p&&o&&c?(o-s)/p:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const Mt=typeof XMLHttpRequest<"u",qt=Mt&&function(e){return new Promise(function(n,r){let i=e.data;const s=O.from(e.headers).normalize(),o=e.responseType;let l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(i)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=$e(e.baseURL,e.url);c.open(e.method.toUpperCase(),Te(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;const y=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Bt(function(g){n(g),p()},function(g){r(g),p()},h),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||xe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||It(u))&&e.xsrfCookieName&&Ut.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new D(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=vt(u);if(b&&S.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(i||null)})},U={http:mt,xhr:qt};a.forEach(U,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=a.isString(n)?U[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(U,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:U};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function fe(e){return W(e),e.headers=O.from(e.headers),e.data=J.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ce.getAdapter(e.adapter||te.adapter)(e).then(function(r){return W(e),r.data=J.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Pe(r)||(W(e),r&&r.response&&(r.response.data=J.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const pe=e=>e instanceof O?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(c,u,d){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:d},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function i(c,u,d){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function o(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,d){if(d in t)return r(c,u);if(d in e)return r(void 0,c)}const p={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u)=>i(pe(c),pe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=p[u]||i,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==l||(n[u]=b)}),n}const De="1.5.0",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const de={};ne.transitional=function(t,n,r){function i(s,o){return"[Axios v"+De+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(t===!1)throw new m(i(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!de[o]&&(de[o]=!0),t?t(s,o,l):!0}};function zt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const l=e[s],p=l===void 0||o(l,s,e);if(p!==!0)throw new m("option "+s+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const X={assertOptions:zt,validators:ne},A=X.validators;class j{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&X.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),i!=null&&(a.isFunction(i)?n.paramsSerializer={serialize:i}:X.assertOptions(i,{encode:A.function,serialize:A.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=O.concat(o,s);const l=[];let p=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(p=p&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,d=0,b;if(!p){const f=[fe.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);d<b;)u=u.then(f[d++],f[d++]);return u}b=l.length;let y=n;for(d=0;d<b;){const f=l[d++],h=l[d++];try{y=f(y)}catch(_){h.call(this,_);break}}try{u=fe.call(this,y)}catch(f){return Promise.reject(f)}for(d=0,b=c.length;d<b;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=x(this.defaults,t);const n=$e(t.baseURL,t.url);return Te(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){j.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,l){return this.request(x(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}j.prototype[t]=n(),j.prototype[t+"Form"]=n(!0)});const k=j;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,l){r.reason||(r.reason=new D(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(i){t=i}),cancel:t}}}const Vt=re;function Jt(e){return function(n){return e.apply(null,n)}}function Wt(e){return a.isObject(e)&&e.isAxiosError===!0}const Q={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Q).forEach(([e,t])=>{Q[t]=e});const Kt=Q;function Le(e){const t=new k(e),n=he(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Le(x(e,i))},n}const w=Le(te);w.Axios=k;w.CanceledError=D;w.CancelToken=Vt;w.isCancel=Pe;w.VERSION=De;w.toFormData=M;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Jt;w.isAxiosError=Wt;w.mergeConfig=x;w.AxiosHeaders=O;w.formToJSON=e=>Ne(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Ce.getAdapter;w.HttpStatusCode=Kt;w.default=w;const Xt=w,Gt="http://172.18.1.129:8005";function Qt(){let e=Gt;return{api_moduleList:`${e}/api/user-managment/v2/crud/module/list`,api_checkHeartBeat:`${e}/heartbeat`,api_getFreeMenuList:`${e}/api/menu/by-module`,api_login:`${e}/api/login`,api_logout:`${e}/api/logout`,api_setPassword:`${e}/user/set-password`,api_workflowInfo:`${e}/workflow/role-map/workflow-info`,api_postDepartmental:`${e}/post-custom-data`,api_getDepartmentalData:`${e}/get-all-custom-tab-data`,api_verifyDocuments:`${e}/workflows/document/verify-reject`,api_changePassword:`${e}/api/change-password`,api_editAdminProfile:`${e}/edit-my-profile`,api_getNotification:`${e}/get-user-notifications`,api_createNotification:`${e}/dashboard/jsk/prop-dashboard`,api_deleteNotification:`${e}/dashboard/jsk/prop-dashboard`,marriageInbox:e+"/marriage/inbox",marriageDetails:e+"/marriage/details",workflowInfo:e+"/workflow/role-map/workflow-info",appointSet:e+"/marriage/set-appiontment-date",getUploadedDocument:e+"/marriage/get-uploaded-document",docVerify:e+"/marriage/doc-verify-reject",approveReject:e+"/marriage/final-approval-rejection",approvedList:e+"/marriage/approved-application",marriageApplicationList:e+"/marriage/search-application",marriageOrderId:e+"/marriage/generate-order-id",api_postMarriageOfflinePayment:e+"/marriage/offline-payment",api_MarriageReceipt:e+"/marriage/payment-receipt",api_marriageNextLevel:e+"/marriage/post-next-level",api_postMarriageSubmission:`${e}/marriage/apply`,api_getDocList:`${e}/marriage/get-doc-list`,api_docUpload:`${e}/marriage/upload-document`,api_getDetails:`${e}/marriage/static-details`,api_getList:`${e}/marriage/applied-application`,api_deleteApplication:`${e}/marriage/`,api_editMarriageApplication:`${e}/marriage/edit-application`,api_submitInfractionForm:`${e}/api/fines/penalty-record/crud/save`,api_updateInfractionForm:`${e}/api/fines/penalty-record/crud/edit`,api_getInfractionById:`${e}/api/fines/v2/penalty-record/crud/show`,api_getInfractionList:`${e}/api/fines/penalty-record/crud/active-all`,api_getViolationList:`${e}/api/fines/violation/crud/list`,api_getWardList:`${e}/api/workflow/v1/crud/ward-by-ulb`,api_violationMasterList:`${e}/api/fines/violation/crud/list`,api_getViolationById:`${e}/api/fines/violation/crud/get`,api_updateViolation:`${e}/api/fines/violation/crud/edit`,api_addViolation:`${e}/api/fines/violation/crud/save`,api_deleteViolation:`${e}/api/fines/violation/crud/delete`,fpInbox:e+"/api/fines/penalty-record/inbox",fpDetails:e+"/api/fines/penalty-record/detail",fpDocList:e+"/api/fines/penalty-record/crud/show-document",fpApprove:e+"/api/fines/penalty-record/approve",api_fpChallan2:e+"/api/fines/penalty-record/get-challan",getFpUploadedDocument:e+"/api/fines/penalty-record/get-uploaded-document",api_FPTrack:`${e}/api/fines/penalty-record/challan-search`,api_FpApplyReport:`${e}/api/fines/penalty-record/challan-search`,api_ChallanGeneratingReport:`${e}/api/fines/report/challan-wise`,api_ViolationWiseReport:`${e}/api/fines/report/violation-wise`,api_CollectionReport:`${e}/api/fines/report/collection-wise`,api_getChallanById:`${e}/api/fines/penalty-record/get-challan`,api_challanOfflinePayment:`${e}/api/fines/penalty-record/offline-challan-payment`,api_FpReceipt:e+"/api/fines/penalty-record/payment-receipt",api_getViolationList:`${e}/api/fines/violation/list`,api_getSectionList:`${e}/api/fines/section/list`,api_assignViolation:`${e}/api/fines/violation/onspot`,api_getDepartmentList:`${e}/api/fines/department/list`,api_getUserList:`${e}/api/fines/user-list`,api_getViolationByDept:`${e}/api/fines/violation/by-department`,api_listDepartment:`${e}/api/fines/department/crud/list`,api_addDepartment:`${e}/api/fines/department/crud/save`,api_updateDepartment:`${e}/`,api_deleteDepartment:`${e}/api/fines/department/crud/delete`,api_listSection:`${e}/api/fines/section/crud/list`,api_addSection:`${e}/api/fines/section/crud/save`,api_updateSection:`${e}/`,api_deleteSection:`${e}/api/fines/section/crud/delete`,api_compData:`${e}/api/fines/report/comparison`,api_addRole:`${e}/api/fines/wfrole/crud/save`,api_updateRole:`${e}/api/fines/wfrole/crud/edit`,api_deletedRole:`${e}/api/fines/wfrole/crud/delete`,api_listRole:`${e}/api/fines/wfrole/crud/list`,api_addUser:`${e}/api/fines/user/crud/create`,api_updateUser:`${e}/api/fines/user/crud/edit`,api_deletedUser:`${e}/api/fines/user/crud/delete`,api_listUser:`${e}/api/fines/user/crud/list`,api_assignRole:`${e}/api/fines/user/role-assign`,api_cashVerificaionList:`${e}/api/fines/cash-verification-list`,api_cashVerificaionById:`${e}/api/fines/cash-verification-dtl`,api_verifyCash:`${e}/api/fines/verify-cash`,api_generateOrderId:`${e}/api/fines/citizen-online-payment`,api_verifyPaymentStatus:`${e}/`,api_searchChallanDirect:`${e}/api/fines/penalty-record/citizen-challan-search`,api_getTransactionNo:`${e}/api/fines/penalty-record/get-tran-no`,api_sendOnlineResponse:`${e}/api/fines/razorpay/save-response`,api_enf_officer:`${e}/api/fines/user/enf-officer`,api_enf_cell:`${e}/api/fines/user/enf-officer`,api_violation_list:`${e}/api/fines/v2/violation/crud/list`}}export{Qt as P,Xt as a};