import{W as p,r as m,c as g,aW as y,ax as w,aX as x,aY as k,j as a,k as s,l as o,F as n,aZ as i,a4 as v,d as u,G as h,a_ as q,a$ as V}from"./index.5f65fe0b.js";const B={class:"text-center q-pa-sm",id:"front-ProductsView"},C={class:"filterBtninProductsView q-mt-lg row justify-center"},P={class:"flex q-ma-xs justify-center row"},$={__name:"ProductsView",setup(b){const r=p([]),d=["\u5168\u90E8","\u8461\u8404\u9152","\u767D\u862D\u5730","\u6E05\u9152","\u71D2\u9152","\u9999\u6AB3\u6C23\u6CE1\u9152","\u5564\u9152","\u5976\u9152","\u5176\u4ED6"],c=m("\u5168\u90E8"),f=g(()=>c.value!=="\u5168\u90E8"?r.filter(t=>t.category===c.value):r);return(async()=>{var t,l;try{const{data:e}=await y.get("/products");r.push(...e.result),await w(),x.init()}catch(e){k.fire({icon:"error",title:"\u5931\u6557",text:((l=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(t,l)=>(a(),s("div",B,[o("div",C,[(a(),s(n,null,i(d,(e,_)=>u(h,{class:"q-ml-lg q-mb-lg",key:_,label:e,onClick:j=>c.value=e,push:"",rounded:"",style:{background:"#630606",color:"white"}},null,8,["label","onClick"])),64))]),o("div",P,[(a(!0),s(n,null,i(v(f),e=>(a(),s("div",{class:"CardinProductsView flex justify-center q-py-xl col-12 col-md-6 col-lg-3",key:e._id},[u(V,q({class:"productCard"},e,{"data-aos":"flip-left"}),null,16)]))),128))])]))}};export{$ as default};
