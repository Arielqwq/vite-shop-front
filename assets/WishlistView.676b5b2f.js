import{Q as c}from"./QTd.ea92bf92.js";import{M as f,N as p,r as h,O as g,a_ as x,aU as a,j as v,k as w,l as s,Z as b,d as l,P as i,G as y}from"./index.8f362b44.js";import{Q as k}from"./QTable.df5a9107.js";import"./index.7085de69.js";import"./QSeparator.552cfc68.js";import"./QMenu.94a06207.js";import"./QChip.be639dc9.js";import"./QItemLabel.61608594.js";import"./format.2a3572e1.js";import"./QCheckbox.52a39076.js";const q={id:"wishlist"},Q={class:"text-center"},B={class:"div q-px-xl row"},N={class:"col-12"},V=["src"],M={__name:"WishlistView",setup(C){f();const n=p(),{removeLove:d}=n,u=h(""),t=g([]),m=async e=>{try{console.log(e),console.log(t);const o=t.findIndex(r=>r._id===e);console.log(t[o]._id),await d(t[o]._id),t.splice(o,1),a.fire({icon:"success",title:"\u6210\u529F",text:"\u5DF2\u5F9E\u6536\u85CF\u522A\u9664\u5546\u54C1"})}catch(o){console.log(o),a.fire({icon:"error",title:"\u5931\u6557",text:"\u522A\u9664\u5546\u54C1\u5931\u6557"})}},_=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:e=>e.name,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"left",field:e=>e.image,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"left",field:e=>e.price,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"left"}];return(async()=>{try{const{data:e}=await x.get("/users/love");t.push(...e.result),console.log(t)}catch{a.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6211\u7684\u6536\u85CF\u5931\u6557"})}})(),(e,o)=>(v(),w("div",q,[s("h3",Q,[b("\u6211\u7684\u9858\u671B\u6E05\u55AE"),s("div",B,[s("div",N,[l(k,{columns:_,rows:t,"row-key":"p_id",filter:u.value},{"body-cell-image":i(r=>[l(c,null,{default:i(()=>[s("img",{src:r.row.image,style:{height:"100px"}},null,8,V)]),_:2},1024)]),"body-cell-edit":i(r=>[l(c,null,{default:i(()=>[l(y,{round:"",color:"red",onClick:T=>m(r.row._id),icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])])])]))}};export{M as default};
