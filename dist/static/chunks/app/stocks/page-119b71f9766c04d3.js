(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8206],{9754:(e,t,s)=>{Promise.resolve().then(s.bind(s,7191))},7191:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(7437),r=s(2546),l=s(2265),n=s(8472),c=s(4962),i=s(8497),o=s(8620),d=s(3159),u=s(6548),h=s(3216);let m=e=>{let{isOpen:t,onClose:s,onUpdate:r,stockItem:n}=e,[c,i]=(0,l.useState)(0);return(0,l.useEffect)(()=>{n&&i(n.stock)},[n]),(0,a.jsx)(o.Z,{open:t,onClose:s,children:(0,a.jsx)(d.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},children:n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{className:"text-center",children:["Update Stock for ",n.name]}),(0,a.jsx)(h.Z,{label:"Stock",type:"number",value:c.toString(),onChange:e=>{let t=e.target.value;if(isNaN(t)||""===t)i(0);else{let e=parseInt(t,10);i(e>=0?e:0)}},fullWidth:!0,margin:"normal"}),(0,a.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,a.jsx)(u.Z,{onClick:s,variant:"outlined",sx:{color:"red",borderColor:"red","&:hover":{backgroundColor:"rgba(255, 0, 0, 0.1)"}},className:"mr-2",children:"Cancel"}),(0,a.jsx)(u.Z,{onClick:()=>{c>=0?(r(n._id,c),s()):alert("Stock cannot be negative")},variant:"contained",sx:{backgroundColor:"green","&:hover":{backgroundColor:"darkgreen"}},children:"Save"})]})]})})})};var x=s(551);let f=()=>{let[e,t]=(0,l.useState)([]),[s,o]=(0,l.useState)(!0),[d,u]=(0,l.useState)(null),[h,f]=(0,l.useState)({}),{loading:p,data:g}=(0,i.U)(),[j,b]=(0,l.useState)(!1),[N,k]=(0,l.useState)(null),[v,S]=(0,l.useState)(""),[C,w]=(0,l.useState)(0),[y,P]=(0,l.useState)(5),[Z,_]=(0,l.useState)("all"),E=async()=>{try{let e=await n.Z.get("/api/menu-items");console.log("Fetched stocks:",e.data),t(e.data)}catch(e){console.error("Error fetching stocks:",e),u("Failed to load stocks. Please try again later.")}finally{o(!1)}};(0,l.useEffect)(()=>{E()},[]);let F=async(e,s)=>{if(!(s<0||isNaN(s))){f(t=>({...t,[e]:!0}));try{let a=await n.Z.put("/api/menu-items",{_id:e,stock:s});200===a.status?(t(t=>t.map(t=>t._id===e?{...t,stock:s}:t)),c.ZP.success("Stock updated successfully")):c.ZP.error("Failed to update stock")}catch(e){console.error("Error updating stock:",e),c.ZP.error("Failed to update stock")}finally{f(t=>({...t,[e]:!1}))}}},O=e=>{k(e),b(!0)},I=e.filter(e=>{let t=e.name.toLowerCase().includes(v.toLowerCase()),s="all"===Z||"soldOut"===Z&&e.stock<=0||"inStock"===Z&&e.stock>0;return t&&s});return p?"Loading user info...":(null==g?void 0:g.admin)?(0,a.jsxs)("section",{className:"mt-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg",children:[(0,a.jsx)(r.Z,{isAdmin:!0}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h1",{className:"text-xl font-bold mb-4",children:"Manage Stocks"}),(0,a.jsx)("input",{type:"text",placeholder:"Search stocks...",value:v,onChange:e=>S(e.target.value),className:"border rounded p-2 mb-4 w-full"}),(0,a.jsx)("div",{className:"flex justify-end mb-4",children:(0,a.jsx)("label",{children:(0,a.jsxs)("select",{value:Z,onChange:e=>_(e.target.value),className:"border rounded p-2",children:[(0,a.jsx)("option",{value:"all",children:"All"}),(0,a.jsx)("option",{value:"soldOut",children:"Sold Out"}),(0,a.jsx)("option",{value:"inStock",children:"In Stock"})]})})}),I.length>0?(0,a.jsxs)("table",{className:"min-w-full bg-white border border-gray-300",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"border-b p-2",children:"Name"}),(0,a.jsx)("th",{className:"border-b p-2",children:"Base Price"}),(0,a.jsx)("th",{className:"border-b p-2",children:"Stock"}),(0,a.jsx)("th",{className:"border-b p-2",children:"Action"})]})}),(0,a.jsx)("tbody",{children:I.slice(C*y,C*y+y).map(e=>(0,a.jsxs)("tr",{className:"hover:bg-gray-100",children:[(0,a.jsx)("td",{className:"border-b p-2 text-left",children:e.name}),(0,a.jsx)("td",{className:"border-b p-2 text-right",children:e.basePrice?"₱".concat(e.basePrice.toFixed(2)):"₱0.00"}),(0,a.jsx)("td",{className:"border-b p-2 text-right",children:e.stock>0?(0,a.jsx)("input",{type:"number",value:isNaN(e.stock)?0:e.stock,onChange:t=>{let s=parseInt(t.target.value);isNaN(s)||F(e._id,s)},className:"border rounded p-1 w-20",disabled:h[e._id]}):(0,a.jsx)("span",{className:"text-red-500 font-bold cursor-pointer",children:"Sold Out"})}),(0,a.jsx)("td",{className:"border-b p-2 text-center",children:(0,a.jsx)("button",{onClick:()=>O(e),className:"bg-green-500 text-white rounded px-2 py-1",children:"Update"})})]},e._id))})]}):(0,a.jsx)("p",{className:"text-gray-500",children:"No stocks found."})]}),(0,a.jsx)(m,{isOpen:j,onClose:()=>{b(!1),k(null)},onUpdate:F,stockItem:N}),(0,a.jsx)(x.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:I.length,rowsPerPage:y,page:C,onPageChange:(e,t)=>{w(t)},onRowsPerPageChange:e=>{P(parseInt(e.target.value,10)),w(0)}})]}):"Not an admin"}},8497:(e,t,s)=>{"use strict";s.d(t,{U:()=>r});var a=s(2265);function r(){let[e,t]=(0,a.useState)(!1),[s,r]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{r(!0),fetch("/api/profile").then(e=>{e.json().then(e=>{t(e),r(!1)})})},[]),{loading:s,data:e}}},2546:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var a=s(7437),r=s(7138),l=s(6463),n=s(2265);function c(e){let{isAdmin:t,isNewUser:s}=e,c=(0,l.usePathname)(),[i,o]=(0,n.useState)(!1);return(0,a.jsxs)("div",{className:"flex mx-auto gap-2 tabs justify-center flex-wrap",children:[(0,a.jsx)(r.default,{className:"/profile"===c?"active":"",href:"/profile",children:"Profile"}),!t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{className:"/menu-notadmin"===c?"active":"",href:"/menu-notadmin",children:"Staff Menu Here"}),(0,a.jsx)(r.default,{className:"/staffreceipt"===c?"active":"",href:"/staffreceipt",children:"Staff Receipt"})]}),t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{className:"/menu-list"===c?"active":"",href:"/menu-list",children:"Menu Here"}),(0,a.jsx)(r.default,{href:"/categories",className:"/categories"===c?"active":"",children:"Categories"}),(0,a.jsx)(r.default,{href:"/menu-items",className:c.includes("menu-items")?"active":"",children:"Add Items"}),(0,a.jsx)(r.default,{className:c.includes("/users")?"active":"",href:"/users",onClick:()=>{s&&(o(!0),setTimeout(()=>{o(!1)},5e3))},children:"Users"}),(0,a.jsx)(r.default,{className:c.includes("/sales")?"active":"",href:"/sales",children:"Sales"}),(0,a.jsx)(r.default,{className:c.includes("/receipt")?"active":"",href:"/receipt",children:"Receipt"}),(0,a.jsx)(r.default,{className:c.includes("/stocks")?"active":"",href:"/stocks",children:"Stocks"})]}),i&&(0,a.jsx)("div",{className:"text-red-500 mt-2",children:"Wait for admin permission on this account."})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7138,4962,5060,551,3659,7130,6215,1744],()=>t(9754)),_N_E=e.O()}]);