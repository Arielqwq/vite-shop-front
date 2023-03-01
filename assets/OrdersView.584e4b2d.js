import{u as P,a as Q,b as T,Q as x}from"./QTabs.3be9ae75.js";import{v as _,bE as V,h as D,A as k,bF as O,aA as C,bG as E,aE as S,bH as A,c as B,bg as F,g as L,X as v,r as j,b1 as g,aY as N,j as p,k as b,l as u,d as a,Y as r,ab as U,F as Y,aZ as $,ac as z}from"./index.545ca765.js";import{Q as G}from"./QCheckbox.c5de54bc.js";import{Q as y,a as q}from"./QTable.64fd85bf.js";import"./QResizeObserver.ae2ad02d.js";import"./QMenu.8cdad316.js";import"./QChip.adab15a1.js";import"./QItemLabel.66c96135.js";import"./format.2a3572e1.js";var w=_({name:"QTab",props:P,emits:Q,setup(o,{slots:s,emit:i}){const{renderTab:l}=T(o,s,i);return()=>l("div")}}),h=_({name:"QTabPanel",props:V,setup(o,{slots:s}){return()=>D("div",{class:"q-tab-panel",role:"tabpanel"},k(s.default))}}),H=_({name:"QTabPanels",props:{...O,...C},emits:E,setup(o,{slots:s}){const i=L(),l=S(o,i.proxy.$q),{updatePanelsList:c,getPanelContent:m,panelDirectives:e}=A(),n=B(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(c(s),F("div",{class:n.value},m(),"pan",o.swipeable,()=>e.value))}});const I={id:"orders"},X={class:"row"},Z={class:"q-pa-xl col-12"},J={class:"col-12"},K={class:"q-ma-none",style:{"font-size":".78vw"}},M=["src"],oe={__name:"OrdersView",setup(o){const s=v([]),i=v([]),l=j("productsOrder"),c=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:e=>e._id,sortable:!0},{name:"date",required:!0,label:"\u4E0B\u55AE\u65E5\u671F",align:"center",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u91D1\u984D",align:"center",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u5167\u5BB9",align:"center"}],m=[{name:"title",required:!0,label:"\u540D\u7A31",align:"center",field:e=>e.title},{name:"price",required:!0,label:"\u8CBB\u7528",align:"center",field:e=>e.price,format:e=>`${e}`,sortable:!0},{name:"daysfrom",required:!0,label:"\u958B\u59CB\u65E5\u671F",align:"center",field:e=>e.daysfrom},{name:"daysto",required:!0,label:"\u7D50\u675F\u65E5\u671F",align:"center",field:e=>e.daysto},{name:"description",required:!0,label:"\u7C21\u4ECB",align:"center",field:e=>e.description},{name:"lecturer",required:!0,label:"\u8B1B\u8005",align:"center",field:e=>e.lecturer},{name:"image",required:!0,label:"\u5716\u7247",align:"center",field:e=>e.image}];return(async()=>{try{const{data:e}=await g.get("/orders");s.push(...e.result.map(t=>(t.totalPrice=t.products.reduce((d,f)=>d+f.p_id.price*f.quantity,0),t)));const{data:n}=await g.get("/events/me");i.push(...n.result)}catch(e){console.log(e),N.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,n)=>(p(),b("div",I,[u("div",X,[u("div",Z,[a(U,null,{default:r(()=>[a(x,{class:"tabs-text text-grey",modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:r(()=>[a(w,{class:"text-h3",name:"productsOrder",label:"\u6211\u7684\u5546\u54C1\u8A02\u55AE"}),a(w,{name:"eventsOrder",label:"\u6211\u7684\u8AB2\u7A0B\u6D3B\u52D5\u8CC7\u8A0A "})]),_:1},8,["modelValue"]),a(G),a(H,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=t=>l.value=t),animated:"",style:{width:"100%"}},{default:r(()=>[a(h,{name:"productsOrder"},{default:r(()=>[u("div",J,[a(y,{columns:c,rows:s},{"body-cell-content":r(t=>[a(q,{class:"text-left"},{default:r(()=>[(p(!0),b(Y,null,$(t.row.products,d=>(p(),b("p",K,z(d.quantity+" \u500B "+d.p_id.name),1))),256))]),_:2},1024)]),_:1},8,["rows"])])]),_:1}),a(h,{name:"eventsOrder"},{default:r(()=>[a(y,{columns:m,rows:i},{"body-cell-image":r(t=>[a(q,null,{default:r(()=>[u("img",{src:t.row.image,style:{height:"100px"}},null,8,M)]),_:2},1024)]),_:1},8,["rows"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]))}};export{oe as default};
