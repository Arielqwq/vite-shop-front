import{a4 as _,j as o,k as r,d as a,Y as c,l as s,ag as g,b2 as d,ae as u,X as p,aX as m,a2 as h,a3 as x,aY as w,F as y,aZ as f,a_ as v}from"./index.7fa1104e.js";const C={class:"q-ma-md",id:"newsCard",style:{width:"85%"}},q={class:"my-card q-pa-lg"},N={class:"ImginNewsCard"},S={class:"q-ma-lg text-h5 text-star text-weight-bold textUnderline-none"},k=s("div",{class:"text-h4"},"LEARN MORE",-1),V={__name:"NewsCard",props:{_id:{type:String,default:""},title:{type:String,default:""},image:{type:String,default:""},description:{type:String,default:""}},setup(n){return(l,i)=>{const e=_("router-link");return o(),r("div",C,[a(e,{class:"text-h8 q-pa-md textUnderline-none",to:"/newsPage/"+n._id},{default:c(()=>[s("div",q,[s("div",N,[a(g,{src:n.image,cover:"",style:{height:"300px"}},null,8,["src"])]),a(d,{class:"q-pa-none q-mt-lg",style:{height:"40px"},align:"right"},{default:c(()=>[s("div",S,u(n.title),1)]),_:1}),a(d,{class:"newCardContent q-pa-none q-mt-lg",style:{height:"50px magin-top:10px"},align:"right"},{default:c(()=>[k]),_:1})])]),_:1},8,["to"])])}}},b={id:"front-news"},j={class:"flex justify-center row"},E={__name:"NewsView",setup(n){const l=p([]);return(async()=>{var i,e;try{const{data:t}=await m.get("/news");l.push(...t.result),await h(),x.init()}catch(t){w.fire({icon:"error",title:"\u5931\u6557",text:((e=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:e.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(i,e)=>(o(),r("div",b,[s("div",j,[(o(!0),r(y,null,f(l,t=>(o(),r("div",{class:"cardinNewsView flex justify-center col-4",style:{"margin-bottom":"60px"},key:t._id},[a(V,v({class:"newscard"},t,{"data-aos":"zoom-out-up","data-aos-duration":"1500"}),null,16)]))),128))])]))}};export{E as default};
