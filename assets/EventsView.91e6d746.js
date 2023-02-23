import{O as _,r as q,a_ as p,aV as m,j as w,k as P,l as d,d as s,G as c,P as r,a7 as h,R as u,Q as x,Z as Q,a6 as V,a5 as I,U as R,b0 as U,a2 as F,a0 as O,Y as j,a$ as A,a8 as G,a9 as M}from"./index.4558efae.js";import{Q as f}from"./QTd.c061c32b.js";import{Q as N,a as W}from"./QTable.e59e66c7.js";import{a as Y}from"./QCheckbox.5f11a70c.js";import{Q as Z}from"./QFile.a8d9ddd5.js";import"./QMenu.de50b6ed.js";import"./QChip.9e8fbad4.js";import"./QItemLabel.c39185f1.js";import"./format.2a3572e1.js";const z={id:"admin-events"},H=d("h3",{class:"text-center"},"\u6D3B\u52D5\u7BA1\u7406",-1),J={class:"q-px-xl row"},K={class:"col-12"},L={class:"q-px-xl q-mt-md"},X=["src"],ee={class:"div q-pa-md row",align:"left"},le={class:"text-center"},te={class:"col-12"},ae={class:"col-6"},se={class:"col-6"},oe={class:"col-12"},re={class:"col-12"},de={class:"col-12"},ie={class:"col-12"},ne={class:"col-2"},ue={class:"col-2"},ce={class:"col-2"},me={class:"col-5"},pe={class:"row"},xe={__name:"EventsView",setup(fe){const C=["\u9AD4\u9A57","\u6587\u7AE0\u5206\u4EAB","\u7DDA\u4E0A\u8AB2\u7A0B","\u5BE6\u9AD4\u8AB2\u7A0B","\u5176\u4ED6"],n={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"},price(l){return l>=0||"\u50F9\u683C\u932F\u8AA4"},daysfrom:l=>{if(!l)return"Required";const t=new Date().toISOString().split("T")[0];return l>=t||"Date must be greater than or equal to today"},daysto:l=>l?e.daysfrom?new Date(l)>=new Date(e.daysfrom)||"\u6D3B\u52D5\u7D50\u675F\u65E5\u671F\u5FC5\u9808\u5927\u65BC\u958B\u59CB\u65E5\u671F":"\u6D3B\u52D5\u958B\u59CB\u65E5\u671F\u5FC5\u9808\u5148\u8F38\u5165":"\u6B64\u6B04\u4F4D\u5FC5\u9808\u586B\u5BEB"},k=()=>{e.image=void 0},i=_([]),g=q(""),y=_([]),e=_({_id:"",title:"",price:0,daysfrom:"",daysto:"",description:"",pplNum:"",lecturer:"",lecturerInfo:"",image:void 0,sell:!1,category:"",valid:!1,loading:!1,dialog:!1,idx:-1}),v=l=>{l===-1?(e._id="",e.title="",e.price=0,e.daysfrom="",e.daysto="",e.description="",e.pplNum="",e.lecturer="",e.lecturerInfo="",e.image=void 0,e.sell=!1,e.category="",e.valid=!1,e.loading=!1,e.idx=-1):(e._id=i[l]._id,e.title=i[l].title,e.price=i[l].price,e.daysfrom=i[l].daysfrom,e.daysto=i[l].daysto,e.description=i[l].description,e.pplNum=i[l].pplNum,e.lecturer=i[l].lecturer,e.lecturerInfo=i[l].lecturerInfo,e.image=void 0,e.sell=i[l].sell,e.category=i[l].category,e.valid=!1,e.loading=!1,e.idx=l),e.dialog=!0},b=q(!1),D=async l=>{var t,o;b.value=!0;try{const{data:a}=await p.get("/events/"+l);y.length=0,y.push(...a.result.participant)}catch(a){console.log(a),m.fire({icon:"error",title:"\u5931\u6557",text:((o=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}},S=[{name:"title",required:!0,label:"\u540D\u7A31",align:"left",field:l=>l.title},{name:"daysfrom",required:!0,label:"\u958B\u59CB\u65E5\u671F",align:"left",field:l=>l.daysfrom},{name:"daysto",required:!0,label:"\u7D50\u675F\u65E5\u671F",align:"left",field:l=>l.daysto},{name:"lecturer",required:!0,label:"\u8B1B\u8005",align:"left",field:l=>l.lecturer},{name:"pplNum",required:!0,label:"\u4EBA\u6578\u4E0A\u9650",align:"left",field:l=>l.pplNum},{name:"price",required:!0,label:"\u8CBB\u7528",align:"left",field:l=>l.price,format:l=>`${l}`,sortable:!0},{name:"image",required:!0,label:"\u5716\u7247",align:"left",field:l=>l.image},{name:"sell",required:!0,label:"\u72C0\u614B",align:"left",field:l=>l.sell},{name:"edit",label:"\u7DE8\u8F2F",align:"left"}],$=[{name:"account",required:!0,label:"\u5E33\u865F",align:"left",field:l=>l.account},{name:"email",required:!0,label:"\u4FE1\u7BB1",align:"left",field:l=>l.email,format:l=>`${l}`,sortable:!0},{name:"phone",required:!0,label:"\u806F\u7D61\u96FB\u8A71",align:"left",field:l=>l.phone}],B=()=>{e.title=null,e.price=null,e.daysfrom=null,e.daysto=null,e.description=null,e.pplNum=null,e.lecturer=null,e.lecturerInfo=null,e.image=void 0,e.sell=!1,e.category=null},T=async()=>{var t,o;e.loading=!0;const l=new FormData;l.append("title",e.title),l.append("price",e.price),l.append("daysfrom",e.daysfrom),l.append("daysto",e.daysto),l.append("description",e.description),l.append("pplNum",e.pplNum),l.append("lecturer",e.lecturer),l.append("lecturerInfo",e.lecturerInfo),l.append("image",e.image),console.log(e.images),l.append("sell",e.sell),l.append("category",e.category);try{if(e._id.length===0){const{data:a}=await p.post("/events",l);i.push(a.result),m.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6D3B\u52D5\u6210\u529F"}),console.log(i)}else{const{data:a}=await p.patch("/events/"+e._id,l);i[e.idx]=a.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6D3B\u52D5\u6210\u529F"})}e.dialog=!1}catch(a){m.fire({icon:"error",title:"\u5931\u6557",text:((o=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,t;try{const{data:o}=await p.get("/events");i.push(...o.result)}catch(o){console.log(o),m.fire({icon:"error",title:"\u5931\u6557",text:((t=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,t)=>(w(),P("div",z,[H,d("div",J,[d("div",K,[s(c,{onClick:t[0]||(t[0]=o=>v(-1)),color:"primary",label:"\u65B0\u589E\u6D3B\u52D5"})])]),d("div",L,[s(N,{align:"center",title:"\u6D3B\u52D5\u8CC7\u8A0A",columns:S,rows:i,"row-key":"_id",filter:g.value},{"top-right":r(()=>[s(u,{borderless:"",dense:"",debounce:"300",modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=o=>g.value=o),placeholder:"Search"},{append:r(()=>[s(x,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-title":r(o=>[s(f,null,{default:r(()=>[s(c,{class:"lessWord",onClick:a=>D(o.row._id)},{default:r(()=>[Q(V(o.row.title),1)]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-description":r(o=>[s(f,null,{default:r(()=>[d("p",null,V(o.row.description),1)]),_:2},1024)]),"body-cell-image":r(o=>[s(f,null,{default:r(()=>[d("img",{src:o.row.image,style:{height:"100px"}},null,8,X)]),_:2},1024)]),"body-cell-edit":r(o=>[s(f,{class:"q-pa-md q-gutter-sm"},{default:r(()=>[s(c,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:a=>v(i.findIndex(E=>E._id===o.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),s(h,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":t[14]||(t[14]=o=>e.dialog=o),persistent:""},{default:r(()=>[s(I,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:r(()=>[s(R,{onSubmit:T,onReset:B},{default:r(()=>[s(U,{class:"row flex justify-between"},{default:r(()=>[d("div",ee,[d("div",le,V(e._id.length>0?"\u7DE8\u8F2F\u6D3B\u52D5":"\u65B0\u589E\u6D3B\u52D5"),1)]),F((w(),O(c,{dense:"",flat:"",icon:"close"},{default:r(()=>[s(j,null,{default:r(()=>[Q("Close")]),_:1})]),_:1})),[[M]])]),_:1}),s(A,{class:"column q-gutter-md"},{default:r(()=>{var o;return[d("div",te,[s(u,{square:"",filled:"",modelValue:e.title,"onUpdate:modelValue":t[2]||(t[2]=a=>e.title=a),label:"\u6D3B\u52D5\u540D\u7A31",rules:[n.required]},null,8,["modelValue","rules"])]),d("div",ae,[s(u,{square:"",filled:"",modelValue:e.price,"onUpdate:modelValue":t[3]||(t[3]=a=>e.price=a),modelModifiers:{number:!0},type:"number",prefix:"$",label:"\u6D3B\u52D5\u8CBB\u7528",rules:[n.price]},null,8,["modelValue","rules"])]),d("div",se,[s(Y,{modelValue:e.sell,"onUpdate:modelValue":t[4]||(t[4]=a=>e.sell=a),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),d("div",oe,[s(u,{class:"daysfrom",square:"",filled:"",modelValue:e.daysfrom,"onUpdate:modelValue":[t[5]||(t[5]=a=>e.daysfrom=a),t[6]||(t[6]=a=>e.daysto="")],type:"date",label:"\u6D3B\u52D5\u958B\u59CB\u65E5\u671F",rules:[n.required,n.daysfrom]},null,8,["modelValue","rules"])]),d("div",re,[s(u,{class:"daysfrom",square:"",filled:"",modelValue:e.daysto,"onUpdate:modelValue":t[7]||(t[7]=a=>e.daysto=a),type:"date",label:"\u6D3B\u52D5\u7D50\u675F\u65E5\u671F",rules:[n.required,n.daysto],disable:e.daysfrom.length===0},null,8,["modelValue","rules","disable"])]),d("div",de,[s(u,{class:"daysto",square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":t[8]||(t[8]=a=>e.description=a),type:"textarea",label:"\u6D3B\u52D5\u8AAA\u660E",rules:[n.required]},null,8,["modelValue","rules"])]),d("div",ie,[s(W,{filled:"",modelValue:e.category,"onUpdate:modelValue":t[9]||(t[9]=a=>e.category=a),options:C,label:"\u6D3B\u52D5\u5206\u985E",rules:[n.required]},null,8,["modelValue","rules"])]),d("div",ne,[s(u,{square:"",filled:"",modelValue:e.pplNum,"onUpdate:modelValue":t[10]||(t[10]=a=>e.pplNum=a),type:"number",label:"\u4EBA\u6578\u4E0A\u9650",rules:[n.required]},null,8,["modelValue","rules"])]),d("div",ue,[s(u,{square:"",filled:"",modelValue:e.lecturer,"onUpdate:modelValue":t[11]||(t[11]=a=>e.lecturer=a),label:"\u8B1B\u5E2B\u59D3\u540D"},null,8,["modelValue"])]),d("div",ce,[s(u,{disable:e.lecturer.length===0,square:"",filled:"",modelValue:e.lecturerInfo,"onUpdate:modelValue":t[12]||(t[12]=a=>e.lecturerInfo=a),label:"\u8B1B\u5E2B\u7C21\u4ECB"},null,8,["disable","modelValue"])]),d("div",me,[d("div",pe,[s(G,{src:(o=i[e.idx])==null?void 0:o.image,style:{height:"100px"}},null,8,["src"]),s(Z,{filled:"",modelValue:e.image,"onUpdate:modelValue":t[13]||(t[13]=a=>e.image=a),label:"\u8ACB\u4E0A\u50B3\u5716\u7247",style:{"max-height":"50px"}},{append:r(()=>[s(x,{name:"close",onClick:k})]),_:1},8,["modelValue"])])])]}),_:1}),s(U,{align:"right"},{default:r(()=>[s(c,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),s(c,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(h,{align:"center",modelValue:b.value,"onUpdate:modelValue":t[15]||(t[15]=o=>b.value=o)},{default:r(()=>[s(I,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:r(()=>[s(N,{columns:$,rows:y},null,8,["rows"])]),_:1})]),_:1},8,["modelValue"])])]))}};export{xe as default};
