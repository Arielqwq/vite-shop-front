import{M as m,r as p,c as _,aG as g,aH as k,j as t,k as c,F as o,aI as n,l as y,U as h,d as i,C as v,V as x,N as w,aJ as q,aK as C,aL as B,a0 as V}from"./index.6fdc5749.js";const b={class:"text-center q-pa-xl",id:"front-ProductsView"},N={class:"flex q-ma-lg justify-center row col-5"},L={__name:"ProductsView",setup(P){const s=m([]),u=["\u5168\u90E8","\u8461\u8404\u9152","\u767D\u862D\u5730","\u6E05\u9152","\u71D2\u9152","\u9999\u6AB3\u6C23\u6CE1\u9152","\u5564\u9152","\u5976\u9152","\u5176\u4ED6"],r=p("\u5168\u90E8"),d=_(()=>r.value!=="\u5168\u90E8"?s.filter(a=>a.category===r.value):s);return(async()=>{var a,l;try{const{data:e}=await g.get("/products");s.push(...e.result)}catch(e){k.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>(t(),c("div",b,[(t(),c(o,null,n(u,(e,f)=>i(v,{class:"q-ml-lg q-mb-lg",key:f,label:e,onClick:j=>r.value=e,push:"",rounded:"",style:{background:"#630606",color:"white"}},null,8,["label","onClick"])),64)),y("div",N,[(t(!0),c(o,null,n(h(d),e=>(t(),x(V,{class:"flex justify-center q-pa-lg q-ma-md col-12 col-md-6 col-lg-3",key:e._id},{default:w(()=>[i(B,q(C(e)),null,16)]),_:2},1024))),128))])]))}};export{L as default};
