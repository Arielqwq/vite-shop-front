import{a1 as _,j as i,k as r,l as c,d as a,ad as p,X as o,ab as u,b2 as d,a3 as g,W as m,aW as h,aY as x,F as y,aZ as f,b4 as w,b5 as v}from"./index.9082f2b4.js";const q={class:"q-ma-md",style:{width:"85%"}},N={class:"my-card"},S={class:"q-ma-lg text-h5 text-star text-weight-bold textUnderline-none"},b={__name:"NewsCard",props:{_id:{type:String,default:""},title:{type:String,default:""},image:{type:String,default:""},description:{type:String,default:""}},setup(s){return(l,n)=>{const t=_("router-link");return i(),r("div",q,[c("div",N,[a(p,{src:s.image,cover:"",style:{height:"300px"}},null,8,["src"]),a(d,{class:"q-pa-none q-mt-lg",style:{height:"40px"},align:"right"},{default:o(()=>[c("div",S,u(s.title),1)]),_:1}),a(d,{class:"q-pa-none q-mt-lg",style:{height:"50px magin-top:10px"},align:"right"},{default:o(()=>[a(t,{class:"text-h8 q-pa-md",to:"/newsPage/"+s._id},{default:o(()=>[g("(...\u7E7C\u7E8C\u95B1\u8B80)")]),_:1},8,["to"])]),_:1})])])}}},k={id:"front-news"},C={class:"flex justify-center row"},j={__name:"NewsView",setup(s){const l=m([]);return(async()=>{var n,t;try{const{data:e}=await h.get("/news");l.push(...e.result)}catch(e){x.fire({icon:"error",title:"\u5931\u6557",text:((t=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(n,t)=>(i(),r("div",k,[c("div",C,[(i(!0),r(y,null,f(l,e=>(i(),r("div",{class:"cardinNewsView flex justify-center col-4",style:{"margin-bottom":"60px"},key:e._id},[a(b,w(v(e)),null,16)]))),128))])]))}};export{j as default};
