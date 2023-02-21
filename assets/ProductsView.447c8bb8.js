import{M as v,r as F,aM as V,aH as p,j as m,k as g,l as d,d as a,C as c,N as i,Q as f,a0 as N,aP as x,a1 as T,X as P,V as j,$ as A,aO as M,a2 as h,F as R,aI as E,q as w}from"./index.dabf6670.js";import{Q as H,a as Q,b as L}from"./QTable.d0e397cb.js";import{Q as _,a as O,C as X}from"./QForm.c1fbe4fa.js";import{Q as z}from"./QTooltip.1583106e.js";import{Q as q}from"./QCheckbox.cd87b686.js";import{Q as C}from"./QFile.0197aac6.js";import{Q as G}from"./use-key-composition.35068efe.js";import"./QSeparator.440e2142.js";import"./QMenu.e751f62a.js";import"./position-engine.e3644d97.js";import"./use-prevent-scroll.95c3e0ff.js";import"./QChip.006d309c.js";import"./QItemLabel.ce2f9607.js";import"./format.2a3572e1.js";const J={id:"admin-products"},K=d("h3",{class:"text-center"},"\u5546\u54C1\u7BA1\u7406",-1),W={class:"q-px-xl row"},Y={class:"col-12"},Z={class:"q-px-xl q-mt-md"},ee=["src"],le={class:"div q-pa-md row",align:"left"},ae={class:"text-center"},se={class:"col-12"},te={class:"col-12"},oe={class:"col-12"},ie={class:"col-12"},de={class:"col-2"},re={class:"col-5"},ne={class:"row"},ue={class:"col-5"},me={class:"row"},ce={key:0,class:"absolute-full flex flex-center"},Ie={__name:"ProductsView",setup(pe){const k=["\u8461\u8404\u9152","\u767D\u862D\u5730","\u6E05\u9152","\u71D2\u9152","\u9999\u6AB3\u6C23\u6CE1\u9152","\u5564\u9152","\u5976\u9152","\u5176\u4ED6"],u={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"},price(l){return l>=0||"\u50F9\u683C\u932F\u8AA4"}},I=()=>{e.image=[]},U=()=>{e.images=[]},r=v([]),b=F(""),e=v({_id:"",name:"",price:0,description:"",image:void 0,images:[],delImages:[],sell:!1,category:"",valid:!1,loading:!1,dialog:!1,idx:-1}),y=l=>{l===-1?(e._id="",e.name="",e.price=0,e.description="",e.image=void 0,e.images=[],e.delImages=[],e.sell=!1,e.category="",e.valid=!1,e.loading=!1,e.idx=-1):(e._id=r[l]._id,e.name=r[l].name,e.price=r[l].price,e.description=r[l].description,e.image=r[l].image,e.images=[],e.delImages=[],e.sell=r[l].sell,e.category=r[l].category,e.valid=!1,e.loading=!1,e.idx=l),e.dialog=!0},$=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:l=>l.name,format:l=>`${l}`,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"left",field:l=>l.image,format:l=>`${l}`,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"left",field:l=>l.price,format:l=>`${l}`,sortable:!0},{name:"sell",required:!0,label:"\u4E0A\u67B6\u72C0\u614B",align:"left",field:l=>l.sell,format:l=>`${l}`,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"left"}],S=()=>{e.name=null,e.price=null,e.description=null,e.category=null,e.sell=!1,e.image=void 0},B=async()=>{var s,t;e.loading=!0;const l=new FormData;l.append("name",e.name),l.append("price",e.price),l.append("description",e.description),l.append("image",e.image),console.log(e.images);for(const n of e.images)l.append("images",n);for(const n of e.delImages)l.append("delImages",n);l.append("sell",e.sell),l.append("category",e.category),console.log(e);try{if(e._id.length===0){const{data:n}=await V.post("/products",l);r.push(n.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:n}=await V.patch("/products/"+e._id,l);r[e.idx]=n.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(n){p.fire({icon:"error",title:"\u5931\u6557",text:((t=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,s;try{const{data:t}=await V.get("/products/all");r.push(...t.result),console.log(r)}catch(t){console.log(t),p.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,s)=>(m(),g("div",J,[K,d("div",W,[d("div",Y,[a(c,{onClick:s[0]||(s[0]=t=>y(-1)),color:"primary",label:"\u65B0\u589E\u5546\u54C1"})])]),d("div",Z,[a(H,{title:"\u5546\u54C1\u8CC7\u8A0A",columns:$,rows:r,"row-key":"_id",filter:b.value},{"body-cell-image":i(t=>[a(Q,null,{default:i(()=>[d("img",{src:t.row.image,style:{height:"100px"}},null,8,ee)]),_:2},1024)]),"top-right":i(()=>[a(_,{borderless:"",dense:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":s[1]||(s[1]=t=>b.value=t),placeholder:"Search"},{append:i(()=>[a(f,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-edit":i(t=>[a(Q,{class:"q-pa-md q-gutter-sm"},{default:i(()=>[a(c,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:n=>y(r.findIndex(o=>o._id===t.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),a(G,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":s[10]||(s[10]=t=>e.dialog=t),persistent:""},{default:i(()=>[a(N,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:i(()=>[a(O,{onSubmit:B,onReset:S},{default:i(()=>[a(x,{class:"row flex justify-between"},{default:i(()=>[d("div",le,[d("div",ae,T(e._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1)]),P((m(),j(c,{dense:"",flat:"",icon:"close"},{default:i(()=>[a(z,null,{default:i(()=>[A("Close")]),_:1})]),_:1})),[[X]])]),_:1}),a(M,{class:"column q-gutter-md"},{default:i(()=>{var t,n;return[d("div",se,[a(_,{square:"",filled:"",modelValue:e.name,"onUpdate:modelValue":s[2]||(s[2]=o=>e.name=o),label:"\u5546\u54C1\u540D\u7A31",rules:[u.required]},null,8,["modelValue","rules"])]),d("div",te,[a(_,{square:"",filled:"",modelValue:e.price,"onUpdate:modelValue":s[3]||(s[3]=o=>e.price=o),type:"number",prefix:"$",label:"\u5546\u54C1\u55AE\u50F9",rules:[u.required,u.price]},null,8,["modelValue","rules"])]),d("div",oe,[a(_,{square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":s[4]||(s[4]=o=>e.description=o),type:"textarea",label:"\u5546\u54C1\u8AAA\u660E",rules:[u.required]},null,8,["modelValue","rules"])]),d("div",ie,[a(L,{filled:"",modelValue:e.category,"onUpdate:modelValue":s[5]||(s[5]=o=>e.category=o),options:k,label:"\u5206\u985E",rules:[u.required]},null,8,["modelValue","rules"])]),d("div",de,[a(q,{modelValue:e.sell,"onUpdate:modelValue":s[6]||(s[6]=o=>e.sell=o),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),d("div",re,[d("div",ne,[a(h,{src:(t=r[e.idx])==null?void 0:t.image,style:{height:"100px"}},null,8,["src"]),a(C,{filled:"",modelValue:e.image,"onUpdate:modelValue":s[7]||(s[7]=o=>e.image=o),label:"\u8ACB\u4E0A\u50B3\u4E3B\u5716\u7247",style:{"max-height":"50px"}},{append:i(()=>[a(f,{name:"close",onClick:I})]),_:1},8,["modelValue"])])]),d("div",ue,[d("div",me,[e.idx>=0?(m(!0),g(R,{key:0},E((n=r[e.idx])==null?void 0:n.images,o=>(m(),g("div",{class:"col-3",key:o},[a(h,{class:"fullwidth",src:o},{default:i(()=>[e.delImages.includes(o)?(m(),g("div",ce,[a(f,{name:"delete"})])):w("",!0)]),_:2},1032,["src"]),a(q,{modelValue:e.delImages,"onUpdate:modelValue":s[8]||(s[8]=D=>e.delImages=D),val:o},null,8,["modelValue","val"])]))),128)):w("",!0)]),a(C,{modelValue:e.images,"onUpdate:modelValue":s[9]||(s[9]=o=>e.images=o),label:"\u8ACB\u4E0A\u50B3\u88DC\u5145\u5716\u7247",filled:"",multiple:"",style:{"max-width":"300px"}},{append:i(()=>[a(f,{name:"close",onClick:U})]),_:1},8,["modelValue"])])]}),_:1}),a(x,{align:"right"},{default:i(()=>[a(c,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),a(c,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{Ie as default};
