import{Q as f,a as l}from"./QTable.a7d6465e.js";import{V as g,W as h,r as x,X as b,b1 as w,aY as i,j as v,k as y,l as c,d as s,Y as a,G as n}from"./index.e70abd56.js";import"./index.f3d3a160.js";import"./QCheckbox.51c0dfd8.js";import"./QMenu.bd993d1d.js";import"./QChip.bf517c68.js";import"./QItemLabel.9d8bdcad.js";import"./format.2a3572e1.js";const q={class:"q-pa-md",id:"wishlist"},k=c("h4",{class:"text-center"},"\u6211\u7684\u6536\u85CF",-1),B={class:"q-px-xl q-mt-md"},Q=["src"],E={__name:"WishlistView",setup(V){g();const d=h(),{removeLove:u}=d,m=x(""),t=b([]),p=async e=>{try{console.log(e),console.log(t);const o=t.findIndex(r=>r._id===e);console.log(t[o]._id),await u(t[o]._id),t.splice(o,1),i.fire({icon:"success",title:"\u6210\u529F",text:"\u5DF2\u5F9E\u6536\u85CF\u522A\u9664\u5546\u54C1"})}catch(o){console.log(o),i.fire({icon:"error",title:"\u5931\u6557",text:"\u522A\u9664\u5546\u54C1\u5931\u6557"})}},_=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"center",field:e=>e.name,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"center",field:e=>e.image,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"center",field:e=>e.price,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"center"},{name:"go",required:!0,label:"\u7DE8\u8F2F",align:"center"}];return(async()=>{try{const{data:e}=await w.get("/users/love");t.push(...e.result),console.log(t)}catch{i.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6211\u7684\u6536\u85CF\u5931\u6557"})}})(),(e,o)=>(v(),y("div",q,[k,c("div",B,[s(f,{columns:_,rows:t,"row-key":"p_id",filter:m.value},{"body-cell-image":a(r=>[s(l,{class:"text-center"},{default:a(()=>[c("img",{src:r.row.image,style:{height:"100px"}},null,8,Q)]),_:2},1024)]),"body-cell-edit":a(r=>[s(l,{class:"text-center"},{default:a(()=>[s(n,{round:"",color:"accent",onClick:C=>p(r.row._id),icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),"body-cell-go":a(r=>[s(l,{class:"text-center"},{default:a(()=>[s(n,{class:"q-ml-md",size:"12px",icon:"fa-brands fa-golang",to:"../product/"+r.row._id,round:"",color:"primary"},null,8,["to"])]),_:2},1024)]),_:1},8,["rows","filter"])])]))}};export{E as default};
