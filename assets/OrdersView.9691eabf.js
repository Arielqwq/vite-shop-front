import{Q as u}from"./QTd.975d05d6.js";import{O as b,aZ as m,aT as i,j as c,k as d,l as r,a3 as g,d as s,P as n,F as h,aU as x,a5 as w,G as y}from"./index.884d5890.js";import{Q as q}from"./QTable.8ba11e85.js";import"./QSeparator.5ee71878.js";import"./QMenu.dadb3bf4.js";import"./QChip.5742d008.js";import"./QItemLabel.9dfbb8e3.js";import"./format.2a3572e1.js";import"./QCheckbox.902a3ef2.js";const v={id:"orders"},k={class:"text-center"},D={class:"div q-px-xl row"},Q={class:"col-12"},L={__name:"OrdersView",setup(B){const o=b([]),p=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:e=>e._id,sortable:!0},{name:"ID",required:!0,label:"\u6D88\u8CBB\u8005 ID",align:"left",field:e=>e.u_id.account,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"left",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u8A02\u55AE\u91D1\u984D",align:"left",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u8A02\u55AE\u5167\u5BB9",align:"left"},{name:"delete",label:"\u522A\u9664",align:"left"}],f=async e=>{var l,a;console.log(e);try{await m.patch("/orders/delete/"+e,{status:1});const t=o.findIndex(_=>_._id===e);o.splice(t,1),i.fire({icon:"success",title:"\u6210\u529F",text:"\u6210\u529F\u522A\u9664"})}catch(t){i.fire({icon:"error",title:"\u5931\u6557",text:((a=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{try{const{data:e}=await m.get("/orders/all");o.push(...e.result.map(l=>(l.totalPrice=l.products.reduce((a,t)=>a+t.p_id.price*t.quantity,0),l)))}catch(e){console.log(e),i.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,l)=>(c(),d("div",v,[r("h3",k,[g("\u8A02\u55AE\u7BA1\u7406"),r("div",D,[r("div",Q,[s(q,{columns:p,rows:o},{"body-cell-content":n(a=>[s(u,null,{default:n(()=>[r("ul",null,[(c(!0),d(h,null,x(a.row.products,t=>(c(),d("li",null,[r("p",null,w(t.quantity+" \u500B "+t.p_id.name),1)]))),256))])]),_:2},1024)]),"body-cell-delete":n(a=>[s(u,null,{default:n(()=>[s(y,{onClick:t=>f(a.row._id),round:"",icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows"])])])])]))}};export{L as default};