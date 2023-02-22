import{r as y,O as _,aZ as p,aT as u,j as b,k as C,l as d,d as t,G as r,P as o,a6 as k,R as f,Q as w,a4 as U,U as S,a$ as h,a5 as B,a0 as D,Z as T,b2 as N,a3 as F,a_ as I,a7 as R,a8 as $}from"./index.15549c5f.js";import{Q as x}from"./QTd.d2ef90c8.js";import{Q as j}from"./QTable.fed3df48.js";import{Q as A}from"./QCheckbox.319b037f.js";import{Q as O}from"./QFile.34a45c20.js";import"./QSeparator.99c532f3.js";import"./QMenu.14b581ee.js";import"./QChip.b33c0246.js";import"./QItemLabel.7b44cda4.js";import"./format.2a3572e1.js";const P={class:"text-center",id:"admin-news"},Z=d("h3",null,"\u6700\u65B0\u6D88\u606F\u7BA1\u7406",-1),E={class:"q-px-xl row"},G={class:"col-12"},z={class:"q-px-xl q-mt-md"},H=["src"],J={class:"div q-pa-md row",align:"left"},K={class:"text-center"},L={class:"col-12"},M={class:"col-12"},W={class:"col-2"},X={class:"col-5"},Y={class:"row"},ce={__name:"NewsView",setup(ee){const c={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"}},V=()=>{e.image=[]},m=y(""),n=_([]),e=_({_id:"",title:"",image:void 0,description:"",sell:!1,loading:!1,dialog:!1,idx:-1}),g=l=>{console.log(l),l===-1?(e._id="",e.title="",e.image=void 0,e.description="",e.sell=!1,e.loading=!1,e.idx=-1):(e._id=n[l]._id,e.title=n[l].title,e.description=n[l].description,e.sell=n[l].sell,e.image=n[l].image,e.loading=!1,e.idx=l),e.dialog=!0},v=[{name:"title",required:!0,label:"\u540D\u7A31",align:"left",field:l=>l.title},{name:"description",required:!0,label:"\u5167\u5BB9",align:"left",field:l=>l.description},{name:"image",required:!0,label:"\u5716\u7247",align:"left",field:l=>l.image},{name:"sell",required:!0,label:"\u4E0A\u67B6\u72C0\u614B",align:"left",field:l=>l.sell,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"left"}],Q=()=>{e.title=null,e.image=void 0,e.description=null,e.sell=!1},q=async()=>{var a,s;e.loading=!0;const l=new FormData;l.append("title",e.title),l.append("description",e.description),l.append("image",e.image),l.append("sell",e.sell);try{if(e._id.length===0){const{data:i}=await p.post("/news",l);n.push(i.result),u.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:i}=await p.patch("/news/"+e._id,l);n[e.idx]=i.result,u.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(i){u.fire({icon:"error",title:"\u5931\u6557",text:((s=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,a;try{const{data:s}=await p.get("/news");n.push(...s.result),console.log(e)}catch(s){u.fire({icon:"error",title:"\u5931\u6557",text:((a=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,a)=>(b(),C("div",P,[Z,d("div",E,[d("div",G,[t(r,{onClick:a[0]||(a[0]=s=>g(-1)),color:"primary",label:"\u65B0\u589E\u8CBC\u6587"})])]),d("div",z,[t(j,{align:"center",title:"\u8CBC\u6587\u8CC7\u8A0A",columns:v,rows:n,"row-key":"_id",filter:m.value},{"body-cell-image":o(s=>[t(x,null,{default:o(()=>[d("img",{src:s.row.image,style:{height:"100px"}},null,8,H)]),_:2},1024)]),"top-right":o(()=>[t(f,{borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=s=>m.value=s),placeholder:"Search"},{append:o(()=>[t(w,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-edit":o(s=>[t(x,{class:"q-pa-md q-gutter-sm"},{default:o(()=>[t(r,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:i=>g(n.indexOf(s.row))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),t(k,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":a[6]||(a[6]=s=>e.dialog=s),persistent:""},{default:o(()=>[t(U,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:o(()=>[t(S,{onSubmit:q,onReset:Q},{default:o(()=>[t(h,{class:"row flex justify-between"},{default:o(()=>[d("div",J,[d("div",K,B(e._id.length>0?"\u7DE8\u8F2F\u8CBC\u6587":"\u65B0\u589E\u8CBC\u6587"),1)]),D((b(),T(r,{dense:"",flat:"",icon:"close"},{default:o(()=>[t(N,null,{default:o(()=>[F("Close")]),_:1})]),_:1})),[[$]])]),_:1}),t(I,{class:"column q-gutter-md"},{default:o(()=>{var s;return[d("div",L,[t(f,{square:"",filled:"",modelValue:e.title,"onUpdate:modelValue":a[2]||(a[2]=i=>e.title=i),label:"\u6587\u7AE0\u6A19\u984C",rules:[c.required]},null,8,["modelValue","rules"])]),d("div",M,[t(f,{square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":a[3]||(a[3]=i=>e.description=i),type:"textarea",label:"\u6587\u7AE0\u5167\u5BB9",rules:[c.required]},null,8,["modelValue","rules"])]),d("div",W,[t(A,{modelValue:e.sell,"onUpdate:modelValue":a[4]||(a[4]=i=>e.sell=i),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),d("div",X,[d("div",Y,[t(R,{src:(s=n[e.idx])==null?void 0:s.image,style:{height:"100px"}},null,8,["src"]),t(O,{filled:"",modelValue:e.image,"onUpdate:modelValue":a[5]||(a[5]=i=>e.image=i),label:"\u8ACB\u4E0A\u50B3\u5716\u7247",style:{"max-height":"50px"},rules:[c.required]},{append:o(()=>[t(w,{name:"close",onClick:V})]),_:1},8,["modelValue","rules"])])])]}),_:1}),t(h,{align:"right"},{default:o(()=>[t(r,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),t(r,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{ce as default};
