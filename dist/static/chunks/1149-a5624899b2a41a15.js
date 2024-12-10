"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1149],{6463:(e,t,s)=>{var r=s(1169);s.o(r,"redirect")&&s.d(t,{redirect:function(){return r.redirect}}),s.o(r,"useParams")&&s.d(t,{useParams:function(){return r.useParams}}),s.o(r,"usePathname")&&s.d(t,{usePathname:function(){return r.usePathname}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},8497:(e,t,s)=>{s.d(t,{U:()=>n});var r=s(2265);function n(){let[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{n(!0),fetch("/api/profile").then(e=>{e.json().then(e=>{t(e),n(!1)})})},[]),{loading:s,data:e}}},2919:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(7437);function n(e){let{className:t="w-6 h-6"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}},3550:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(7437);function n(e){let{className:t="w-6 h-6"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}},6281:(e,t,s)=>{s.d(t,{Z:()=>m});var r=s(7437);function n(e){let{className:t="w-6 h-6"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}var a=s(3550),l=s(6648),i=s(4962);function o(e){let{link:t,setLink:s}=e;async function n(e){let t=e.target.files;if((null==t?void 0:t.length)===1){let e=new FormData;e.set("file",t[0]);let r=fetch("/api/upload",{method:"POST",body:e}).then(e=>{if(e.ok)return e.json().then(e=>{s(e)});throw Error("Something went wrong")});await i.ZP.promise(r,{loading:"Uploading...",success:"Upload complete",error:"Upload error"})}}return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)(l.default,{className:"rounded-lg w-full h-full mb-1",src:t,width:250,height:250,alt:"avatar"}),!t&&(0,r.jsx)("div",{className:"text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1",children:"No image"}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"file",className:"hidden",onChange:n}),(0,r.jsx)("span",{className:"block border border-gray-300 rounded-lg p-2 text-center cursor-pointer",children:"Change image"})]})]})}function c(e){let{className:t="w-6 h-6"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function d(e){let{className:t="w-6 h-6"}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})})}var u=s(2265);function h(e){let{name:t,addLabel:s,props:l,setProps:i}=e,[o,h]=(0,u.useState)(!1);function m(e,t,s){let r=e.target.value;i(e=>{let n=[...e];return n[t][s]=r,n})}return(0,r.jsxs)("div",{className:"bg-gray-200 p-2 rounded-md mb-2",children:[(0,r.jsxs)("button",{onClick:()=>h(e=>!e),className:"inline-flex p-1 border-0 justify-start",type:"button",children:[o&&(0,r.jsx)(d,{}),!o&&(0,r.jsx)(c,{}),(0,r.jsx)("span",{children:t}),(0,r.jsxs)("span",{children:["(",null==l?void 0:l.length,")"]})]}),(0,r.jsxs)("div",{className:o?"block":"hidden",children:[(null==l?void 0:l.length)>0&&l.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-end gap-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Name"}),(0,r.jsx)("input",{type:"text",placeholder:"Size name",value:e.name,onChange:e=>m(e,t,"name")})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Extra price"}),(0,r.jsx)("input",{type:"text",placeholder:"Extra price",value:e.price,onChange:e=>m(e,t,"price")})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"button",onClick:()=>{i(e=>e.filter((e,s)=>s!==t))},className:"bg-white mb-2 px-2",children:(0,r.jsx)(a.Z,{})})})]},t)),(0,r.jsxs)("button",{type:"button",onClick:function(){i(e=>[...e,{name:"",price:0}])},className:"bg-white items-center",children:[(0,r.jsx)(n,{className:"w-4 h-4"}),(0,r.jsx)("span",{children:s})]})]})]})}function m(e){let{onSubmit:t,menuItem:s}=e,[n,a]=(0,u.useState)((null==s?void 0:s.image)||""),[l,i]=(0,u.useState)((null==s?void 0:s.name)||""),[c,d]=(0,u.useState)((null==s?void 0:s.description)||""),[m,x]=(0,u.useState)(Number(null==s?void 0:s.basePrice)||0),[p,f]=(0,u.useState)((null==s?void 0:s.sizes)||[]),[j,v]=(0,u.useState)((null==s?void 0:s.category)||""),[g,b]=(0,u.useState)([]),[w,k]=(0,u.useState)((null==s?void 0:s.extraIngredientPrices)||[]);return(0,u.useEffect)(()=>{fetch("/api/categories").then(e=>e.json()).then(e=>b(e)).catch(e=>console.error("Failed to fetch categories:",e))},[]),(0,r.jsx)("form",{onSubmit:e=>{if(e.preventDefault(),!j){alert("Please select a category.");return}if(!n){alert("Please upload an image.");return}if(m<0){alert("Base price cannot be negative.");return}t(e,{image:n,name:l,description:c,basePrice:parseFloat(m),sizes:p,extraIngredientPrices:w,category:j})},className:"mt-8 max-w-2xl mx-auto",children:(0,r.jsxs)("div",{className:"md:grid items-start gap-4",style:{gridTemplateColumns:".3fr .7fr"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(o,{link:n,setLink:a})}),(0,r.jsxs)("div",{className:"grow",children:[(0,r.jsx)("label",{children:"Item name"}),(0,r.jsx)("input",{type:"text",value:l,onChange:e=>i(e.target.value),required:!0}),(0,r.jsx)("label",{children:"Description"}),(0,r.jsx)("input",{type:"text",value:c,onChange:e=>d(e.target.value)}),(0,r.jsx)("label",{children:"Category"}),(0,r.jsxs)("select",{value:j,onChange:e=>v(e.target.value),required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select a category"}),(null==g?void 0:g.length)>0&&g.map(e=>(0,r.jsx)("option",{value:e._id,children:e.name},e._id))]}),(0,r.jsx)("label",{children:"Base price"}),(0,r.jsx)("input",{type:"number",value:m,onChange:e=>x(e.target.value),min:"0",step:"0.01",style:{appearance:"textfield",padding:"8px 12px",fontSize:"16px",borderRadius:"4px",border:"1px solid #ddd",width:"100%",boxSizing:"border-box"}}),(0,r.jsx)(h,{name:"Sizes",addLabel:"Add item size",props:p,setProps:f}),(0,r.jsx)(h,{name:"Pieces and Product",addLabel:"Add prices",props:w,setProps:k}),(0,r.jsx)("button",{type:"submit",children:"Save"})]})]})})}},2546:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(7437),n=s(7138),a=s(6463),l=s(2265);function i(e){let{isAdmin:t,isNewUser:s}=e,i=(0,a.usePathname)(),[o,c]=(0,l.useState)(!1);return(0,r.jsxs)("div",{className:"flex mx-auto gap-2 tabs justify-center flex-wrap",children:[(0,r.jsx)(n.default,{className:"/profile"===i?"active":"",href:"/profile",children:"Profile"}),!t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{className:"/menu-notadmin"===i?"active":"",href:"/menu-notadmin",children:"Staff Menu Here"}),(0,r.jsx)(n.default,{className:"/staffreceipt"===i?"active":"",href:"/staffreceipt",children:"Staff Receipt"})]}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{className:"/menu-list"===i?"active":"",href:"/menu-list",children:"Menu Here"}),(0,r.jsx)(n.default,{href:"/categories",className:"/categories"===i?"active":"",children:"Categories"}),(0,r.jsx)(n.default,{href:"/menu-items",className:i.includes("menu-items")?"active":"",children:"Add Items"}),(0,r.jsx)(n.default,{className:i.includes("/users")?"active":"",href:"/users",onClick:()=>{s&&(c(!0),setTimeout(()=>{c(!1)},5e3))},children:"Users"}),(0,r.jsx)(n.default,{className:i.includes("/sales")?"active":"",href:"/sales",children:"Sales"}),(0,r.jsx)(n.default,{className:i.includes("/receipt")?"active":"",href:"/receipt",children:"Receipt"}),(0,r.jsx)(n.default,{className:i.includes("/stocks")?"active":"",href:"/stocks",children:"Stocks"})]}),o&&(0,r.jsx)("div",{className:"text-red-500 mt-2",children:"Wait for admin permission on this account."})]})}}}]);