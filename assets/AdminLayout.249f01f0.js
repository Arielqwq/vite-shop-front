import{W as g,a1 as x,r as l,a4 as y,j as i,k as n,d as a,Y as e,a9 as w,F as Q,aZ as k,aa as C,ab as L,ac as c,Q as q,a6 as A,ae as d,l as s,a7 as u,aj as S}from"./index.db3199dd.js";import{Q as j,a as B,b as D}from"./QDrawer.7d91d4cf.js";import{Q as N}from"./QPage.204371eb.js";import{Q as V,a as z,_ as F}from"./logo_name.695f63ca.js";import"./QResizeObserver.40bf5994.js";import"./format.2a3572e1.js";const P={id:"admin-layout"},R={class:"top absolute-top",color:"white",style:{height:"220px",background:"#630606"}},T={class:"q-pa-md text-center absolute-center bg-transparent",style:{width:"100%"}},E=s("div",{class:"q-my-md"},[s("img",{src:F,style:{width:"150px",filter:"brightness(100)"}})],-1),H=["src"],O={class:"q-my-md flex row justify-center",style:{color:"#fff"}},U=s("div",{class:"text-h6"},"Hi ! \u7BA1\u7406\u54E1 \xA0",-1),W={class:"text-h6"},ea={__name:"AdminLayout",setup(Y){const o=g(),{avatar:f,account:p,email:Z}=x(o);l(!1),l(!0);const{logout:_}=o,m=r=>{r.label==="\u767B\u51FA"&&_()},b=[{icon:"fa-solid fa-bag-shopping",label:"\u5546\u54C1\u7BA1\u7406",route:"/admin",separator:!0},{icon:"fa-solid fa-martini-glass-citrus",label:"\u6D3B\u52D5\u7BA1\u7406",route:"/admin/events",separator:!0},{icon:"fa-solid fa-newspaper",label:"\u65B0\u805E\u7BA1\u7406",route:"/admin/news",separator:!1},{icon:"fa-solid fa-clipboard-list",label:"\u8A02\u55AE\u7BA1\u7406",route:"/admin/orders",separator:!1},{icon:"fa-solid fa-user-group",label:"\u6703\u54E1\u7BA1\u7406",route:"/admin/customers",separator:!0},{icon:"fa-solid fa-comments",label:"\u8A0A\u606F\u7BA1\u7406",route:"/admin/feedbacks",separator:!1},{icon:"fa-solid fa-house",iconColor:"primary",label:"\u56DE\u9996\u9801",route:"/",separator:!1},{icon:"fa-solid fa-person-running",iconColor:"primary",label:"\u767B\u51FA",route:"",separator:!1}];return(r,$)=>{const h=y("router-view");return i(),n("div",P,[a(V,{class:"shadow-2 rounded-borders"},{default:e(()=>[a(j,{class:"bg-accent","show-if-above":"",width:300,breakpoint:500,bordered:"",style:{position:"fixed"}},{default:e(()=>[a(B,{style:{height:"calc(100vh - 220px)","margin-top":"220px"}},{default:e(()=>[a(w,{class:"menu-list"},{default:e(()=>[(i(),n(Q,null,k(b,(t,v)=>C(a(L,{key:v,class:"col-10 q-px-xl",clickable:"",active:t.label==="Outbox",to:t.route},{default:e(()=>[a(c,{class:"col-3 q-ma-sm"},{default:e(()=>[a(q,{name:t.icon,size:"sm",color:t.iconColor},null,8,["name","color"])]),_:2},1024),a(c,{class:"text-h6",onClick:G=>m(t)},{default:e(()=>[A(d(t.label),1)]),_:2},1032,["onClick"])]),_:2},1032,["active","to"]),[[S]])),64))]),_:1})]),_:1}),s("div",R,[s("div",T,[E,a(D,{size:"80px"},{default:e(()=>[s("img",{src:u(f)},null,8,H)]),_:1}),s("div",O,[U,s("div",W,d(u(p)),1)])])])]),_:1}),a(z,null,{default:e(()=>[a(N,null,{default:e(()=>[a(h)]),_:1})]),_:1})]),_:1})])}}};export{ea as default};
