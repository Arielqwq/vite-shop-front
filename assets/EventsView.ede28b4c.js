import{M as _,r as q,aM as p,aH as c,j as w,k as P,l as i,d as o,C as m,N as r,Q as h,$ as x,a1 as V,a0 as Q,aP as I,X as F,V as M,aO as O,a2 as R}from"./index.b07f1375.js";import{Q as u,a as j,C as A}from"./QForm.99b7a4eb.js";import{Q as C,a as f,b as H}from"./QTable.b6e7133f.js";import{Q as W}from"./QTooltip.32b83805.js";import{Q as X}from"./QCheckbox.31a96f03.js";import{Q as z}from"./QFile.1449d6ac.js";import{Q as N}from"./use-key-composition.5dc461eb.js";import"./QSeparator.af8f8cbe.js";import"./QMenu.653cdcb3.js";import"./position-engine.26ffd163.js";import"./use-prevent-scroll.a4d0c4ea.js";import"./QChip.c8027def.js";import"./QItemLabel.d316db36.js";import"./format.2a3572e1.js";const G={id:"admin-events"},J=i("h3",{class:"text-center"},"\u6D3B\u52D5\u7BA1\u7406",-1),K={class:"q-px-xl row"},L={class:"col-12"},Y={class:"q-px-xl q-mt-md"},Z=["src"],ee={class:"div q-pa-md row",align:"left"},le={class:"text-center"},te={class:"col-12"},ae={class:"col-6"},oe={class:"col-6"},se={class:"col-12"},re={class:"col-12"},ie={class:"col-12"},de={class:"col-12"},ne={class:"col-2"},ue={class:"col-2"},me={class:"col-2"},ce={class:"col-5"},pe={class:"row"},Ue={__name:"EventsView",setup(fe){const U=["\u9AD4\u9A57","\u6587\u7AE0\u5206\u4EAB","\u7DDA\u4E0A\u8AB2\u7A0B","\u5BE6\u9AD4\u8AB2\u7A0B","\u5176\u4ED6"],n={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"},price(l){return l>=0||"\u50F9\u683C\u932F\u8AA4"},daysfrom:l=>{if(!l)return"Required";const t=new Date().toISOString().split("T")[0];return l>=t||"Date must be greater than or equal to today"},daysto:l=>l?e.daysfrom?new Date(l)>=new Date(e.daysfrom)||"\u6D3B\u52D5\u7D50\u675F\u65E5\u671F\u5FC5\u9808\u5927\u65BC\u958B\u59CB\u65E5\u671F":"\u6D3B\u52D5\u958B\u59CB\u65E5\u671F\u5FC5\u9808\u5148\u8F38\u5165":"\u6B64\u6B04\u4F4D\u5FC5\u9808\u586B\u5BEB"},k=()=>{e.image=void 0},d=_([]),g=q(""),y=_([]),e=_({_id:"",title:"",price:0,daysfrom:"",daysto:"",description:"",pplNum:"",lecturer:"",lecturerInfo:"",image:void 0,sell:!1,category:"",valid:!1,loading:!1,dialog:!1,idx:-1}),v=l=>{l===-1?(e._id="",e.title="",e.price=0,e.daysfrom="",e.daysto="",e.description="",e.pplNum="",e.lecturer="",e.lecturerInfo="",e.image=void 0,e.sell=!1,e.category="",e.valid=!1,e.loading=!1,e.idx=-1):(e._id=d[l]._id,e.title=d[l].title,e.price=d[l].price,e.daysfrom=d[l].daysfrom,e.daysto=d[l].daysto,e.description=d[l].description,e.pplNum=d[l].pplNum,e.lecturer=d[l].lecturer,e.lecturerInfo=d[l].lecturerInfo,e.image=void 0,e.sell=d[l].sell,e.category=d[l].category,e.valid=!1,e.loading=!1,e.idx=l),e.dialog=!0},b=q(!1),D=async l=>{var t,s;b.value=!0;try{const{data:a}=await p.get("/events/"+l);y.length=0,y.push(...a.result.participant)}catch(a){console.log(a),c.fire({icon:"error",title:"\u5931\u6557",text:((s=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}},S=[{name:"title",required:!0,label:"\u540D\u7A31",align:"left",field:l=>l.title},{name:"daysfrom",required:!0,label:"\u958B\u59CB\u65E5\u671F",align:"left",field:l=>l.daysfrom},{name:"daysto",required:!0,label:"\u7D50\u675F\u65E5\u671F",align:"left",field:l=>l.daysto},{name:"lecturer",required:!0,label:"\u8B1B\u8005",align:"left",field:l=>l.lecturer},{name:"pplNum",required:!0,label:"\u4EBA\u6578\u4E0A\u9650",align:"left",field:l=>l.pplNum},{name:"price",required:!0,label:"\u8CBB\u7528",align:"left",field:l=>l.price,format:l=>`${l}`,sortable:!0},{name:"image",required:!0,label:"\u5716\u7247",align:"left",field:l=>l.image},{name:"sell",required:!0,label:"\u72C0\u614B",align:"left",field:l=>l.sell},{name:"edit",label:"\u7DE8\u8F2F",align:"left"}],$=[{name:"account",required:!0,label:"\u5E33\u865F",align:"left",field:l=>l.account},{name:"email",required:!0,label:"\u4FE1\u7BB1",align:"left",field:l=>l.email,format:l=>`${l}`,sortable:!0},{name:"phone",required:!0,label:"\u806F\u7D61\u96FB\u8A71",align:"left",field:l=>l.phone}],B=()=>{e.title=null,e.price=null,e.daysfrom=null,e.daysto=null,e.description=null,e.pplNum=null,e.lecturer=null,e.lecturerInfo=null,e.image=void 0,e.sell=!1,e.category=null},T=async()=>{var t,s;e.loading=!0;const l=new FormData;l.append("title",e.title),l.append("price",e.price),l.append("daysfrom",e.daysfrom),l.append("daysto",e.daysto),l.append("description",e.description),l.append("pplNum",e.pplNum),l.append("lecturer",e.lecturer),l.append("lecturerInfo",e.lecturerInfo),l.append("image",e.image),console.log(e.images),l.append("sell",e.sell),l.append("category",e.category);try{if(e._id.length===0){const{data:a}=await p.post("/events",l);d.push(a.result),c.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6D3B\u52D5\u6210\u529F"}),console.log(d)}else{const{data:a}=await p.patch("/events/"+e._id,l);d[e.idx]=a.result,c.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6D3B\u52D5\u6210\u529F"})}e.dialog=!1}catch(a){c.fire({icon:"error",title:"\u5931\u6557",text:((s=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,t;try{const{data:s}=await p.get("/events");d.push(...s.result)}catch(s){console.log(s),c.fire({icon:"error",title:"\u5931\u6557",text:((t=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,t)=>(w(),P("div",G,[J,i("div",K,[i("div",L,[o(m,{onClick:t[0]||(t[0]=s=>v(-1)),color:"primary",label:"\u65B0\u589E\u6D3B\u52D5"})])]),i("div",Y,[o(C,{align:"center",title:"\u6D3B\u52D5\u8CC7\u8A0A",columns:S,rows:d,"row-key":"_id",filter:g.value},{"top-right":r(()=>[o(u,{borderless:"",dense:"",debounce:"300",modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=s=>g.value=s),placeholder:"Search"},{append:r(()=>[o(h,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-title":r(s=>[o(f,null,{default:r(()=>[o(m,{class:"lessWord",onClick:a=>D(s.row._id)},{default:r(()=>[x(V(s.row.title),1)]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-description":r(s=>[o(f,null,{default:r(()=>[i("p",null,V(s.row.description),1)]),_:2},1024)]),"body-cell-image":r(s=>[o(f,null,{default:r(()=>[i("img",{src:s.row.image,style:{height:"100px"}},null,8,Z)]),_:2},1024)]),"body-cell-edit":r(s=>[o(f,{class:"q-pa-md q-gutter-sm"},{default:r(()=>[o(m,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:a=>v(d.findIndex(E=>E._id===s.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),o(N,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":t[14]||(t[14]=s=>e.dialog=s),persistent:""},{default:r(()=>[o(Q,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:r(()=>[o(j,{onSubmit:T,onReset:B},{default:r(()=>[o(I,{class:"row flex justify-between"},{default:r(()=>[i("div",ee,[i("div",le,V(e._id.length>0?"\u7DE8\u8F2F\u6D3B\u52D5":"\u65B0\u589E\u6D3B\u52D5"),1)]),F((w(),M(m,{dense:"",flat:"",icon:"close"},{default:r(()=>[o(W,null,{default:r(()=>[x("Close")]),_:1})]),_:1})),[[A]])]),_:1}),o(O,{class:"column q-gutter-md"},{default:r(()=>{var s;return[i("div",te,[o(u,{square:"",filled:"",modelValue:e.title,"onUpdate:modelValue":t[2]||(t[2]=a=>e.title=a),label:"\u6D3B\u52D5\u540D\u7A31",rules:[n.required]},null,8,["modelValue","rules"])]),i("div",ae,[o(u,{square:"",filled:"",modelValue:e.price,"onUpdate:modelValue":t[3]||(t[3]=a=>e.price=a),modelModifiers:{number:!0},type:"number",prefix:"$",label:"\u6D3B\u52D5\u8CBB\u7528",rules:[n.price]},null,8,["modelValue","rules"])]),i("div",oe,[o(X,{modelValue:e.sell,"onUpdate:modelValue":t[4]||(t[4]=a=>e.sell=a),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),i("div",se,[o(u,{class:"daysfrom",square:"",filled:"",modelValue:e.daysfrom,"onUpdate:modelValue":[t[5]||(t[5]=a=>e.daysfrom=a),t[6]||(t[6]=a=>e.daysto="")],type:"date",label:"\u6D3B\u52D5\u958B\u59CB\u65E5\u671F",rules:[n.required,n.daysfrom]},null,8,["modelValue","rules"])]),i("div",re,[o(u,{class:"daysfrom",square:"",filled:"",modelValue:e.daysto,"onUpdate:modelValue":t[7]||(t[7]=a=>e.daysto=a),type:"date",label:"\u6D3B\u52D5\u7D50\u675F\u65E5\u671F",rules:[n.required,n.daysto],disable:e.daysfrom.length===0},null,8,["modelValue","rules","disable"])]),i("div",ie,[o(u,{class:"daysto",square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":t[8]||(t[8]=a=>e.description=a),type:"textarea",label:"\u6D3B\u52D5\u8AAA\u660E",rules:[n.required]},null,8,["modelValue","rules"])]),i("div",de,[o(H,{filled:"",modelValue:e.category,"onUpdate:modelValue":t[9]||(t[9]=a=>e.category=a),options:U,label:"\u6D3B\u52D5\u5206\u985E",rules:[n.required]},null,8,["modelValue","rules"])]),i("div",ne,[o(u,{square:"",filled:"",modelValue:e.pplNum,"onUpdate:modelValue":t[10]||(t[10]=a=>e.pplNum=a),type:"number",label:"\u4EBA\u6578\u4E0A\u9650",rules:[n.required]},null,8,["modelValue","rules"])]),i("div",ue,[o(u,{square:"",filled:"",modelValue:e.lecturer,"onUpdate:modelValue":t[11]||(t[11]=a=>e.lecturer=a),label:"\u8B1B\u5E2B\u59D3\u540D"},null,8,["modelValue"])]),i("div",me,[o(u,{disable:e.lecturer.length===0,square:"",filled:"",modelValue:e.lecturerInfo,"onUpdate:modelValue":t[12]||(t[12]=a=>e.lecturerInfo=a),label:"\u8B1B\u5E2B\u7C21\u4ECB"},null,8,["disable","modelValue"])]),i("div",ce,[i("div",pe,[o(R,{src:(s=d[e.idx])==null?void 0:s.image,style:{height:"100px"}},null,8,["src"]),o(z,{filled:"",modelValue:e.image,"onUpdate:modelValue":t[13]||(t[13]=a=>e.image=a),label:"\u8ACB\u4E0A\u50B3\u5716\u7247",style:{"max-height":"50px"}},{append:r(()=>[o(h,{name:"close",onClick:k})]),_:1},8,["modelValue"])])])]}),_:1}),o(I,{align:"right"},{default:r(()=>[o(m,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),o(m,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(N,{align:"center",modelValue:b.value,"onUpdate:modelValue":t[15]||(t[15]=s=>b.value=s)},{default:r(()=>[o(Q,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:r(()=>[o(C,{columns:$,rows:y},null,8,["rows"])]),_:1})]),_:1},8,["modelValue"])])]))}};export{Ue as default};