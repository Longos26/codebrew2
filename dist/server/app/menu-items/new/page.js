(()=>{var e={};e.id=385,e.ids=[385],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},7313:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(49442),n=r(10042),a=r(48190),i=r.n(a),o=r(63289),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["menu-items",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,41378)),"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\menu-items\\new\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,50934)),"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\menu-items\\new\\page.js"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/menu-items/new/page",pathname:"/menu-items/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},77872:(e,t,r)=>{Promise.resolve().then(r.bind(r,41378))},31114:(e,t,r)=>{Promise.resolve().then(r.bind(r,40600))},4619:(e,t,r)=>{"use strict";var s=r(9877);r.o(s,"redirect")&&r.d(t,{redirect:function(){return s.redirect}}),r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},40600:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(20149),n=r(14715),a=r(81106),i=r(54288),o=r(50526),l=r(85723),d=r(4619),c=r(63606),u=r(99548);function p(){let[e,t]=(0,c.useState)(!1),{loading:r,data:p}=(0,o.U)();async function m(e,r){e.preventDefault();let s=new Promise(async(e,t)=>{(await fetch("/api/menu-items",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})).ok?e():t()});await u.ZP.promise(s,{loading:"Saving this tasty item",success:"Saved",error:"Error"}),t(!0)}return e?(0,d.redirect)("/menu-items"):r?"Loading user info...":p.admin?(0,s.jsxs)("section",{className:"mt-8",children:[(0,s.jsx)(i.Z,{isAdmin:!0}),(0,s.jsx)("div",{className:"max-w-2xl mx-auto mt-8",children:(0,s.jsxs)(l.default,{href:"/menu-items",className:"button",children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)("span",{children:"Show all menu items"})]})}),(0,s.jsx)(a.Z,{menuItem:null,onSubmit:m})]}):"Not an admin."}},14715:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(20149);function n({className:e="w-6 h-6"}){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}},39900:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(20149);function n({className:e="w-6 h-6"}){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}},81106:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var s=r(20149);function n({className:e="w-6 h-6"}){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}var a=r(39900),i=r(14971),o=r(99548);function l({link:e,setLink:t}){async function r(e){let r=e.target.files;if(r?.length===1){let e=new FormData;e.set("file",r[0]);let s=fetch("/api/upload",{method:"POST",body:e}).then(e=>{if(e.ok)return e.json().then(e=>{t(e)});throw Error("Something went wrong")});await o.ZP.promise(s,{loading:"Uploading...",success:"Upload complete",error:"Upload error"})}}return(0,s.jsxs)(s.Fragment,{children:[e&&(0,s.jsx)(i.default,{className:"rounded-lg w-full h-full mb-1",src:e,width:250,height:250,alt:"avatar"}),!e&&(0,s.jsx)("div",{className:"text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1",children:"No image"}),(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"file",className:"hidden",onChange:r}),(0,s.jsx)("span",{className:"block border border-gray-300 rounded-lg p-2 text-center cursor-pointer",children:"Change image"})]})]})}function d({className:e="w-6 h-6"}){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function c({className:e="w-6 h-6"}){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})})}var u=r(63606);function p({name:e,addLabel:t,props:r,setProps:i}){let[o,l]=(0,u.useState)(!1);function p(e,t,r){let s=e.target.value;i(e=>{let n=[...e];return n[t][r]=s,n})}return(0,s.jsxs)("div",{className:"bg-gray-200 p-2 rounded-md mb-2",children:[(0,s.jsxs)("button",{onClick:()=>l(e=>!e),className:"inline-flex p-1 border-0 justify-start",type:"button",children:[o&&(0,s.jsx)(c,{}),!o&&(0,s.jsx)(d,{}),(0,s.jsx)("span",{children:e}),(0,s.jsxs)("span",{children:["(",r?.length,")"]})]}),(0,s.jsxs)("div",{className:o?"block":"hidden",children:[r?.length>0&&r.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-end gap-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Name"}),(0,s.jsx)("input",{type:"text",placeholder:"Size name",value:e.name,onChange:e=>p(e,t,"name")})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Extra price"}),(0,s.jsx)("input",{type:"text",placeholder:"Extra price",value:e.price,onChange:e=>p(e,t,"price")})]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"button",onClick:()=>{i(e=>e.filter((e,r)=>r!==t))},className:"bg-white mb-2 px-2",children:(0,s.jsx)(a.Z,{})})})]},t)),(0,s.jsxs)("button",{type:"button",onClick:function(){i(e=>[...e,{name:"",price:0}])},className:"bg-white items-center",children:[(0,s.jsx)(n,{className:"w-4 h-4"}),(0,s.jsx)("span",{children:t})]})]})]})}function m({onSubmit:e,menuItem:t}){let[r,n]=(0,u.useState)(t?.image||""),[a,i]=(0,u.useState)(t?.name||""),[o,d]=(0,u.useState)(t?.description||""),[c,m]=(0,u.useState)(Number(t?.basePrice)||0),[h,x]=(0,u.useState)(t?.sizes||[]),[g,j]=(0,u.useState)(t?.category||""),[v,w]=(0,u.useState)([]),[f,b]=(0,u.useState)(t?.extraIngredientPrices||[]);return(0,s.jsx)("form",{onSubmit:t=>{if(t.preventDefault(),!g){alert("Please select a category.");return}if(!r){alert("Please upload an image.");return}if(c<0){alert("Base price cannot be negative.");return}e(t,{image:r,name:a,description:o,basePrice:parseFloat(c),sizes:h,extraIngredientPrices:f,category:g})},className:"mt-8 max-w-2xl mx-auto",children:(0,s.jsxs)("div",{className:"md:grid items-start gap-4",style:{gridTemplateColumns:".3fr .7fr"},children:[(0,s.jsx)("div",{children:(0,s.jsx)(l,{link:r,setLink:n})}),(0,s.jsxs)("div",{className:"grow",children:[(0,s.jsx)("label",{children:"Item name"}),(0,s.jsx)("input",{type:"text",value:a,onChange:e=>i(e.target.value),required:!0}),(0,s.jsx)("label",{children:"Description"}),(0,s.jsx)("input",{type:"text",value:o,onChange:e=>d(e.target.value)}),(0,s.jsx)("label",{children:"Category"}),(0,s.jsxs)("select",{value:g,onChange:e=>j(e.target.value),required:!0,children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Select a category"}),v?.length>0&&v.map(e=>(0,s.jsx)("option",{value:e._id,children:e.name},e._id))]}),(0,s.jsx)("label",{children:"Base price"}),(0,s.jsx)("input",{type:"number",value:c,onChange:e=>m(e.target.value),min:"0",step:"0.01",style:{appearance:"textfield",padding:"8px 12px",fontSize:"16px",borderRadius:"4px",border:"1px solid #ddd",width:"100%",boxSizing:"border-box"}}),(0,s.jsx)(p,{name:"Sizes",addLabel:"Add item size",props:h,setProps:x}),(0,s.jsx)(p,{name:"Pieces and Product",addLabel:"Add prices",props:f,setProps:b}),(0,s.jsx)("button",{type:"submit",children:"Save"})]})]})})}},41378:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\xampp\\\\htdocs\\\\codebrew2o\\\\codebrew2\\\\src\\\\app\\\\menu-items\\\\new\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\menu-items\\new\\page.js","default")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492,426,686,971,263],()=>r(7313));module.exports=s})();