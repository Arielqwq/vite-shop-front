import{u as h,a as Q,b as x,Q as T}from"./QTabs.5eddb75b.js";import{v as _,bG as V,h as D,A as k,bH as O,aA as C,bI as E,aE as S,bJ as A,c as B,bi as L,g as j,W as v,r as F,b1 as g,aY as I,j as p,k as b,l as d,d as a,X as r,aa as N,F as U,aZ as $,ab as G}from"./index.cf7eb213.js";import{Q as H}from"./QCheckbox.8d72a1c9.js";import{Q as y,a as q}from"./QTable.c64091b3.js";import"./QResizeObserver.32f4e600.js";import"./QMenu.b1e832af.js";import"./QChip.51283b8f.js";import"./QItemLabel.95b3dac7.js";import"./format.2a3572e1.js";var w=_({name:"QTab",props:h,emits:Q,setup(o,{slots:s,emit:i}){const{renderTab:l}=x(o,s,i);return()=>l("div")}}),P=_({name:"QTabPanel",props:V,setup(o,{slots:s}){return()=>D("div",{class:"q-tab-panel",role:"tabpanel"},k(s.default))}}),J=_({name:"QTabPanels",props:{...O,...C},emits:E,setup(o,{slots:s}){const i=j(),l=S(o,i.proxy.$q),{updatePanelsList:c,getPanelContent:m,panelDirectives:e}=A(),n=B(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(c(s),L("div",{class:n.value},m(),"pan",o.swipeable,()=>e.value))}});const W={id:"orders"},X={class:"row"},Y={class:"q-pa-xl col-12"},Z={class:"col-12"},z=["src"],ne={__name:"OrdersView",setup(o){const s=v([]),i=v([]),l=F("productsOrder"),c=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:e=>e._id,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"center",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u8A02\u55AE\u91D1\u984D",align:"center",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u8A02\u55AE\u5167\u5BB9",align:"center"}],m=[{name:"title",required:!0,label:"\u540D\u7A31",align:"center",field:e=>e.title},{name:"price",required:!0,label:"\u8CBB\u7528",align:"center",field:e=>e.price,format:e=>`${e}`,sortable:!0},{name:"daysfrom",required:!0,label:"\u958B\u59CB\u65E5\u671F",align:"center",field:e=>e.daysfrom},{name:"daysto",required:!0,label:"\u7D50\u675F\u65E5\u671F",align:"center",field:e=>e.daysto},{name:"description",required:!0,label:"\u7C21\u4ECB",align:"center",field:e=>e.description},{name:"lecturer",required:!0,label:"\u8B1B\u8005",align:"center",field:e=>e.lecturer},{name:"image",required:!0,label:"\u5716\u7247",align:"center",field:e=>e.image}];return(async()=>{try{const{data:e}=await g.get("/orders");s.push(...e.result.map(t=>(t.totalPrice=t.products.reduce((u,f)=>u+f.p_id.price*f.quantity,0),t)));const{data:n}=await g.get("/events/me");i.push(...n.result)}catch(e){console.log(e),I.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,n)=>(p(),b("div",W,[d("div",X,[d("div",Y,[a(N,null,{default:r(()=>[a(T,{class:"tabs-text text-grey",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:r(()=>[a(w,{class:"text-h3",name:"productsOrder",label:"\u6211\u7684\u5546\u54C1\u8A02\u55AE"}),a(w,{name:"eventsOrder",label:"\u6211\u7684\u8AB2\u7A0B\u6D3B\u52D5\u8CC7\u8A0A "})]),_:1},8,["modelValue"]),a(H),a(J,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=t=>l.value=t),animated:""},{default:r(()=>[a(P,{name:"productsOrder"},{default:r(()=>[d("div",Z,[a(y,{columns:c,rows:s,style:{"overflow-x":"scroll"}},{"body-cell-content":r(t=>[a(q,{class:"text-center"},{default:r(()=>[(p(!0),b(U,null,$(t.row.products,u=>(p(),b("p",null,G(u.quantity+" \u500B "+u.p_id.name),1))),256))]),_:2},1024)]),_:1},8,["rows"])])]),_:1}),a(P,{name:"eventsOrder"},{default:r(()=>[a(y,{columns:m,rows:i},{"body-cell-image":r(t=>[a(q,null,{default:r(()=>[d("img",{src:t.row.image,style:{height:"100px"}},null,8,z)]),_:2},1024)]),_:1},8,["rows"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]))}};export{ne as default};
