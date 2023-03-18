import{r as Q,X as w,b1 as p,aY as c,j as h,k,l as n,d as t,Y as i,af as C,G as r,Q as f,Z as g,ad as S,$ as U,b3 as x,ae as B,aa as D,a8 as N,a5 as T,a6 as F,b2 as I,ag as $,ah as j}from"./index.c0a7084f.js";import{Q as z,a as _}from"./QTable.220d98b6.js";import{a as A}from"./QCheckbox.5674acf7.js";import{Q as R}from"./QFile.4a92bc8f.js";import"./QMenu.c2ff7ffc.js";import"./QChip.ba611dc0.js";import"./QItemLabel.eae6b904.js";import"./format.2a3572e1.js";const Y={class:"q-pa-md",id:"admin-news"},E=n("h3",{class:"text-center"},"\u65B0\u805E\u7BA1\u7406",-1),G={class:"q-px-xl q-mt-md"},O={class:"col-12"},P=["src"],X={class:"div q-pa-md row",align:"left"},Z={class:"text-center"},H={class:"col-12"},J={class:"col-12"},K={class:"col-2"},L={class:"col-5"},M={class:"row"},ne={__name:"NewsView",setup(W){const u={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"}},V=()=>{e.image=[]},m=Q(""),d=w([]),e=w({_id:"",title:"",image:void 0,description:"",sell:!1,loading:!1,dialog:!1,idx:-1}),b=l=>{console.log(l),l===-1?(e._id="",e.title="",e.image=void 0,e.description="",e.sell=!1,e.loading=!1,e.idx=-1):(e._id=d[l]._id,e.title=d[l].title,e.description=d[l].description,e.sell=d[l].sell,e.image=d[l].image,e.loading=!1,e.idx=l),e.dialog=!0},v=[{name:"title",required:!0,label:"\u540D\u7A31",align:"center",field:l=>l.title},{name:"description",required:!0,label:"\u5167\u5BB9",align:"center",field:l=>l.description},{name:"image",required:!0,label:"\u5716\u7247",align:"center",field:l=>l.image},{name:"sell",required:!0,label:"\u4E0A\u67B6\u72C0\u614B",align:"center",field:l=>l.sell,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"center"}],q=()=>{e.title=null,e.image=void 0,e.description=null,e.sell=!1},y=async()=>{var s,a;e.loading=!0;const l=new FormData;l.append("title",e.title),l.append("description",e.description),l.append("image",e.image),l.append("sell",e.sell);try{if(e._id.length===0){const{data:o}=await p.post("/news",l);d.push(o.result),c.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:o}=await p.patch("/news/"+e._id,l);d[e.idx]=o.result,c.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(o){c.fire({icon:"error",title:"\u5931\u6557",text:((a=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,s;try{const{data:a}=await p.get("/news");d.push(...a.result),console.log(e)}catch(a){c.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,s)=>(h(),k("div",Y,[E,n("div",G,[t(z,{align:"center",columns:v,rows:d,"row-key":"_id",filter:m.value},{"top-left":i(()=>[n("div",O,[t(r,{size:"lg",onClick:s[0]||(s[0]=a=>b(-1)),color:"primary",label:"\u65B0\u589E\u5546\u54C1"})])]),"body-cell-image":i(a=>[t(_,{class:"text-center"},{default:i(()=>[n("img",{class:"absolute-center",src:a.row.image,style:{width:"130px"}},null,8,P)]),_:2},1024)]),"body-cell-sell":i(a=>[t(_,{class:"text-center"},{default:i(()=>[t(f,{size:"md",color:a.row.sell?"positive":"negative",name:a.row.sell?"fa-solid fa-square-check":"fa-solid fa-square-xmark"},null,8,["color","name"])]),_:2},1024)]),"top-right":i(()=>[t(g,{outlined:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=a=>m.value=a),placeholder:"Search"},{append:i(()=>[t(f,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-edit":i(a=>[t(_,{class:"q-pa-md q-gutter-sm"},{default:i(()=>[t(r,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:o=>b(d.indexOf(a.row))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),t(C,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":s[6]||(s[6]=a=>e.dialog=a),persistent:""},{default:i(()=>[t(S,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:i(()=>[t(U,{onSubmit:y,onReset:q},{default:i(()=>[t(x,{class:"row flex justify-between"},{default:i(()=>[n("div",X,[n("div",Z,B(e._id.length>0?"\u7DE8\u8F2F\u8CBC\u6587":"\u65B0\u589E\u8CBC\u6587"),1)]),D((h(),N(r,{dense:"",flat:"",icon:"close"},{default:i(()=>[t(T,null,{default:i(()=>[F("Close")]),_:1})]),_:1})),[[j]])]),_:1}),t(I,{class:"column q-gutter-md"},{default:i(()=>{var a;return[n("div",H,[t(g,{square:"",filled:"",modelValue:e.title,"onUpdate:modelValue":s[2]||(s[2]=o=>e.title=o),label:"\u6587\u7AE0\u6A19\u984C",rules:[u.required]},null,8,["modelValue","rules"])]),n("div",J,[t(g,{square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":s[3]||(s[3]=o=>e.description=o),type:"textarea",label:"\u6587\u7AE0\u5167\u5BB9",rules:[u.required]},null,8,["modelValue","rules"])]),n("div",K,[t(A,{modelValue:e.sell,"onUpdate:modelValue":s[4]||(s[4]=o=>e.sell=o),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),n("div",L,[n("div",M,[t($,{src:(a=d[e.idx])==null?void 0:a.image,style:{height:"100px"}},null,8,["src"]),t(R,{filled:"",modelValue:e.image,"onUpdate:modelValue":s[5]||(s[5]=o=>e.image=o),label:"\u8ACB\u4E0A\u50B3\u5716\u7247",style:{"max-height":"50px"},rules:[u.required]},{append:i(()=>[t(f,{name:"close",onClick:V})]),_:1},8,["modelValue","rules"])])])]}),_:1}),t(x,{align:"right"},{default:i(()=>[t(r,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),t(r,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{ne as default};
