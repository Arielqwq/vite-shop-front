import{a as g,b as m,Q as h}from"./QDrawer.3da85e68.js";import{W as y,a1 as b,r as v,a4 as w,j as l,a8 as x,Y as e,d as o,l as a,a7 as c,ae as i,k as Q,aZ as k,G as C,a6 as q,F as M}from"./index.0ea2ded6.js";import{Q as B}from"./QPage.15d38276.js";import{Q as L,a as F,_ as N}from"./logo_name.899134dc.js";import"./QResizeObserver.06268f91.js";import"./format.2a3572e1.js";const S={class:"q-ma-none q-pa-none"},V={class:"background bg-primary",align:"center"},z=a("div",{class:"q-my-md"},[a("img",{src:N,style:{width:"150px",filter:"brightness(100)"}})],-1),A={class:"bg-transparent"},D=["src"],P=a("div",{class:"div text-weight-bold"},null,-1),T={class:"div text-white q-my-md"},W={class:"col-12 flex column q-ma-auto q-ml-xl"},j={class:"mypageIcon q-pa-md text-center row",align:"center"},J={__name:"MypageLayout",setup(E){const t=y(),{avatar:n,account:d}=b(t);v(!0);const{logout:u}=t,p=r=>{r.label==="\u767B\u51FA"&&u()},f=[{icon:"fa-regular fa-address-card",label:"\u6703\u54E1\u8CC7\u6599",route:"/Mypage",separator:!0},{icon:"fa-solid fa-cart-shopping",label:"\u8CFC\u7269\u6E05\u55AE",route:"/Mypage/Mypagecart",separator:!0},{icon:"fa-regular fa-heart",label:"\u6211\u7684\u6536\u85CF",route:"/Mypage/Wishlist",separator:!0},{icon:"fa-solid fa-receipt",label:"\u6211\u7684\u8A02\u55AE",route:"/Mypage/MypageOrders",separator:!1},{icon:"fa-regular fa-envelope",label:"\u6211\u7684\u8A0A\u606F",route:"/Mypage/Feedbacks",separator:!1},{icon:"fa-solid fa-house",iconColor:"primary",label:"\u56DE\u9996\u9801",route:"/",separator:!1},{icon:"fa-solid fa-person-running",iconColor:"primary",label:"\u767B\u51FA",route:"",separator:!1}];return(r,G)=>{const _=w("router-view");return l(),x(L,{class:"shadow-2 rounded-borders"},{default:e(()=>[o(h,{class:"bg-accent","show-if-above":"",width:300},{default:e(()=>[o(g,{class:"fit"},{default:e(()=>[a("ul",S,[a("div",V,[z,a("div",A,[o(m,{size:"80px"},{default:e(()=>[a("img",{src:c(n),style:{height:"100%"}},null,8,D)]),_:1}),P,a("div",T,"Hi ! "+i(c(d)),1)])]),a("div",W,[(l(),Q(M,null,k(f,s=>a("li",j,[o(C,{class:"mypageIconBtn q-pa-md",onClick:H=>p(s),align:"left",size:"lg",icon:s.icon,to:s.route,flat:"",rounded:"",color:s.iconColor},{default:e(()=>[q(i(s.label),1)]),_:2},1032,["onClick","icon","to","color"])])),64))])])]),_:1})]),_:1}),o(F,null,{default:e(()=>[o(B,null,{default:e(()=>[o(_)]),_:1})]),_:1})]),_:1})}}};export{J as default};
