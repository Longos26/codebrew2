(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4457],{1164:(e,t,s)=>{Promise.resolve().then(s.bind(s,7375))},7375:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(7437),n=s(4514),i=s(2546),r=s(2265),l=s(8497),c=s(4962),d=s(551);function o(){let[e,t]=(0,r.useState)(""),[s,o]=(0,r.useState)([]),{loading:u,data:h}=(0,l.U)(),[m,f]=(0,r.useState)(null),[x,g]=(0,r.useState)(0),[p,j]=(0,r.useState)(5);function v(){fetch("/api/categories").then(e=>e.json()).then(e=>{o(e)}).catch(e=>{c.ZP.error("Failed to fetch categories"),console.error(e)})}async function N(s){s.preventDefault();let a={name:e};m&&(a._id=m._id);let n=m?"PUT":"POST";(await fetch("/api/categories",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?(t(""),v(),f(null),c.ZP.success(m?"Category updated":"Category created")):c.ZP.error("Error, sorry...")}async function b(e){(await fetch("/api/categories?_id=".concat(e),{method:"DELETE"})).ok?(c.ZP.success("Deleted"),v()):c.ZP.error("Error deleting category")}return((0,r.useEffect)(()=>{v()},[]),u)?"Loading user info...":(null==h?void 0:h.admin)?(0,a.jsxs)("section",{className:"mt-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg",children:[(0,a.jsx)(i.Z,{isAdmin:!0}),(0,a.jsx)("form",{className:"mt-8",onSubmit:N,children:(0,a.jsxs)("div",{className:"flex gap-2 items-end",children:[(0,a.jsxs)("div",{className:"grow",children:[(0,a.jsxs)("label",{children:[m?"Update category":"New category name",m&&(0,a.jsxs)(a.Fragment,{children:[": ",(0,a.jsx)("b",{children:m.name})]})]}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value)})]}),(0,a.jsxs)("div",{className:"pb-2 flex gap-2",children:[(0,a.jsx)("button",{className:"border border-green-500",type:"submit",children:m?"Update":"Create"}),(0,a.jsx)("button",{type:"button",onClick:()=>{f(null),t("")},children:"Cancel"})]})]})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mt-8 text-sm text-gray-500",children:"Existing categories"}),(null==s?void 0:s.length)>0&&s.slice(x*p,x*p+p).map(e=>(0,a.jsxs)("div",{className:"bg-gray-100 rounded-xl p- 2 px-4 flex gap-1 mb-1 items-center",children:[(0,a.jsx)("div",{className:"grow",children:e.name}),(0,a.jsxs)("div",{className:"flex gap-1",children:[(0,a.jsx)("button",{className:"button bg-green-500 text-white rounded px-4 py-1",onClick:()=>{f(e),t(e.name)},children:"Edit"}),(0,a.jsx)(n.Z,{className:"bg-red-500 text-white rounded px-4 py-1 hover:bg-red-600",label:"Delete",onDelete:()=>b(e._id)})]})]},e._id))]}),(0,a.jsx)(d.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:s.length,rowsPerPage:p,page:x,onPageChange:(e,t)=>g(t),onRowsPerPageChange:e=>{j(parseInt(e.target.value,10)),g(0)}})]}):"Not an admin"}},4514:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(7437),n=s(2265);function i(e){let{label:t,onDelete:s}=e,[i,r]=(0,n.useState)(!1);return i?(0,a.jsx)("div",{className:"fixed bg-black/80 inset-0 flex items-center h-full justify-center",children:(0,a.jsxs)("div",{className:"bg-white p-4 rounded-lg",children:[(0,a.jsx)("div",{children:"Are you sure you want to delete?"}),(0,a.jsxs)("div",{className:"flex gap-2 mt-1",children:[(0,a.jsx)("button",{type:"button",onClick:()=>r(!1),children:"Cancel"}),(0,a.jsx)("button",{onClick:()=>{s(),r(!1)},type:"button",className:"primary",children:"Yes,\xa0Delete!"})]})]})}):(0,a.jsx)("button",{type:"button",onClick:()=>r(!0),children:t})}},8497:(e,t,s)=>{"use strict";s.d(t,{U:()=>n});var a=s(2265);function n(){let[e,t]=(0,a.useState)(!1),[s,n]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{n(!0),fetch("/api/profile").then(e=>{e.json().then(e=>{t(e),n(!1)})})},[]),{loading:s,data:e}}},2546:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(7437),n=s(7138),i=s(6463),r=s(2265);function l(e){let{isAdmin:t,isNewUser:s}=e,l=(0,i.usePathname)(),[c,d]=(0,r.useState)(!1);return(0,a.jsxs)("div",{className:"flex mx-auto gap-2 tabs justify-center flex-wrap",children:[(0,a.jsx)(n.default,{className:"/profile"===l?"active":"",href:"/profile",children:"Profile"}),!t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{className:"/menu-notadmin"===l?"active":"",href:"/menu-notadmin",children:"Staff Menu Here"}),(0,a.jsx)(n.default,{className:"/staffreceipt"===l?"active":"",href:"/staffreceipt",children:"Staff Receipt"})]}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{className:"/menu-list"===l?"active":"",href:"/menu-list",children:"Menu Here"}),(0,a.jsx)(n.default,{href:"/categories",className:"/categories"===l?"active":"",children:"Categories"}),(0,a.jsx)(n.default,{href:"/menu-items",className:l.includes("menu-items")?"active":"",children:"Add Items"}),(0,a.jsx)(n.default,{className:l.includes("/users")?"active":"",href:"/users",onClick:()=>{s&&(d(!0),setTimeout(()=>{d(!1)},5e3))},children:"Users"}),(0,a.jsx)(n.default,{className:l.includes("/sales")?"active":"",href:"/sales",children:"Sales"}),(0,a.jsx)(n.default,{className:l.includes("/receipt")?"active":"",href:"/receipt",children:"Receipt"}),(0,a.jsx)(n.default,{className:l.includes("/stocks")?"active":"",href:"/stocks",children:"Stocks"})]}),c&&(0,a.jsx)("div",{className:"text-red-500 mt-2",children:"Wait for admin permission on this account."})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7138,4962,5060,551,7130,6215,1744],()=>t(1164)),_N_E=e.O()}]);