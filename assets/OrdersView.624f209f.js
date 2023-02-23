import{Q as u}from"./QTd.02741f00.js";import{O as b,a_ as m,aV as i,j as c,k as d,l as r,Z as g,d as s,P as n,F as h,aW as x,a6 as w,G as y}from"./index.f2381c91.js";import{Q as q}from"./QTable.76a0e2f5.js";import"./QSeparator.1a166b79.js";import"./QMenu.15b5b128.js";import"./QChip.cd05aaf7.js";import"./QItemLabel.ef44e0cb.js";import"./format.2a3572e1.js";import"./QCheckbox.413d08a7.js";const v={id:"orders"},k={class:"text-center"},D={class:"div q-px-xl row"},Q={class:"col-12"},L={__name:"OrdersView",setup(V){const o=b([]),p=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:e=>e._id,sortable:!0},{name:"ID",required:!0,label:"\u6D88\u8CBB\u8005 ID",align:"left",field:e=>e.u_id.account,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"left",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u8A02\u55AE\u91D1\u984D",align:"left",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u8A02\u55AE\u5167\u5BB9",align:"left"},{name:"delete",label:"\u522A\u9664",align:"left"}],_=async e=>{var l,a;console.log(e);try{await m.patch("/orders/delete/"+e,{status:1});const t=o.findIndex(f=>f._id===e);o.splice(t,1),i.fire({icon:"success",title:"\u6210\u529F",text:"\u6210\u529F\u522A\u9664"})}catch(t){i.fire({icon:"error",title:"\u5931\u6557",text:((a=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{try{const{data:e}=await m.get("/orders/all");o.push(...e.result.map(l=>(l.totalPrice=l.products.reduce((a,t)=>a+t.p_id.price*t.quantity,0),l)))}catch(e){console.log(e),i.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,l)=>(c(),d("div",v,[r("h3",k,[g("\u8A02\u55AE\u7BA1\u7406"),r("div",D,[r("div",Q,[s(q,{columns:p,rows:o},{"body-cell-content":n(a=>[s(u,null,{default:n(()=>[r("ul",null,[(c(!0),d(h,null,x(a.row.products,t=>(c(),d("li",null,[r("p",null,w(t.quantity+" \u500B "+t.p_id.name),1)]))),256))])]),_:2},1024)]),"body-cell-delete":n(a=>[s(u,null,{default:n(()=>[s(y,{onClick:t=>_(a.row._id),round:"",icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows"])])])])]))}};export{L as default};
