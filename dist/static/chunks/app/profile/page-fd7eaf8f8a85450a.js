(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4178],{1424:(e,t,r)=>{Promise.resolve().then(r.bind(r,2141))},3098:(e,t,r)=>{"use strict";r.d(t,{F4:()=>f,iv:()=>u,xB:()=>c});var n=r(8437),a=r(2265),s=r(9926),i=r(1073),o=r(4110);r(1818),r(6451);var l=function(e,t){var r=arguments;if(null==t||!n.h.call(t,"css"))return a.createElement.apply(void 0,r);var s=r.length,i=Array(s);i[0]=n.E,i[1]=(0,n.c)(e,t);for(var o=2;o<s;o++)i[o]=r[o];return a.createElement.apply(null,i)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(l||(l={}));var c=(0,n.w)(function(e,t){var r=e.styles,l=(0,o.O)([r],void 0,a.useContext(n.T)),c=a.useRef();return(0,i.j)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,a=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(n=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),c.current=[r,n],function(){r.flush()}},[t]),(0,i.j)(function(){var e=c.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==l.next&&(0,s.My)(t,l.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",l,r,!1)},[t,l.name]),null});function u(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.O)(t)}function f(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},468:(e,t,r)=>{"use strict";r.d(t,{Z:()=>M});var n=r(8646),a=r(2265),s=r(4839),i=r(6990),o=r(3098),l=r(4086),c=r(109),u=r(9570),f=r(2272),d=r(8683),m=r(2296),p=r(587);function h(e){return(0,p.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var y=r(7437);function v(){let e=(0,n._)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return v=function(){return e},e}function x(){let e=(0,n._)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"]);return x=function(){return e},e}function g(){let e=(0,n._)(["\n        animation: "," 1.4s linear infinite;\n      "]);return g=function(){return e},e}function b(){let e=(0,n._)(["\n        animation: "," 1.4s ease-in-out infinite;\n      "]);return b=function(){return e},e}let S=(0,o.F4)(v()),j=(0,o.F4)(x()),P="string"!=typeof S?(0,o.iv)(g(),S):null,k="string"!=typeof j?(0,o.iv)(b(),j):null,w=e=>{let{classes:t,variant:r,color:n,disableShrink:a}=e,s={root:["root",r,"color".concat((0,f.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,f.Z)(r)),a&&"circleDisableShrink"]};return(0,i.Z)(s,h,t)},N=(0,l.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t["color".concat((0,f.Z)(r.color))]]}})((0,c.Z)(e=>{let{theme:t}=e;return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:P||{animation:"".concat(S," 1.4s linear infinite")}},...Object.entries(t.palette).filter((0,d.Z)()).map(e=>{let[r]=e;return{props:{color:r},style:{color:(t.vars||t).palette[r].main}}})]}})),$=(0,l.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),C=(0,l.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t["circle".concat((0,f.Z)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((0,c.Z)(e=>{let{theme:t}=e;return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink},style:k||{animation:"".concat(j," 1.4s ease-in-out infinite")}}]}})),M=a.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:i=!1,size:o=40,style:l,thickness:c=3.6,value:f=0,variant:d="indeterminate",...m}=r,p={...r,color:a,disableShrink:i,size:o,thickness:c,value:f,variant:d},h=w(p),v={},x={},g={};if("determinate"===d){let e=2*Math.PI*((44-c)/2);v.strokeDasharray=e.toFixed(3),g["aria-valuenow"]=Math.round(f),v.strokeDashoffset="".concat(((100-f)/100*e).toFixed(3),"px"),x.transform="rotate(-90deg)"}return(0,y.jsx)(N,{className:(0,s.Z)(h.root,n),style:{width:o,height:o,...x,...l},ownerState:p,ref:t,role:"progressbar",...g,...m,children:(0,y.jsx)($,{className:h.svg,ownerState:p,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44),children:(0,y.jsx)(C,{className:h.circle,style:v,ownerState:p,cx:44,cy:44,r:(44-c)/2,fill:"none",strokeWidth:c})})})})},8683:(e,t,r)=>{"use strict";function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t=>{let[,r]=t;return r&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("string"!=typeof e.main)return!1;for(let r of t)if(!e.hasOwnProperty(r)||"string"!=typeof e[r])return!1;return!0}(r,e)}}r.d(t,{Z:()=>n})},6451:(e,t,r)=>{"use strict";var n=r(2659),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return n.isMemo(e)?i:o[e.$$typeof]||a}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=i;var c=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var a=m(r);a&&a!==p&&e(t,a,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var o=l(t),h=l(r),y=0;y<i.length;++y){var v=i[y];if(!s[v]&&!(n&&n[v])&&!(h&&h[v])&&!(o&&o[v])){var x=d(r,v);try{c(t,v,x)}catch(e){}}}}return t}},4332:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case s:case o:case i:case m:return e;default:switch(e=e&&e.$$typeof){case c:case d:case y:case h:case l:return e;default:return t}}case a:return t}}}function j(e){return S(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=s,t.Lazy=y,t.Memo=h,t.Portal=a,t.Profiler=o,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return j(e)||S(e)===u},t.isConcurrentMode=j,t.isContextConsumer=function(e){return S(e)===c},t.isContextProvider=function(e){return S(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===s},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===h},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===o},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===o||e===i||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===x||e.$$typeof===g||e.$$typeof===b||e.$$typeof===v)},t.typeOf=S},2659:(e,t,r)=>{"use strict";e.exports=r(4332)},2141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(7437);function a(e){let{addressProps:t,setAddressProp:r,disabled:a=!1}=e,{phone:s,streetAddress:i}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("label",{children:"Phone"}),(0,n.jsx)("input",{disabled:a,type:"tel",placeholder:"Phone number",value:s||"",onChange:e=>r("phone",e.target.value)}),(0,n.jsx)("label",{children:"Street address"}),(0,n.jsx)("input",{disabled:a,type:"text",placeholder:"Street address",value:i||"",onChange:e=>r("streetAddress",e.target.value)})]})}var s=r(6648),i=r(4962);function o(e){let{link:t,setLink:r}=e;return(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(s.default,{className:"rounded-lg w-full h-full mb-1",src:t,width:250,height:250,alt:"avatar"}),!t&&(0,n.jsx)("div",{className:"text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1",children:"Hello!"})]})}var l=r(8497),c=r(2265);function u(e){let{user:t,onSave:r}=e,[s,i]=(0,c.useState)((null==t?void 0:t.name)||""),[u,f]=(0,c.useState)((null==t?void 0:t.image)||""),[d,m]=(0,c.useState)((null==t?void 0:t.phone)||""),[p,h]=(0,c.useState)((null==t?void 0:t.streetAddress)||""),[y,v]=(0,c.useState)((null==t?void 0:t.admin)||!1),{data:x}=(0,l.U)();return(0,n.jsxs)("div",{className:"md:flex gap-4",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"p-2 rounded-lg relative max-w-[120px]",children:(0,n.jsx)(o,{link:u,setLink:f})})}),(0,n.jsxs)("form",{className:"grow",onSubmit:e=>r(e,{name:s,image:u,phone:d,admin:y,streetAddress:p}),children:[(0,n.jsx)("label",{children:"First and last name"}),(0,n.jsx)("input",{type:"text",placeholder:"First and last name",value:s,onChange:e=>i(e.target.value)}),(0,n.jsx)("label",{children:"Email"}),(0,n.jsx)("input",{type:"email",disabled:!0,value:t.email,placeholder:"email"}),(0,n.jsx)(a,{addressProps:{phone:d,streetAddress:p},setAddressProp:function(e,t){"phone"===e&&m(t),"streetAddress"===e&&h(t)}}),x.admin&&(0,n.jsx)("div",{children:(0,n.jsxs)("label",{className:"p-2 inline-flex items-center gap-2 mb-2",htmlFor:"adminCb",children:[(0,n.jsx)("input",{id:"adminCb",type:"checkbox",className:"",value:"1",checked:y,onChange:e=>v(e.target.checked)}),(0,n.jsx)("span",{children:"Admin"})]})}),(0,n.jsx)("button",{type:"submit",children:"Save"})]})]})}var f=r(2546),d=r(998),m=r(6463),p=r(468);function h(){let e=(0,d.useSession)(),[t,r]=(0,c.useState)(null),[a,s]=(0,c.useState)(!1),[o,l]=(0,c.useState)(!1),[h,y]=(0,c.useState)(!1),{status:v}=e;async function x(e,t){e.preventDefault();let n=new Promise(async(e,n)=>{let a=await fetch("/api/profile",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});a.ok?(r((await a.json()).user),e()):n((await a.json()).error||"Failed to update profile")});await i.ZP.promise(n,{loading:"Saving...",success:"Profile Saved!",error:e=>e})}return((0,c.useEffect)(()=>{if("unauthenticated"===v){(0,m.redirect)("/login");return}"authenticated"===v&&(y(!0),fetch("/api/profile").then(e=>e.json()).then(e=>{e&&(r(e),s(e.admin||!1)),l(!0),y(!1)}).catch(e=>{console.error("Error fetching profile:",e),l(!0),y(!1)}))},[e,v]),"loading"===v||!o||h)?(0,n.jsxs)("div",{className:"flex justify-center items-center h-screen",children:[(0,n.jsx)(p.Z,{})," "]}):(0,n.jsxs)("section",{className:"mt-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg",children:[(0,n.jsx)(f.Z,{isAdmin:a}),(0,n.jsx)("div",{className:"max-w-2xl mx-auto mt-8",children:(0,n.jsx)(u,{user:t||{},onSave:x})})]})}},8497:(e,t,r)=>{"use strict";r.d(t,{U:()=>a});var n=r(2265);function a(){let[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{a(!0),fetch("/api/profile").then(e=>{e.json().then(e=>{t(e),a(!1)})})},[]),{loading:r,data:e}}},2546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7437),a=r(7138),s=r(6463),i=r(2265);function o(e){let{isAdmin:t,isNewUser:r}=e,o=(0,s.usePathname)(),[l,c]=(0,i.useState)(!1);return(0,n.jsxs)("div",{className:"flex mx-auto gap-2 tabs justify-center flex-wrap",children:[(0,n.jsx)(a.default,{className:"/profile"===o?"active":"",href:"/profile",children:"Profile"}),!t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{className:"/menu-notadmin"===o?"active":"",href:"/menu-notadmin",children:"Staff Menu Here"}),(0,n.jsx)(a.default,{className:"/staffreceipt"===o?"active":"",href:"/staffreceipt",children:"Staff Receipt"})]}),t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{className:"/menu-list"===o?"active":"",href:"/menu-list",children:"Menu Here"}),(0,n.jsx)(a.default,{href:"/categories",className:"/categories"===o?"active":"",children:"Categories"}),(0,n.jsx)(a.default,{href:"/menu-items",className:o.includes("menu-items")?"active":"",children:"Add Items"}),(0,n.jsx)(a.default,{className:o.includes("/users")?"active":"",href:"/users",onClick:()=>{r&&(c(!0),setTimeout(()=>{c(!1)},5e3))},children:"Users"}),(0,n.jsx)(a.default,{className:o.includes("/sales")?"active":"",href:"/sales",children:"Sales"}),(0,n.jsx)(a.default,{className:o.includes("/receipt")?"active":"",href:"/receipt",children:"Receipt"}),(0,n.jsx)(a.default,{className:o.includes("/stocks")?"active":"",href:"/stocks",children:"Stocks"})]}),l&&(0,n.jsx)("div",{className:"text-red-500 mt-2",children:"Wait for admin permission on this account."})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7138,4962,6648,998,5060,7130,6215,1744],()=>t(1424)),_N_E=e.O()}]);