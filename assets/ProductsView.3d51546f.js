import{O as m,r as _,c as g,aT as x,at as y,aU as h,aV as k,j as a,k as s,l as o,F as n,aW as i,$ as v,d as u,G as w,aX as q,aY as V}from"./index.5eb36ec9.js";const b={class:"text-center q-pa-sm",id:"front-ProductsView"},j={class:"q-mt-lg row justify-center"},B={class:"flex q-ma-xs justify-center row"},$={__name:"ProductsView",setup(C){const r=m([]),d=["\u5168\u90E8","\u8461\u8404\u9152","\u767D\u862D\u5730","\u6E05\u9152","\u71D2\u9152","\u9999\u6AB3\u6C23\u6CE1\u9152","\u5564\u9152","\u5976\u9152","\u5176\u4ED6"],l=_("\u5168\u90E8"),f=g(()=>l.value!=="\u5168\u90E8"?r.filter(t=>t.category===l.value):r);return(async()=>{var t,c;try{const{data:e}=await x.get("/products");r.push(...e.result),await y(),h.init()}catch(e){k.fire({icon:"error",title:"\u5931\u6557",text:((c=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:c.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(t,c)=>(a(),s("div",b,[o("div",j,[(a(),s(n,null,i(d,(e,p)=>u(w,{class:"q-ml-lg q-mb-lg",key:p,label:e,onClick:N=>l.value=e,push:"",rounded:"",style:{background:"#630606",color:"white"}},null,8,["label","onClick"])),64))]),o("div",B,[(a(!0),s(n,null,i(v(f),e=>(a(),s("div",{class:"productCard flex justify-center q-ma-lg q-pt-xl col-12 col-md-6 col-lg-3",key:e._id,style:{width:"300px",magin:"50px 30px"}},[u(V,q(e,{"data-aos":"flip-left"}),null,16)]))),128))])]))}};export{$ as default};
