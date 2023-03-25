import{X as b,b1 as u,aY as i,j as c,k as d,l as s,d as l,Y as n,Z as g,Q as h,F as w,aZ as x,ae as q,G as y}from"./index.c0ec1962.js";import{Q,a as p}from"./QTable.cf3d4c80.js";import"./QCheckbox.93656237.js";import"./QMenu.d93e4dec.js";import"./QChip.5e2cf927.js";import"./QItemLabel.6f2aa376.js";import"./format.2a3572e1.js";const V={class:"q-pa-md",id:"orders"},k=s("h3",{class:"text-center"},"\u8A02\u55AE\u7BA1\u7406",-1),D={class:"q-px-xl q-mt-md"},O={__name:"OrdersView",setup(I){const o=b([]),m=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:e=>e._id,sortable:!0},{name:"ID",required:!0,label:"\u6D88\u8CBB\u8005 ID",align:"center",field:e=>e.u_id.account,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"center",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u8A02\u55AE\u91D1\u984D",align:"center",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u8A02\u55AE\u5167\u5BB9",align:"center"},{name:"delete",label:"\u522A\u9664",align:"center"}],f=async e=>{var r,a;console.log(e);try{await u.patch("/orders/delete/"+e,{status:1});const t=o.findIndex(_=>_._id===e);o.splice(t,1),i.fire({icon:"success",title:"\u6210\u529F",text:"\u6210\u529F\u522A\u9664"})}catch(t){i.fire({icon:"error",title:"\u5931\u6557",text:((a=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{try{const{data:e}=await u.get("/orders/all");o.push(...e.result.map(r=>(r.totalPrice=r.products.reduce((a,t)=>a+t.p_id.price*t.quantity,0),r)))}catch(e){console.log(e),i.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,r)=>(c(),d("div",V,[k,s("div",D,[l(Q,{columns:m,rows:o},{"top-right":n(()=>[l(g,{outlined:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":r[0]||(r[0]=a=>e.filter=a),placeholder:"Search"},{append:n(()=>[l(h,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-content":n(a=>[l(p,null,{default:n(()=>[s("ul",null,[(c(!0),d(w,null,x(a.row.products,t=>(c(),d("li",null,[s("p",null,q(t.quantity+" \u500B "+t.p_id.name),1)]))),256))])]),_:2},1024)]),"body-cell-delete":n(a=>[l(p,{class:"text-center"},{default:n(()=>[l(y,{onClick:t=>f(a.row._id),round:"",icon:"fa-solid fa-trash-can",color:"red"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows"])])]))}};export{O as default};
