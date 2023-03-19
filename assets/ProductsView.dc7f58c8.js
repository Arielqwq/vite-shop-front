import{X as x,r as F,b1 as V,aY as g,j as u,k as f,l as n,d as a,Y as i,af as N,G as m,Z as _,Q as p,ad as T,$ as j,b3 as w,ae as z,aa as A,a8 as P,a5 as R,a6 as Y,b2 as Z,ag as h,F as E,aZ as G,q,ah as L}from"./index.0ea2ded6.js";import{Q as X,a as y,b as H}from"./QTable.70fc1595.js";import{a as Q}from"./QCheckbox.7ea9f4df.js";import{Q as k}from"./QFile.bff2220f.js";import"./QMenu.713a58f9.js";import"./QChip.9d03599f.js";import"./QItemLabel.c027e995.js";import"./format.2a3572e1.js";const J={class:"q-pa-md",id:"admin-products"},K=n("h3",{class:"text-center"},"\u5546\u54C1\u7BA1\u7406",-1),M={class:"q-px-xl q-mt-md"},O={class:"col-12"},W=["src"],ee={class:"div q-pa-md row",align:"left"},le={class:"text-center"},ae={class:"col-12"},se={class:"col-12"},te={class:"col-12"},oe={class:"col-12"},ie={class:"col-12"},de={class:"col-12"},re={class:"col-12"},ne={class:"row"},ce={class:"col-12"},ue={key:0,class:"absolute-full flex flex-center"},xe={__name:"ProductsView",setup(me){const C=["\u8461\u8404\u9152","\u767D\u862D\u5730","\u6E05\u9152","\u71D2\u9152","\u9999\u6AB3\u6C23\u6CE1\u9152","\u5564\u9152","\u5976\u9152","\u5176\u4ED6"],c={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"},price(l){return l>=0||"\u50F9\u683C\u932F\u8AA4"}},I=()=>{e.image=[]},U=()=>{e.images=[]},d=x([]),b=F(""),e=x({_id:"",name:"",price:0,description:"",image:void 0,images:[],delImages:[],sell:!1,category:"",valid:!1,loading:!1,dialog:!1,idx:-1}),v=l=>{l===-1?(e._id="",e.name="",e.price=0,e.description="",e.image=void 0,e.images=[],e.delImages=[],e.sell=!1,e.category="",e.valid=!1,e.loading=!1,e.idx=-1):(e._id=d[l]._id,e.name=d[l].name,e.price=d[l].price,e.description=d[l].description,e.image=d[l].image,e.images=[],e.delImages=[],e.sell=d[l].sell,e.category=d[l].category,e.valid=!1,e.loading=!1,e.idx=l),e.dialog=!0},S=[{name:"name",required:!0,label:"\u540D\u7A31",align:"center",field:l=>l.name,format:l=>`${l}`,sortable:!0},{name:"image",required:!0,label:"\u5716\u7247",align:"center",field:l=>l.image,format:l=>`${l}`,sortable:!0},{name:"price",required:!0,label:"\u50F9\u683C",align:"center",field:l=>l.price,format:l=>`${l}`,sortable:!0},{name:"sell",required:!0,label:"\u4E0A\u67B6\u72C0\u614B",align:"center",field:l=>l.sell,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"center"}],$=()=>{e.name=null,e.price=null,e.description=null,e.category=null,e.sell=!1,e.image=void 0},B=async()=>{var s,t;e.loading=!0;const l=new FormData;l.append("name",e.name),l.append("price",e.price),l.append("description",e.description),l.append("image",e.image),console.log(e.images);for(const r of e.images)l.append("images",r);for(const r of e.delImages)l.append("delImages",r);l.append("sell",e.sell),l.append("category",e.category),console.log(e);try{if(e._id.length===0){const{data:r}=await V.post("/products",l);d.push(r.result),g.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:r}=await V.patch("/products/"+e._id,l);d[e.idx]=r.result,g.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(r){g.fire({icon:"error",title:"\u5931\u6557",text:((t=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,s;try{const{data:t}=await V.get("/products/all");d.push(...t.result),console.log(d)}catch(t){console.log(t),g.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,s)=>(u(),f("div",J,[K,n("div",M,[a(X,{columns:S,rows:d,"row-key":"_id",filter:b.value},{"top-left":i(()=>[n("div",O,[a(m,{size:"lg",onClick:s[0]||(s[0]=t=>v(-1)),color:"primary",label:"\u65B0\u589E\u5546\u54C1"})])]),"body-cell-image":i(t=>[a(y,{class:"text-center"},{default:i(()=>[n("img",{src:t.row.image,style:{width:"100px"}},null,8,W)]),_:2},1024)]),"top-right":i(()=>[a(_,{outlined:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":s[1]||(s[1]=t=>b.value=t),placeholder:"Search"},{append:i(()=>[a(p,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-sell":i(t=>[a(y,{class:"text-center"},{default:i(()=>[a(p,{size:"md",color:t.row.sell?"positive":"negative",name:t.row.sell?"fa-solid fa-square-check":"fa-solid fa-square-xmark"},null,8,["color","name"])]),_:2},1024)]),"body-cell-edit":i(t=>[a(y,{class:"text-center"},{default:i(()=>[a(m,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:r=>v(d.findIndex(o=>o._id===t.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),a(N,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":s[10]||(s[10]=t=>e.dialog=t),persistent:""},{default:i(()=>[a(T,{class:"column",style:{width:"700px","max-width":"80%"}},{default:i(()=>[a(j,{onSubmit:B,onReset:$},{default:i(()=>[a(w,{class:"row flex justify-between"},{default:i(()=>[n("div",ee,[n("div",le,z(e._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1)]),A((u(),P(m,{dense:"",flat:"",icon:"close"},{default:i(()=>[a(R,null,{default:i(()=>[Y("Close")]),_:1})]),_:1})),[[L]])]),_:1}),a(Z,{class:"column q-gutter-md"},{default:i(()=>{var t,r;return[n("div",ae,[a(_,{square:"",filled:"",modelValue:e.name,"onUpdate:modelValue":s[2]||(s[2]=o=>e.name=o),label:"\u5546\u54C1\u540D\u7A31",rules:[c.required]},null,8,["modelValue","rules"])]),n("div",se,[a(_,{square:"",filled:"",modelValue:e.price,"onUpdate:modelValue":s[3]||(s[3]=o=>e.price=o),type:"number",prefix:"$",label:"\u5546\u54C1\u55AE\u50F9",rules:[c.required,c.price]},null,8,["modelValue","rules"])]),n("div",te,[a(_,{square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":s[4]||(s[4]=o=>e.description=o),type:"textarea",label:"\u5546\u54C1\u8AAA\u660E",rules:[c.required]},null,8,["modelValue","rules"])]),n("div",oe,[a(H,{filled:"",modelValue:e.category,"onUpdate:modelValue":s[5]||(s[5]=o=>e.category=o),options:C,label:"\u5206\u985E",rules:[c.required]},null,8,["modelValue","rules"])]),n("div",ie,[a(Q,{modelValue:e.sell,"onUpdate:modelValue":s[6]||(s[6]=o=>e.sell=o),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),n("div",de,[a(k,{filled:"",modelValue:e.image,"onUpdate:modelValue":s[7]||(s[7]=o=>e.image=o),label:"\u8ACB\u4E0A\u50B3\u4E3B\u5716\u7247",style:{"max-height":"50px"}},{append:i(()=>[a(p,{name:"close",onClick:I})]),_:1},8,["modelValue"]),a(h,{src:(t=d[e.idx])==null?void 0:t.image,style:{width:"100px"}},null,8,["src"])]),n("div",re,[n("div",ne,[n("div",ce,[a(k,{modelValue:e.images,"onUpdate:modelValue":s[8]||(s[8]=o=>e.images=o),label:"\u8ACB\u4E0A\u50B3\u88DC\u5145\u5716\u7247",filled:"",multiple:""},{append:i(()=>[a(p,{name:"close",onClick:U})]),_:1},8,["modelValue"])]),e.idx>=0?(u(!0),f(E,{key:0},G((r=d[e.idx])==null?void 0:r.images,o=>(u(),f("div",{class:"col-3",key:o},[a(h,{class:"fullwidth",src:o},{default:i(()=>[e.delImages.includes(o)?(u(),f("div",ue,[a(p,{name:"delete"})])):q("",!0)]),_:2},1032,["src"]),a(Q,{modelValue:e.delImages,"onUpdate:modelValue":s[9]||(s[9]=D=>e.delImages=D),val:o},null,8,["modelValue","val"])]))),128)):q("",!0)])])]}),_:1}),a(w,{align:"right"},{default:i(()=>[a(m,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),a(m,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{xe as default};
