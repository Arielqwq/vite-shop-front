import{W as p,b1 as _,aY as f,j as b,k as Q,l as o,d as l,X as s,ac as k,Y as g,Q as h,G as d,a3 as y,ab as n,aa as C,Z as S,b3 as w,a7 as B,a5 as N,a2 as I,b2 as T,ae as U}from"./index.22e8eb80.js";import{Q as L,a as u}from"./QTable.36188780.js";import{a as j}from"./QCheckbox.6b3b0961.js";import"./QMenu.2bcba540.js";import"./QChip.fb3c087c.js";import"./QItemLabel.582a0e90.js";import"./format.2a3572e1.js";const z={class:"q-pa-md",id:"feedbackview"},A=o("h3",{class:"text-center"},"\u56DE\u61C9\u7BA1\u7406",-1),F={class:"q-px-xl q-mt-md"},R={class:"div q-pa-md row",align:"left"},Y={class:"text-center"},E={class:"col-12 q-pa-md"},G=o("div",{class:"text-h5"},"\u4E3B\u65E8\uFF1A",-1),P={class:"text-h6"},W={class:"col-12 q-pa-md"},X=o("div",{class:"text-h5"},"\u5167\u6587\uFF1A",-1),Z={class:"text-h6"},$={class:"col-12 q-pa-md"},H=o("div",{class:"text-h5"},"\u7BA1\u7406\u8005\u56DE\u61C9\uFF1A",-1),J={class:"col-2 q-pa-md"},K=o("div",{class:"text-h6"},"\u8ACB\u52FE\u9078\u78BA\u5B9A\u56DE\u61C9",-1),ie={__name:"FeedbacksView",setup(M){const i=p([]),v={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"}},q=[{name:"username",required:!0,label:"\u4F7F\u7528\u8005\u540D\u7A31",align:"center",field:e=>e.u_id.username,sortable:!0},{name:"title",required:!0,label:"\u56DE\u61C9\u4E3B\u65E8",align:"center",field:e=>e.title,sortable:!0},{name:"description",required:!0,label:"\u4F86\u4FE1\u5167\u5BB9",align:"center",field:e=>e.description,sortable:!0},{name:"createDate",required:!0,label:"\u4F86\u4FE1\u6642\u9593",align:"center",field:e=>new Date(e.createDate).toLocaleDateString(),sortable:!0},{name:" reply",required:!0,label:"\u7BA1\u7406\u54E1\u56DE\u61C9",align:"center",field:e=>e.reply,sortable:!0},{name:"replyDate",required:!0,label:"\u56DE\u8986\u6642\u9593",align:"center",field:e=>new Date(e.replyDate).toLocaleDateString(),sortable:!0},{name:"status",required:!0,label:"\u72C0\u614B",align:"center",field:e=>e.status,sortable:!0},{name:"edit",label:"\u7DE8\u8F2F",align:"center"}],t=p({_id:"",u_id:"",title:"",description:"",createDate:"",replyDate:"",status:"",dialog:!1,reply:"",idx:-1}),D=()=>{t.reply=null},x=e=>{console.log(e),e!==-1&&(t.u_id=i[e].u_id,t._id=i[e]._id,t.description=i[e].description,t.title=i[e].title,i[e].status===1?t.status=!0:t.status=!1,t.reply=i[e].reply,t.idx=e,t.loading=!1),t.dialog=!0,console.log(t)},V=async()=>{var e,r;try{const{data:a}=await _.patch("/feedbacks/"+t._id,t),m=i.findIndex(c=>c._id===t._id);i[m]=a.result,t.dialog=!1}catch(a){console.log(a),f.fire({icon:"error",title:"\u5931\u6557",text:((r=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{try{const{data:e}=await _.get("/feedbacks/all");i.push(...e.result),console.log(i)}catch(e){console.log(e),f.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6240\u6709\u56DE\u61C9\u5931\u6557"})}})(),(e,r)=>(b(),Q("div",z,[A,o("div",F,[l(L,{columns:q,rows:i},{"top-right":s(()=>[l(g,{outlined:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":r[0]||(r[0]=a=>e.filter=a),placeholder:"Search"},{append:s(()=>[l(h,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-status":s(a=>[l(u,{class:"text-center"},{default:s(()=>[l(h,{size:"md",name:a.row.status==0?"fa-regular fa-envelope":"fa-solid fa-envelope-circle-check"},null,8,["name"])]),_:2},1024)]),"body-cell-edit":s(a=>[l(u,{class:"q-pa-md q-gutter-sm"},{default:s(()=>[l(d,{size:"md",round:"",color:"primary","text-color":"white",icon:"edit",onClick:m=>x(i.findIndex(c=>c._id===a.row._id))},null,8,["onClick"])]),_:2},1024)]),"body-cell-replyDate":s(a=>[l(u,{class:"text-center"},{default:s(()=>[y(n(isNaN(new Date(a.row.replyDate))?"\u672A\u56DE\u8986":new Date(a.row.replyDate).toLocaleDateString()),1)]),_:2},1024)]),_:1},8,["rows"]),l(k,{align:"center",modelValue:t.dialog,"onUpdate:modelValue":r[3]||(r[3]=a=>t.dialog=a),persistent:""},{default:s(()=>[l(C,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:s(()=>[l(S,{onSubmit:V,onReset:D},{default:s(()=>[l(w,{class:"row flex justify-between"},{default:s(()=>[o("div",R,[o("div",Y,n(t._id.length>0?"\u7BA1\u7406\u8005\u56DE\u61C9":"\u65B0\u589E\u5546\u54C1"),1)]),B((b(),N(d,{dense:"",flat:"",icon:"close"},{default:s(()=>[l(I,null,{default:s(()=>[y("Close")]),_:1})]),_:1})),[[U]])]),_:1}),l(T,{class:"column q-gutter-md",align:"left"},{default:s(()=>[o("div",E,[G,o("div",P,n(t.title),1)]),o("div",W,[X,o("div",Z,n(t.description),1)]),o("div",$,[H,l(g,{square:"",filled:"",modelValue:t.reply,"onUpdate:modelValue":r[1]||(r[1]=a=>t.reply=a),rules:[v.required]},null,8,["modelValue","rules"])]),o("div",J,[K,l(j,{modelValue:t.status,"onUpdate:modelValue":r[2]||(r[2]=a=>t.status=a)},null,8,["modelValue"])])]),_:1}),l(w,{align:"right"},{default:s(()=>[l(d,{disabled:t.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),l(d,{disabled:!t.status,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{ie as default};
