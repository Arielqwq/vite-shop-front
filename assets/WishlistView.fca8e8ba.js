import{Q as _,a as c}from"./QTable.776c378f.js";import{L as f,r as h,M as g,aM as x,aH as a,j as v,k as w,l as s,$ as b,d as i,N as l,K as y,C as k}from"./index.d65890ce.js";import"./index.6625c75a.js";import"./QSeparator.af0590bf.js";import"./QMenu.2d6a8680.js";import"./position-engine.7f17bd70.js";import"./use-key-composition.e5e45876.js";import"./use-prevent-scroll.2c9c4867.js";import"./QChip.ac7192c3.js";import"./QItemLabel.daa3acab.js";import"./format.2a3572e1.js";import"./QCheckbox.61e1d519.js";const q={id:"wishlist"},B={class:"text-center"},C={class:"div q-px-xl row"},N={class:"col-12"},Q=["src"],R={__name:"WishlistView",setup(V){y();const n=f(),{removeLove:d}=n,u=h(""),t=g([]),m=async e=>{try{console.log(e),console.log(t);const o=t.findIndex(r=>r._id===e);console.log(t[o]._id),await d(t[o]._id),t.splice(o,1),a.fire({icon:"success",title:"\u6210\u529F",text:"\u5DF2\u5F9E\u6536\u85CF\u522A\u9664\u5546\u54C1"})}catch(o){console.log(o),a.fire({icon:"error",title:"\u5931\u6557",text:"\u522A\u9664\u5546\u54C1\u5931\u6557"})}},p=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:e=>e.name,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"left",field:e=>e.image,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"left",field:e=>e.price,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"left"}];return(async()=>{try{const{data:e}=await x.get("/users/love");t.push(...e.result),console.log(t)}catch{a.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6211\u7684\u6536\u85CF\u5931\u6557"})}})(),(e,o)=>(v(),w("div",q,[s("h3",B,[b("\u6211\u7684\u9858\u671B\u6E05\u55AE"),s("div",C,[s("div",N,[i(_,{columns:p,rows:t,"row-key":"p_id",filter:u.value},{"body-cell-image":l(r=>[i(c,null,{default:l(()=>[s("img",{src:r.row.image,style:{height:"100px"}},null,8,Q)]),_:2},1024)]),"body-cell-edit":l(r=>[i(c,null,{default:l(()=>[i(k,{round:"",color:"red",onClick:T=>m(r.row._id),icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])])])]))}};export{R as default};
