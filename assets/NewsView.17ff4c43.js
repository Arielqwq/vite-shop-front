import{a2 as _,j as r,k as l,d as s,Y as c,l as a,ae as g,b2 as d,ac as p,X as u,aW as m,aY as h,F as x,aZ as w,a_ as y}from"./index.32b3beb4.js";const f={class:"q-ma-md",id:"newsCard",style:{width:"85%"}},v={class:"my-card q-pa-lg"},C={class:"ImginNewsCard"},q={class:"q-ma-lg text-h5 text-star text-weight-bold textUnderline-none"},N=a("div",{class:"text-h4"},"LEARN MORE",-1),S={__name:"NewsCard",props:{_id:{type:String,default:""},title:{type:String,default:""},image:{type:String,default:""},description:{type:String,default:""}},setup(n){return(o,i)=>{const t=_("router-link");return r(),l("div",f,[s(t,{class:"text-h8 q-pa-md textUnderline-none",to:"/newsPage/"+n._id},{default:c(()=>[a("div",v,[a("div",C,[s(g,{src:n.image,cover:"",style:{height:"300px"}},null,8,["src"])]),s(d,{class:"q-pa-none q-mt-lg",style:{height:"40px"},align:"right"},{default:c(()=>[a("div",q,p(n.title),1)]),_:1}),s(d,{class:"newCardContent q-pa-none q-mt-lg",style:{height:"50px magin-top:10px"},align:"right"},{default:c(()=>[N]),_:1})])]),_:1},8,["to"])])}}},k={id:"front-news"},V={class:"flex justify-center row"},j={__name:"NewsView",setup(n){const o=u([]);return(async()=>{var i,t;try{const{data:e}=await m.get("/news");o.push(...e.result)}catch(e){h.fire({icon:"error",title:"\u5931\u6557",text:((t=(i=e==null?void 0:e.response)==null?void 0:i.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(i,t)=>(r(),l("div",k,[a("div",V,[(r(!0),l(x,null,w(o,e=>(r(),l("div",{class:"cardinNewsView flex justify-center col-4",style:{"margin-bottom":"60px"},key:e._id},[s(S,y({class:"newscard"},e),null,16)]))),128))])]))}};export{j as default};
