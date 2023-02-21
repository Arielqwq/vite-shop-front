import{Q as u,a as m}from"./QTable.d0e397cb.js";import{M as p,aM as _,aH as f,j as o,k as i,l as a,$ as b,d as n,N as c,F as g,aI as h,a1 as w}from"./index.dabf6670.js";import"./QSeparator.440e2142.js";import"./QMenu.e751f62a.js";import"./position-engine.e3644d97.js";import"./use-key-composition.35068efe.js";import"./use-prevent-scroll.95c3e0ff.js";import"./QChip.006d309c.js";import"./QItemLabel.ce2f9607.js";import"./format.2a3572e1.js";import"./QCheckbox.cd87b686.js";const x={id:"orders"},q={class:"text-center"},y={class:"div q-px-xl row"},v={class:"col-12"},P={__name:"OrdersView",setup(D){const s=p([]),d=[{name:"name",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:e=>e._id,sortable:!0},{name:"ID",required:!0,label:"\u6D88\u8CBB\u8005 ID",align:"left",field:e=>e.u_id.account,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"left",field:e=>new Date(e.date).toLocaleDateString(),sortable:!0},{name:"price",required:!0,label:"\u8A02\u55AE\u91D1\u984D",align:"left",field:e=>e.totalPrice,sortable:!0},{name:"content",label:"\u8A02\u55AE\u5167\u5BB9",align:"left"}];return(async()=>{try{const{data:e}=await _.get("/orders/all");s.push(...e.result.map(r=>(r.totalPrice=r.products.reduce((l,t)=>l+t.p_id.price*t.quantity,0),r)))}catch(e){console.log(e),f.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(e,r)=>(o(),i("div",x,[a("h3",q,[b("\u8A02\u55AE\u7BA1\u7406"),a("div",y,[a("div",v,[n(u,{columns:d,rows:s},{"body-cell-content":c(l=>[n(m,null,{default:c(()=>[a("ul",null,[(o(!0),i(g,null,h(l.row.products,t=>(o(),i("li",null,[a("p",null,w(t.quantity+" \u500B "+t.p_id.name),1)]))),256))])]),_:2},1024)]),_:1},8,["rows"])])])])]))}};export{P as default};
