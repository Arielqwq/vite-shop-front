import{X as _,j as i,k as r,d as t,P as l,a7 as u,a_ as d,l as c,a5 as p,a3 as m,a4 as g,O as h,aS as f,aT as x,F as y,aU as v,aV as w,aW as q}from"./index.c4f1aba5.js";const S={class:"q-ma-md",style:{width:"85%"}},k={class:"q-ma-lg text-h5 text-star text-weight-bold textUnderline-none"},C={__name:"NewsCard",props:{_id:{type:String,default:""},title:{type:String,default:""},image:{type:String,default:""},description:{type:String,default:""}},setup(s){return(o,n)=>{const a=_("router-link");return i(),r("div",S,[t(g,{class:"my-card"},{default:l(()=>[t(u,{src:s.image,cover:"",style:{height:"300px"}},null,8,["src"]),t(d,{class:"q-pa-none q-mt-lg"},{default:l(()=>[c("div",k,p(s.title),1)]),_:1}),t(d,{class:"q-pa-none q-mt-lg",style:{height:"40px"},align:"right"},{default:l(()=>[t(a,{class:"text-h8 q-pa-md",to:"/newsPage/"+s._id},{default:l(()=>[m("(...\u7E7C\u7E8C\u95B1\u8B80)")]),_:1},8,["to"])]),_:1})]),_:1})])}}},N={class:"q-ma-md",id:"front-news"},V={class:"flex justify-center row"},P=c("div",{class:"col-4"},null,-1),j={class:"col-8"},Q={__name:"NewsView",setup(s){const o=h([]);return(async()=>{var n,a;try{const{data:e}=await f.get("/news");o.push(...e.result)}catch(e){x.fire({icon:"error",title:"\u5931\u6557",text:((a=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(n,a)=>(i(),r("div",N,[c("div",V,[P,c("div",j,[(i(!0),r(y,null,v(o,e=>(i(),r("div",{class:"flex justify-center q-pa-lg col-12",key:e._id},[t(C,w(q(e)),null,16)]))),128))])])]))}};export{Q as default};
