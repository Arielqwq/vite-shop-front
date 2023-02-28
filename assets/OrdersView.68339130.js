import{u as P,a as Q,b as T,Q as x}from"./QTabs.4258f934.js";import{v as _,bG as V,h as D,A as k,bH as O,aA as C,bI as E,aE as S,bJ as A,c as B,bi as L,g as j,W as v,r as F,b1 as g,aY as I,j as p,k as b,l as u,d as a,X as r,aa as N,F as U,aZ as $,ab as z}from"./index.32331d5d.js";import{Q as G}from"./QCheckbox.dc7ccdca.js";import{Q as y,a as q}from"./QTable.bb7b9952.js";import"./QResizeObserver.71e9179f.js";import"./QMenu.426998dc.js";import"./QChip.9c5201ef.js";import"./QItemLabel.c024984a.js";import"./format.2a3572e1.js";var w=_({name:"QTab",props:P,emits:Q,setup(o,{slots:s,emit:i}){const{renderTab:l}=T(o,s,i);return()=>l("div")}}),h=_({name:"QTabPanel",props:V,setup(o,{slots:s}){return()=>D("div",{class:"q-tab-panel",role:"tabpanel"},k(s.default))}}),H=_({name:"QTabPanels",props:{...O,...C},emits:E,setup(o,{slots:s}){const i=j(),l=S(o,i.proxy.$q),{updatePanelsList:c,getPanelContent:m,panelDirectives:e}=A(),n=B(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(c(s),L("div",{class:n.value},m(),"pan",o.swipeable,()=>e.value))}});const J={id:"orders"},W={class:"row"},X={class:"q-pa-xl col-12"},Y={class:"col-12"},Z={class:"q-ma-none",style:{"font-size":".78vw"}},K=["src"],oe={__name:"OrdersView",setup(o){const s=v([]),i=v([]),l=F("productsOrder"),c=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:e=>e._id,sortable:!0},{name:"date",required:!0,label:"\u4E0B\u55AE\u65E5\u671F",align:"center",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u91D1\u984D",align:"center",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u5167\u5BB9",align:"center"}],m=[{name:"title",required:!0,label:"\u540D\u7A31",align:"center",field:e=>e.title},{name:"price",required:!0,label:"\u8CBB\u7528",align:"center",field:e=>e.price,format:e=>`${e}`,sortable:!0},{name:"daysfrom",required:!0,label:"\u958B\u59CB\u65E5\u671F",align:"center",field:e=>e.daysfrom},{name:"daysto",required:!0,label:"\u7D50\u675F\u65E5\u671F",align:"center",field:e=>e.daysto},{name:"description",required:!0,label:"\u7C21\u4ECB",align:"center",field:e=>e.description},{name:"lecturer",required:!0,label:"\u8B1B\u8005",align:"center",field:e=>e.lecturer},{name:"image",required:!0,label:"\u5716\u7247",align:"center",field:e=>e.image}];return(async()=>{try{const{data:e}=await g.get("/orders");s.push(...e.result.map(t=>(t.totalPrice=t.products.reduce((d,f)=>d+f.p_id.price*f.quantity,0),t)));const{data:n}=await g.get("/events/me");i.push(...n.result)}catch(e){console.log(e),I.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,n)=>(p(),b("div",J,[u("div",W,[u("div",X,[a(N,null,{default:r(()=>[a(x,{class:"tabs-text text-grey",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:r(()=>[a(w,{class:"text-h3",name:"productsOrder",label:"\u6211\u7684\u5546\u54C1\u8A02\u55AE"}),a(w,{name:"eventsOrder",label:"\u6211\u7684\u8AB2\u7A0B\u6D3B\u52D5\u8CC7\u8A0A "})]),_:1},8,["modelValue"]),a(G),a(H,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=t=>l.value=t),animated:"",style:{width:"100%"}},{default:r(()=>[a(h,{name:"productsOrder"},{default:r(()=>[u("div",Y,[a(y,{columns:c,rows:s},{"body-cell-content":r(t=>[a(q,{class:"text-left"},{default:r(()=>[(p(!0),b(U,null,$(t.row.products,d=>(p(),b("p",Z,z(d.quantity+" \u500B "+d.p_id.name),1))),256))]),_:2},1024)]),_:1},8,["rows"])])]),_:1}),a(h,{name:"eventsOrder"},{default:r(()=>[a(y,{columns:m,rows:i},{"body-cell-image":r(t=>[a(q,null,{default:r(()=>[u("img",{src:t.row.image,style:{height:"100px"}},null,8,K)]),_:2},1024)]),_:1},8,["rows"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]))}};export{oe as default};
