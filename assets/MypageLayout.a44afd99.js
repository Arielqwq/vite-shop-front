import{a as p,b as f,Q as _}from"./QDrawer.d2b70b7b.js";import{V as g,a0 as m,r as h,a1 as b,j as o,a5 as y,X as e,d as t,l as a,a4 as r,ab as l,k as v,aZ as w,G as Q,a3 as x,F as M}from"./index.8c595520.js";import{Q as k}from"./QPage.a3976b7d.js";import{Q as q,a as B}from"./QLayout.1ae216df.js";import"./QResizeObserver.6296092b.js";import"./format.2a3572e1.js";const C={class:"q-ma-none q-pa-none"},L={class:"background",align:"center"},V={class:"bg-transparent"},F=["src"],N=a("div",{class:"div text-weight-bold"},null,-1),S={class:"div"},z={class:"col-12 flex column q-ma-auto q-ml-xl"},A={class:"mypageIcon q-pa-md text-center row",align:"center"},U={__name:"MypageLayout",setup(D){const n=g(),{avatar:c,account:i}=m(n);h(!0);const d=[{icon:"fa-regular fa-address-card",label:"\u6703\u54E1\u8CC7\u6599",route:"/Mypage",separator:!0},{icon:"fa-solid fa-cart-shopping",label:"\u6211\u7684\u8CFC\u7269\u8ECA",route:"/Mypage/Mypagecart",separator:!0},{icon:"fa-regular fa-heart",label:"\u6211\u7684\u6536\u85CF",route:"/Mypage/Wishlist",separator:!0},{icon:"fa-solid fa-receipt",label:"\u6211\u7684\u8A02\u55AE",route:"/Mypage/MypageOrders",separator:!1},{icon:"fa-regular fa-envelope",label:"\u6211\u7684\u56DE\u61C9",route:"/Mypage/Feedbacks",separator:!1},{icon:"fa-solid fa-house",iconColor:"primary",label:"\u56DE\u9996\u9801",route:"/",separator:!1}];return(P,T)=>{const u=b("router-view");return o(),y(q,{class:"shadow-2 rounded-borders"},{default:e(()=>[t(_,{style:{background:"#630606"},"show-if-above":"",width:300},{default:e(()=>[t(p,{class:"fit"},{default:e(()=>[a("ul",C,[a("div",L,[a("div",V,[t(f,{class:"q-mb-lg",size:"80px"},{default:e(()=>[a("img",{src:r(c),style:{height:"100%"}},null,8,F)]),_:1}),N,a("div",S,"Hi ! "+l(r(i)),1)])]),a("div",z,[(o(),v(M,null,w(d,s=>a("li",A,[t(Q,{class:"mypageIconBtn q-pa-md",align:"left",size:"lg",icon:s.icon,to:s.route,flat:"",rounded:"",color:"white"},{default:e(()=>[x(l(s.label),1)]),_:2},1032,["icon","to"])])),64))])])]),_:1})]),_:1}),t(B,null,{default:e(()=>[t(k,null,{default:e(()=>[t(u)]),_:1})]),_:1})]),_:1})}}};export{U as default};
