(()=>{var e={};e.id=520,e.ids=[520],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},60376:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var r=s(49442),a=s(10042),n=s(48190),i=s.n(n),d=s(63289),o={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);s.d(t,o);let l=["",{children:["menu-notadmin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,19791)),"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\menu-notadmin\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,50934)),"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\menu-notadmin\\page.js"],u={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/menu-notadmin/page",pathname:"/menu-notadmin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},27192:(e,t,s)=>{Promise.resolve().then(s.bind(s,19791))},62500:(e,t,s)=>{Promise.resolve().then(s.bind(s,46102))},4619:(e,t,s)=>{"use strict";var r=s(9877);s.o(r,"redirect")&&s.d(t,{redirect:function(){return r.redirect}}),s.o(r,"useParams")&&s.d(t,{useParams:function(){return r.useParams}}),s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},46102:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(20149),a=s(46304),n=s(50526),i=s(31729),d=s(54288),o=s(63606),l=s(47111);function c(){let[e,t]=(0,o.useState)([]),[s,c]=(0,o.useState)([]),[u,m]=(0,o.useState)(""),[x,p]=(0,o.useState)([]),{loading:h,data:g}=(0,n.U)(),{data:b}=(0,l.useSession)();b?.user?.isAdmin,b?.user?.permissions;let j=s.filter(e=>e.name.toLowerCase().includes(u.toLowerCase()));return h?"Loading user info...":b?.user?(0,r.jsxs)("section",{className:"mt-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg",children:[(0,r.jsx)(d.Z,{isPermission:x?.permissions}),(0,r.jsxs)("div",{className:"text-center mb-8",children:[(0,r.jsx)("input",{type:"text",placeholder:"Search products...",className:"px-4 py-2 border rounded",value:u,onChange:e=>m(e.target.value)}),(0,r.jsx)("button",{onClick:()=>m(""),className:"ml-27 px-4 py-2 bg-green-500 text-white rounded",children:"Clear"})]}),e?.length>0&&e.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(a.Z,{mainHeader:e.name})}),(0,r.jsx)("div",{className:"grid sm:grid-cols-3 gap-4 mt-6 mb-12",children:j.filter(t=>t.category===e._id).map(e=>(0,r.jsx)(i.default,{...e},e._id))})]},e._id))]}):"Not an User."}},46304:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(20149);function a({subHeader:e,mainHeader:t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"uppercase text-white-500 font-semibold leading-4",children:e}),(0,r.jsx)("h2",{className:"text-green-500 font-bold text-4xl italic",children:t})]})}},31729:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(20149),a=s(94035),n=s(63606);function i({hasSizesOrExtras:e,onClick:t,basePrice:s,image:a,stock:i}){let[d,o]=(0,n.useState)(!1),l=i<=0||d,c=async()=>{l||(o(!0),await new Promise(e=>setTimeout(e,300)),t(s),o(!1))};return!e||l?(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("button",{type:"button",onClick:c,className:`w-full ${l?"bg-gray-500":"bg-green-500"} text-white rounded-full px-8 py-2`,disabled:l,children:(0,r.jsx)("span",{children:`Add to cart ₱${s}`})})}):(0,r.jsx)("button",{type:"button",onClick:c,className:`mt-4 ${l?"bg-gray-500":"bg-green-500"} text-white rounded-full px-8 py-2`,disabled:l,children:(0,r.jsx)("span",{children:`Add to cart (from ₱${s})`})})}var d=s(14971);function o({onAddToCart:e,stock:t,...s}){let{image:a,description:o,name:l,basePrice:c,sizes:u,extraIngredientPrices:m}=s,x=u?.length>0||m?.length>0,[p,h]=(0,n.useState)(!1),g=t>0;return(0,r.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all",children:[(0,r.jsx)("div",{className:"text-center",children:a?(0,r.jsx)(d.default,{src:a,alt:l,className:"max-h-24 block mx-auto",width:96,height:96}):(0,r.jsx)("div",{className:"max-h-24 block mx-auto bg-gray-300 rounded"})}),(0,r.jsx)("h4",{className:"font-semibold text-xl my-3",children:l}),(0,r.jsx)("p",{className:"text-gray-600 text-sm",children:o}),(0,r.jsx)("p",{className:"text-lg font-semibold flex items-center justify-center space-x-2",children:g?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"text-green-600",children:"Available"})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"text-red-600",children:"Sold Out"})})}),(0,r.jsx)(i,{image:a,hasSizesOrExtras:x,onClick:()=>{p||(h(!0),e(),setTimeout(()=>{h(!1)},2e3))},basePrice:c,disabled:p||!g})]})}var l=s(99548);function c(e){let{image:t,name:s,description:i,basePrice:c,stock:u,sizes:m,extraIngredientPrices:x}=e,[p]=(0,n.useState)(u),[h,g]=(0,n.useState)(null),[b,j]=(0,n.useState)([]),[f,v]=(0,n.useState)(!1),[y,w]=(0,n.useState)(1),{addToCart:N}=(0,n.useContext)(a.A);async function C(){if(p<=0){l.Am.error("This item is sold out and cannot be added to the cart.");return}if((m?.length>0||x?.length>0)&&!f){v(!0);return}N(e,h,b,y),l.Am.success("Item added to cart successfully!"),await new Promise(e=>setTimeout(e,1e3)),v(!1)}return(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)("div",{onClick:()=>v(!1),className:"fixed inset-0 bg-black/80 flex items-center justify-center",children:(0,r.jsx)("div",{onClick:e=>e.stopPropagation(),className:"my-8 bg-white p-2 rounded-lg max-w-md",children:(0,r.jsxs)("div",{className:"overflow-y-scroll p-2",style:{maxHeight:"calc(100vh - 100px)"},children:[(0,r.jsx)(d.default,{src:t||null,alt:s,width:300,height:200,className:"mx-auto"}),(0,r.jsx)("h2",{className:"text-lg font-bold text-center mb-2",children:s}),(0,r.jsx)("p",{className:"text-center text-gray-500 text-sm mb-2",children:i}),m?.length>0&&(0,r.jsxs)("div",{className:"py-2",children:[(0,r.jsx)("h3",{className:"text-center text-gray-700",children:"Pick your size"}),m.map(e=>(0,r.jsxs)("label",{className:"flex items-center gap-2 p-4 border rounded-md mb-1",children:[(0,r.jsx)("input",{type:"radio",onChange:()=>g(e),checked:h?._id===e._id,name:"size"}),e.name," ₱",e.price]},e._id))]}),x?.length>0&&(0,r.jsxs)("div",{className:"py-2",children:[(0,r.jsx)("h3",{className:"text-center text-gray-700",children:"Any extras?"}),x.map(e=>(0,r.jsxs)("label",{className:"flex items-center gap-2 p-4 border rounded-md mb-1",children:[(0,r.jsx)("input",{type:"checkbox",onChange:t=>{t.target.checked?j(t=>[...t,e]):j(t=>t.filter(t=>t._id!==e._id))},checked:b.some(t=>t._id===e._id),name:e.name}),e.name," +₱",e.price]},e._id))]}),(0,r.jsxs)("div",{className:"flex justify-between items-center py-2",children:[(0,r.jsx)("button",{className:"text-gray-700 p-2 border rounded",onClick:()=>w(e=>Math.max(e-1,1)),disabled:p<=0,children:"-"}),(0,r.jsx)("span",{className:"text-lg",children:y}),(0,r.jsx)("button",{className:"text-gray-700 p-2 border rounded",onClick:()=>w(e=>Math.min(e+1,p)),disabled:p<=0,children:"+"})]}),(0,r.jsx)("div",{className:"primary sticky bottom-2",children:(0,r.jsxs)("button",{onClick:C,className:"w-full p-3 bg-green-500 text-white rounded-md",children:["Add to cart ₱",(c+(h?.price||0)+b.reduce((e,t)=>e+t.price,0))*y]})}),(0,r.jsx)("button",{className:"mt-2",onClick:()=>v(!1),children:"Cancel"})]})})}),(0,r.jsx)(o,{onAddToCart:C,...e})]})}},19791:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(78105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\xampp\\\\htdocs\\\\codebrew2o\\\\codebrew2\\\\src\\\\app\\\\menu-notadmin\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\menu-notadmin\\page.js","default")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[492,426,686,971,263],()=>s(60376));module.exports=r})();