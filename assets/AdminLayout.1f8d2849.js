import{L as h,P as g,r,R as x,j as i,V as Q,N as a,d as e,C as w,$ as n,W as y,k,aI as C,X as L,Y as V,Z as d,Q as q,a1 as u,F as B,l as t,U as c,a3 as T}from"./index.d65890ce.js";import{Q as A,a as N,b as S,c as D}from"./QDrawer.7a38df48.js";import{Q as P,b as R,a as U,c as z}from"./QLayout.9847f8fe.js";import{Q as F}from"./QPage.764894c7.js";import"./QResizeObserver.7e277227.js";import"./format.2a3572e1.js";import"./use-prevent-scroll.2c9c4867.js";const H={class:"top absolute-top",color:"white",style:{height:"150px",background:"brown"}},$={class:"q-pa-md absolute-bottom bg-transparent"},j=["src"],E=t("div",{class:"text-weight-bold"},null,-1),O={class:"text-h5"},ee={__name:"AdminLayout",setup(W){const p=h(),{avatar:m,account:f}=g(p),s=r(!1);r(!0);const _=[{icon:"fa-solid fa-bag-shopping",label:"\u5546\u54C1\u7BA1\u7406",route:"/admin",separator:!0},{icon:"fa-solid fa-martini-glass-citrus",label:"\u6D3B\u52D5\u7BA1\u7406",route:"/admin/events",separator:!0},{icon:"send",label:"\u8CBC\u6587\u7BA1\u7406",route:"/admin/news",separator:!1},{icon:"delete",label:"\u8A02\u55AE\u7BA1\u7406",route:"/admin/orders",separator:!1},{icon:"fa-solid fa-user-group",label:"\u6703\u54E1\u7BA1\u7406",route:"/admin/customers",separator:!0},{icon:"fa-solid fa-comments",label:"\u56DE\u61C9\u7BA1\u7406",route:"/admin/feedbacks",separator:!1},{icon:"error",label:"\u95DC\u65BC\u6211\u5011\u7BA1\u7406",route:"/admin/aboutus",separator:!1},{icon:"fa-solid fa-house",iconColor:"primary",label:"\u56DE\u9996\u9801",route:"/",separator:!1}];return(X,l)=>{const b=x("router-view");return i(),Q(P,{class:"shadow-2 rounded-borders"},{default:a(()=>[e(U,{elevated:"",style:{"background-color":"#230b0b"}},{default:a(()=>[e(R,{style:{height:"100px"}},{default:a(()=>[e(w,{flat:"",onClick:l[0]||(l[0]=o=>s.value=!s.value),round:"",dense:"",icon:"menu"}),e(A,{class:"text-h5"},{default:a(()=>[n("\u7BA1\u7406\u8005\u5F8C\u53F0")]),_:1})]),_:1})]),_:1}),e(D,{"show-if-above":"",modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=o=>s.value=o),width:250,breakpoint:500,bordered:""},{default:a(()=>[e(N,{fit:"",style:{height:"calc(100% - 150px)","margin-top":"150px","border-top":"1px solid #999"}},{default:a(()=>[e(y,{class:"q-pl-sm menu-list"},{default:a(()=>[(i(),k(B,null,C(_,(o,v)=>L(e(V,{key:v,class:"col-10 q-px-xl",clickable:"",active:o.label==="Outbox",to:o.route},{default:a(()=>[e(d,{class:"col-3 q-ma-sm"},{default:a(()=>[e(q,{name:o.icon,size:"sm",color:o.iconColor},null,8,["name","color"])]),_:2},1024),e(d,{class:"text-h6"},{default:a(()=>[n(u(o.label),1)]),_:2},1024)]),_:2},1032,["active","to"]),[[T]])),64))]),_:1})]),_:1}),t("div",H,[t("div",$,[e(S,{class:"q-mb-sm",size:"56px"},{default:a(()=>[t("img",{src:c(m)},null,8,j)]),_:1}),E,t("div",null,[t("div",O,"Hi ! "+u(c(f)),1)])])])]),_:1},8,["modelValue"]),e(z,null,{default:a(()=>[e(F,null,{default:a(()=>[e(b)]),_:1})]),_:1})]),_:1})}}};export{ee as default};