import{R as d,j as r,V as u,N as n,d as c,a2 as p,l as i,$ as _,a1 as f,a0 as m,M as y,aG as g,aH as v,k as l,F as x,aI as h,aJ as S,aK as k}from"./index.d65890ce.js";const b={class:"absolute-bottom text-subtitle2 text-center"},w={__name:"EventCard",props:{_id:{type:String,default:""},title:{type:String,default:""},price:{type:Number,default:0},daysfrom:{type:String,default:""},daysto:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(a){return(o,s)=>{const t=d("router-link");return r(),u(m,{class:"my-eventCard"},{default:n(()=>[c(p,{class:"rounded-borders",src:a.image,cover:""},{default:n(()=>[i("div",b,[c(t,{class:"text-h6 q-mt-sm q-mb-xs",to:"/event/"+a._id,style:{color:"white"}},{default:n(()=>[_(f(a.title),1)]),_:1},8,["to"])])]),_:1},8,["src"])]),_:1})}}},B={id:"front-events"},C={class:"flex justify-center row col-6"},V={__name:"EventsView",setup(a){const o=y([]);return(async()=>{var s,t;try{const{data:e}=await g.get("/events");o.push(...e.result)}catch(e){v.fire({icon:"error",title:"\u5931\u6557",text:((t=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(s,t)=>(r(),l("div",B,[i("div",C,[(r(!0),l(x,null,h(o,e=>(r(),l("div",{class:"flex justify-center q-pa-lg col-12 col-md-6",key:e._id},[c(w,S(k(e)),null,16)]))),128))])]))}};export{V as default};
