(()=>{var e={};e.id=442,e.ids=[442],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},38013:e=>{"use strict";e.exports=require("mongodb")},11185:e=>{"use strict";e.exports=require("mongoose")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},86624:e=>{"use strict";e.exports=require("querystring")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},66202:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>x,routeModule:()=>v,serverHooks:()=>O,workAsyncStorage:()=>h,workUnitAsyncStorage:()=>S});var s={};t.r(s),t.d(s,{GET:()=>g,PUT:()=>y,dynamic:()=>m,revalidate:()=>f});var i=t(88797),n=t(10042),a=t(58492),o=t(37467),u=t(82457),c=t(68716),l=t(11185),p=t.n(l),d=t(38370);let m="force-static",f=60;async function w(){0===p().connection.readyState&&await p().connect(process.env.MONGO_URL)}async function y(e){await w();try{let{_id:r,name:t,image:s,...i}=await e.json();["isActive","admin"].forEach(e=>{"string"==typeof i[e]&&(i[e]="true"===i[e].trim())});let n={};if(r)n={_id:r};else{let e=await (0,d.getServerSession)(o.L),r=e?.user?.email;if(!r)return new Response(JSON.stringify({error:"Unauthorized"}),{status:401});n={email:r}}let a=await u.n.findOneAndUpdate(n,{$set:{name:t,image:s}},{new:!0});if(!a)return new Response(JSON.stringify({error:"User not found"}),{status:404});let l=await c.a.findOneAndUpdate({email:a.email},i,{upsert:!0,new:!0});return new Response(JSON.stringify({success:!0,user:{...a.toObject(),...l.toObject()}}),{status:200})}catch(e){return console.error("Error in PUT request:",e),new Response(JSON.stringify({error:"Internal Server Error",details:e.message}),{status:500})}}async function g(e){await w();let r=new URL(e.url).searchParams.get("_id"),t={};if(r)t={_id:r};else{let e=await (0,d.getServerSession)(o.L),r=e?.user?.email;if(!r)return new Response(JSON.stringify({error:"Unauthorized"}),{status:401});t={email:r}}try{let e=await u.n.findOne(t).lean();if(!e)return new Response(JSON.stringify({error:"User  not found"}),{status:404});let r=await c.a.findOne({email:e.email}).lean();return new Response(JSON.stringify({...e,...r}),{status:200})}catch(e){return console.error("Error fetching user:",e),new Response(JSON.stringify({error:"Internal Server Error"}),{status:500})}}let v=new i.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/profile/route",pathname:"/api/profile",filename:"route",bundlePath:"app/api/profile/route"},resolvedPagePath:"C:\\xampp\\htdocs\\codebrew2o\\codebrew2\\src\\app\\api\\profile\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:h,workUnitAsyncStorage:S,serverHooks:O}=v;function x(){return(0,a.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:S})}},78031:()=>{},35303:()=>{},37467:(e,r,t)=>{"use strict";let s;t.d(r,{L:()=>d});var i=t(82045),n=t(71250),a=t(97990),o=t(38013);if(!process.env.MONGO_URL)throw Error('Invalid/Missing environment variable: "MONGO_URL"');let u=process.env.MONGO_URL;s=new o.MongoClient(u,{maxPoolSize:10,serverSelectionTimeoutMS:5e3}).connect().catch(e=>{throw console.error("Failed to connect to MongoDB:",e),e});var c=t(73765),l=t(44753),p=t(68716);let d={secret:process.env.SECRET,adapter:(0,a.dJ)(s),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"Credentials",credentials:{email:{label:"Email",type:"email",placeholder:"test@example.com"},password:{label:"Password",type:"password"}},async authorize(e){if(!e?.email||!e?.password)throw Error("Email and password are required");if("string"!=typeof e.password||""===e.password.trim())throw Error("Password is required and cannot be empty");if("tealerin.com"!==e.email.split("@")[1])throw Error("Only users with the domain are allowed to log in");await (0,c.u)();let r=await (0,l.CX)(e.email);if(!r)throw Error("No user found with that email");if(!await (0,l.Gv)(e.password,r.password))throw Error("Invalid password");let t=await p.a.findOne({email:e.email});if(!t||!t.isVerified)throw Error("Your account is not verified by the admin");return{email:r.email,name:r.name}}})],pages:{signIn:"/login"},session:{strategy:"jwt"},callbacks:{jwt:async({token:e,user:r})=>(r&&(e.email=r.email,e.name=r.name),e),session:async({session:e,token:r})=>(e.email=r.email,e.name=r.name,e)}}},73765:(e,r,t)=>{"use strict";t.d(r,{u:()=>n});var s=t(11185),i=t.n(s);async function n(){i().connections[0].readyState||await i().connect(process.env.MONGO_URL)}t(83775).config()},44753:(e,r,t)=>{"use strict";t.d(r,{CX:()=>c,GJ:()=>p,Gv:()=>l});var s=t(67096),i=t.n(s),n=t(82457),a=t(68716),o=t(38370),u=t(37467);async function c(e){return await n.n.findOne({email:e})}let l=async(e,r)=>i().compare(e,r);async function p(){let e=await (0,o.getServerSession)(u.L),r=e?.user?.email;if(!r)return!1;let t=await a.a.findOne({email:r});return!!t&&t.admin}},82457:(e,r,t)=>{"use strict";t.d(r,{n:()=>n});var s=t(11185);let i=new s.Schema({name:{type:String},email:{type:String,required:!0,unique:!0},password:{type:String},admin:{type:Boolean,default:!1},isVerified:{type:Boolean,default:!1}},{timestamps:!0}),n=s.models?.User||(0,s.model)("User",i)},68716:(e,r,t)=>{"use strict";t.d(r,{a:()=>n});var s=t(11185);let i=new s.Schema({email:{type:String,required:!0,unique:!0},image:{type:String},admin:{type:Boolean,default:!1},isVerified:{type:Boolean,default:!1},phone:{type:String},streetAddress:{type:String}},{timestamps:!0}),n=s.models.UserInfo||(0,s.model)("UserInfo",i)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[492,616],()=>t(66202));module.exports=s})();