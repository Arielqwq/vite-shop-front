import{a as p,b as f,Q as _}from"./QDrawer.29d2fce9.js";import{V as g,a0 as m,r as h,a1 as b,j as o,a5 as y,X as e,d as s,l as a,a4 as r,ab as l,k as v,aZ as w,G as x,a3 as Q,F as q}from"./index.fc2426c0.js";import{Q as M}from"./QPage.e057f198.js";import{Q as k,a as B}from"./QLayout.a163cfa2.js";import{_ as C}from"./logo_name.472faa21.js";import"./QResizeObserver.9de9e2cf.js";import"./format.2a3572e1.js";const L={class:"q-ma-none q-pa-none"},V={class:"background bg-primary",align:"center"},F=a("div",{class:"q-my-md"},[a("img",{src:C,style:{width:"150px",filter:"brightness(100)"}})],-1),N={class:"bg-transparent"},S=["src"],z=a("div",{class:"div text-weight-bold"},null,-1),A={class:"div text-white q-mb-sm"},D={class:"col-12 flex column q-ma-auto q-ml-xl"},P={class:"mypageIcon q-pa-md text-center row",align:"center"},Z={__name:"MypageLayout",setup(T){const i=g(),{avatar:n,account:c}=m(i);h(!0);const d=[{icon:"fa-regular fa-address-card",label:"\u6703\u54E1\u8CC7\u6599",route:"/Mypage",separator:!0},{icon:"fa-solid fa-cart-shopping",label:"\u8CFC\u7269\u6E05\u55AE",route:"/Mypage/Mypagecart",separator:!0},{icon:"fa-regular fa-heart",label:"\u6211\u7684\u6536\u85CF",route:"/Mypage/Wishlist",separator:!0},{icon:"fa-solid fa-receipt",label:"\u6211\u7684\u8A02\u55AE",route:"/Mypage/MypageOrders",separator:!1},{icon:"fa-regular fa-envelope",label:"\u6211\u7684\u8A0A\u606F",route:"/Mypage/Feedbacks",separator:!1},{icon:"fa-solid fa-house",iconColor:"primary",label:"\u56DE\u9996\u9801",route:"/",separator:!1},{icon:"fa-solid fa-person-running",iconColor:"primary",label:"\u767B\u51FA",route:"logout",separator:!1}];return(j,E)=>{const u=b("router-view");return o(),y(k,{class:"shadow-2 rounded-borders"},{default:e(()=>[s(_,{class:"bg-accent","show-if-above":"",width:300},{default:e(()=>[s(p,{class:"fit"},{default:e(()=>[a("ul",L,[a("div",V,[F,a("div",N,[s(f,{class:"q-mb-lg",size:"80px"},{default:e(()=>[a("img",{src:r(n),style:{height:"100%"}},null,8,S)]),_:1}),z,a("div",A,"Hi ! "+l(r(c)),1)])]),a("div",D,[(o(),v(q,null,w(d,t=>a("li",P,[s(x,{class:"mypageIconBtn q-pa-md",align:"left",size:"lg",icon:t.icon,to:t.route,flat:"",rounded:"",color:"#182747"},{default:e(()=>[Q(l(t.label),1)]),_:2},1032,["icon","to"])])),64))])])]),_:1})]),_:1}),s(B,null,{default:e(()=>[s(M,null,{default:e(()=>[s(u)]),_:1})]),_:1})]),_:1})}}};export{Z as default};
