import{u as P,a as x,b as Q,Q as T}from"./QTabs.13e9245f.js";import{v as f,bC as V,h as D,A as O,bD as k,aw as C,bE as E,aA as S,bF as A,c as B,be as F,g as L,O as v,r as U,a_ as g,aU as j,j as p,k as b,l as r,d as a,P as l,a5 as N,F as $,aV as I,a6 as z}from"./index.8f362b44.js";import{Q as G}from"./QSeparator.552cfc68.js";import{Q as q}from"./QTd.ea92bf92.js";import{Q as w}from"./QTable.df5a9107.js";import"./QResizeObserver.4bab98ce.js";import"./QMenu.94a06207.js";import"./QChip.be639dc9.js";import"./QItemLabel.61608594.js";import"./format.2a3572e1.js";import"./QCheckbox.52a39076.js";var y=f({name:"QTab",props:P,emits:x,setup(i,{slots:s,emit:d}){const{renderTab:n}=Q(i,s,d);return()=>n("div")}}),h=f({name:"QTabPanel",props:V,setup(i,{slots:s}){return()=>D("div",{class:"q-tab-panel",role:"tabpanel"},O(s.default))}}),H=f({name:"QTabPanels",props:{...k,...C},emits:E,setup(i,{slots:s}){const d=L(),n=S(i,d.proxy.$q),{updatePanelsList:c,getPanelContent:m,panelDirectives:e}=A(),o=B(()=>"q-tab-panels q-panel-parent"+(n.value===!0?" q-tab-panels--dark q-dark":""));return()=>(c(s),F("div",{class:o.value},m(),"pan",i.swipeable,()=>e.value))}});const J={id:"orders"},K={class:"row"},M={class:"q-pa-xl col-12"},R={class:"div q-px-xl row"},W={class:"col-12"},X={class:"div q-px-x l row"},Y={class:"col-12"},Z=["src"],ce={__name:"OrdersView",setup(i){const s=v([]),d=v([]),n=U("productsOrder"),c=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:e=>e._id,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"left",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u8A02\u55AE\u91D1\u984D",align:"left",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u8A02\u55AE\u5167\u5BB9",align:"left"}],m=[{name:"title",required:!0,label:"\u540D\u7A31",align:"left",field:e=>e.title},{name:"price",required:!0,label:"\u8CBB\u7528",align:"left",field:e=>e.price,format:e=>`${e}`,sortable:!0},{name:"daysfrom",required:!0,label:"\u958B\u59CB\u65E5\u671F",align:"left",field:e=>e.daysfrom},{name:"daysto",required:!0,label:"\u7D50\u675F\u65E5\u671F",align:"left",field:e=>e.daysto},{name:"description",required:!0,label:"\u7C21\u4ECB",align:"left",field:e=>e.description},{name:"lecturer",required:!0,label:"\u8B1B\u8005",align:"left",field:e=>e.lecturer},{name:"image",required:!0,label:"\u5716\u7247",align:"left",field:e=>e.image}];return(async()=>{try{const{data:e}=await g.get("/orders");s.push(...e.result.map(t=>(t.totalPrice=t.products.reduce((u,_)=>u+_.p_id.price*_.quantity,0),t)));const{data:o}=await g.get("/events/me");d.push(...o.result)}catch(e){console.log(e),j.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,o)=>(p(),b("div",J,[r("div",K,[r("div",M,[a(N,null,{default:l(()=>[a(T,{class:"tabs-text text-grey",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=t=>n.value=t),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:l(()=>[a(y,{class:"text-h3",name:"productsOrder",label:"\u6211\u7684\u5546\u54C1\u8A02\u55AE"}),a(y,{name:"eventsOrder",label:"\u6211\u7684\u8AB2\u7A0B\u6D3B\u52D5\u8CC7\u8A0A "})]),_:1},8,["modelValue"]),a(G),a(H,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=t=>n.value=t),animated:""},{default:l(()=>[a(h,{name:"productsOrder"},{default:l(()=>[r("div",R,[r("div",W,[a(w,{columns:c,rows:s},{"body-cell-content":l(t=>[a(q,null,{default:l(()=>[r("ul",null,[(p(!0),b($,null,I(t.row.products,u=>(p(),b("li",null,[r("p",null,z(u.quantity+" \u500B "+u.p_id.name),1)]))),256))])]),_:2},1024)]),_:1},8,["rows"])])])]),_:1}),a(h,{name:"eventsOrder"},{default:l(()=>[r("div",X,[r("div",Y,[a(w,{columns:m,rows:d},{"body-cell-image":l(t=>[a(q,null,{default:l(()=>[r("img",{src:t.row.image,style:{height:"100px"}},null,8,Z)]),_:2},1024)]),_:1},8,["rows"])])])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]))}};export{ce as default};
