import{a4 as _,j as o,k as r,d as a,Y as d,l as s,ag as g,b2 as c,ae as p,X as u,aX as m,a2 as h,a3 as w,aY as y,F as x,aZ as v,a_ as f}from"./index.fabf8bca.js";const C={id:"newsCard",style:{width:"85%"}},N={class:"my-card q-pa-lg"},q={class:"ImginNewsCard",style:{position:"relative"}},S={class:"q-ma-lg text-h5 text-star text-weight-bold textUnderline-none"},k=s("span",{class:"learnMoreInNewscard"},"LEARN MORE",-1),V={__name:"NewsCard",props:{_id:{type:String,default:""},title:{type:String,default:""},image:{type:String,default:""},description:{type:String,default:""}},setup(n){return(l,i)=>{const t=_("router-link");return o(),r("div",C,[a(t,{class:"text-h8 q-pa-md textUnderline-none",to:"/newsPage/"+n._id},{default:d(()=>[s("div",N,[s("div",q,[a(g,{src:n.image,cover:"",style:{height:"300px"}},null,8,["src"])]),a(c,{class:"q-pa-none q-mt-lg",style:{height:"40px"},align:"right"},{default:d(()=>[s("div",S,p(n.title),1)]),_:1}),a(c,{class:"newCardContent q-pa-none q-mt-lg",style:{height:"50px magin-top:10px"},align:"right"},{default:d(()=>[k]),_:1})])]),_:1},8,["to"])])}}},b={id:"front-news",align:"center"},B={class:"row",style:{"overflow-y":"hidden"}},I={__name:"NewsView",setup(n){const l=u([]);return(async()=>{var i,t;try{const{data:e}=await m.get("/news");l.push(...e.result),await h(),w.init()}catch(e){y.fire({icon:"error",title:"\u5931\u6557",text:((t=(i=e==null?void 0:e.response)==null?void 0:i.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(i,t)=>(o(),r("div",b,[s("div",B,[(o(!0),r(x,null,v(l,e=>(o(),r("div",{class:"cardinNewsView q-pa-lg col-sm-12 col-lg-6",style:{"margin-bottom":"30px"},key:e._id},[a(V,f({class:"newscard"},e,{"data-aos":"zoom-out-up","data-aos-duration":"1500"}),null,16)]))),128))])]))}};export{I as default};
