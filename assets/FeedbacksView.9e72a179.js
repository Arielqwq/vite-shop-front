import{O as f,a_ as m,aU as _,j as p,k as Q,l as s,Z as b,d as a,P as i,a7 as D,Q as k,G as d,a5 as V,U as C,b0 as g,a6 as c,a2 as S,a0 as B,Y as U,a$ as I,R as T,a9 as N}from"./index.8f362b44.js";import{Q as h}from"./QTd.ea92bf92.js";import{Q as R}from"./QTable.df5a9107.js";import{Q as j}from"./QCheckbox.52a39076.js";import"./QSeparator.552cfc68.js";import"./QMenu.94a06207.js";import"./QChip.be639dc9.js";import"./QItemLabel.61608594.js";import"./format.2a3572e1.js";const z={id:"feedbackview"},A={class:"text-center"},F={class:"div q-px-xl row"},L={class:"col-12"},P={class:"div q-pa-md row",align:"left"},$={class:"text-center"},E={class:"col-12 q-pa-md"},G=s("div",{class:"text-h5"},"\u4E3B\u65E8",-1),O={class:"text-h6"},Y={class:"col-12 q-pa-md"},Z=s("div",{class:"text-h5"},"\u5167\u6587",-1),H={class:"text-h6"},J={class:"col-12"},K={class:"col-2"},M=s("div",{class:"text-h6"},"\u8ACB\u52FE\u9078\u78BA\u5B9A\u56DE\u61C9",-1),de={__name:"FeedbacksView",setup(W){const o=f([]),v={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"}},y=[{name:"username",required:!0,label:"\u4F7F\u7528\u8005\u540D\u7A31",align:"left",field:e=>e.u_id.username,sortable:!0},{name:"title",required:!0,label:"\u56DE\u61C9\u4E3B\u65E8",align:"left",field:e=>e.title,sortable:!0},{name:"description",required:!0,label:"\u4F86\u4FE1\u5167\u5BB9",align:"left",field:e=>e.description,sortable:!0},{name:"createDate",required:!0,label:"\u4F86\u4FE1\u6642\u9593",align:"left",field:e=>new Date(e.createDate).toLocaleDateString(),sortable:!0},{name:" reply",required:!0,label:"\u7BA1\u7406\u54E1\u56DE\u61C9",align:"left",field:e=>e.reply,sortable:!0},{name:"replyDate",required:!0,label:"\u56DE\u8986\u6642\u9593",align:"left",field:e=>new Date(e.replyDate).toLocaleDateString(),sortable:!0},{name:"status",required:!0,label:"\u72C0\u614B",align:"left",field:e=>e.status,sortable:!0},{name:"edit",label:"\u7DE8\u8F2F",align:"left"}],t=f({_id:"",u_id:"",title:"",description:"",createDate:"",replyDate:"",status:"",dialog:!1,reply:"",idx:-1}),w=()=>{t.reply=null},q=e=>{console.log(e),e!==-1&&(t.u_id=o[e].u_id,t._id=o[e]._id,t.description=o[e].description,t.title=o[e].title,o[e].status===1?t.status=!0:t.status=!1,t.reply=o[e].reply,t.idx=e,t.loading=!1),t.dialog=!0,console.log(t)},x=async()=>{var e,r;try{const{data:l}=await m.patch("/feedbacks/"+t._id,t),u=o.findIndex(n=>n._id===t._id);o[u]=l.result,t.dialog=!1}catch(l){console.log(l),_.fire({icon:"error",title:"\u5931\u6557",text:((r=(e=l==null?void 0:l.response)==null?void 0:e.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4"})}};return(async()=>{try{const{data:e}=await m.get("/feedbacks/all");o.push(...e.result),console.log(o)}catch(e){console.log(e),_.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u6240\u6709\u56DE\u61C9\u5931\u6557"})}})(),(e,r)=>(p(),Q("div",z,[s("h3",A,[b("\u56DE\u61C9\u7BA1\u7406"),s("div",F,[s("div",L,[a(R,{columns:y,rows:o},{"body-cell-status":i(l=>[a(h,null,{default:i(()=>[a(k,{size:"md",name:l.row.status==0?"fa-regular fa-envelope":"fa-solid fa-envelope-circle-check"},null,8,["name"])]),_:2},1024)]),"body-cell-edit":i(l=>[a(h,{class:"q-pa-md q-gutter-sm"},{default:i(()=>[a(d,{size:"md",round:"",color:"primary","text-color":"white",icon:"edit",onClick:u=>q(o.findIndex(n=>n._id===l.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows"])])]),a(D,{align:"center",modelValue:t.dialog,"onUpdate:modelValue":r[2]||(r[2]=l=>t.dialog=l),persistent:""},{default:i(()=>[a(V,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:i(()=>[a(C,{onSubmit:x,onReset:w},{default:i(()=>[a(g,{class:"row flex justify-between"},{default:i(()=>[s("div",P,[s("div",$,c(t._id.length>0?"\u7BA1\u7406\u8005\u56DE\u61C9":"\u65B0\u589E\u5546\u54C1"),1)]),S((p(),B(d,{dense:"",flat:"",icon:"close"},{default:i(()=>[a(U,null,{default:i(()=>[b("Close")]),_:1})]),_:1})),[[N]])]),_:1}),a(I,{class:"column q-gutter-md",align:"left"},{default:i(()=>[s("div",E,[G,s("div",O,c(t.title),1)]),s("div",Y,[Z,s("div",H,c(t.description),1)]),s("div",J,[a(T,{square:"",filled:"",modelValue:t.reply,"onUpdate:modelValue":r[0]||(r[0]=l=>t.reply=l),label:"\u7BA1\u7406\u8005\u56DE\u61C9",rules:[v.required]},null,8,["modelValue","rules"])]),s("div",K,[M,a(j,{modelValue:t.status,"onUpdate:modelValue":r[1]||(r[1]=l=>t.status=l)},null,8,["modelValue"])])]),_:1}),a(g,{align:"right"},{default:i(()=>[a(d,{disabled:t.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),a(d,{disabled:!t.status,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{de as default};
