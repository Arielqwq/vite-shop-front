import{X as d,b1 as u,aY as p,j as m,k as f,l as n,d as a,Y as r,Z as b,Q as o,a6 as g,ae as D}from"./index.83f5cac3.js";import{Q as w,a as i}from"./QTable.956b817a.js";import"./QCheckbox.92ecac42.js";import"./QMenu.946ff6b9.js";import"./QChip.b44a70b6.js";import"./QItemLabel.927494fc.js";import"./format.2a3572e1.js";const y={class:"q-pa-md",id:"myfeedback"},_=n("h4",{class:"text-center"},"\u6211\u7684\u8A0A\u606F",-1),h={class:"q-px-xl q-mt-md"},B={__name:"FeedbacksView",setup(k){const l=d([]),c=[{name:"title",required:!0,label:"\u4E3B\u65E8",align:"center",field:e=>e.title,sortable:!0},{name:"description",required:!0,label:"\u6211\u7684\u8A0A\u606F",align:"center",field:e=>e.description,sortable:!0},{name:"createDate",required:!0,label:"\u5BC4\u4EF6\u6642\u9593",align:"center",field:e=>new Date(e.createDate).toLocaleDateString(),sortable:!0},{name:"reply",required:!0,label:"\u7BA1\u7406\u54E1\u56DE\u8986",align:"center",field:e=>e.reply,sortable:!0},{name:"replyDate",required:!0,label:"\u56DE\u4FE1\u6642\u9593",align:"center",field:e=>new Date(e.replyDate).toLocaleDateString(),sortable:!0},{name:"status",required:!0,label:"\u72C0\u614B",align:"center",field:e=>e.status,sortable:!0}];return(async()=>{try{const{data:e}=await u.get("/feedbacks");l.push(...e.result),console.log(l)}catch(e){console.log(e),p.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u56DE\u61C9\u5931\u6557"})}})(),(e,s)=>(m(),f("div",y,[_,n("div",h,[a(w,{columns:c,rows:l,"row-key":"p_id",filter:e.filter},{"top-right":r(()=>[a(b,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":s[0]||(s[0]=t=>e.filter=t),placeholder:"Search"},{append:r(()=>[a(o,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-status":r(t=>[a(i,{class:"text-center"},{default:r(()=>[a(o,{size:"md",name:t.row.status==0?"fa-regular fa-envelope":"fa-solid fa-envelope-circle-check"},null,8,["name"])]),_:2},1024)]),"body-cell-replyDate":r(t=>[a(i,{class:"text-center"},{default:r(()=>[g(D(isNaN(new Date(t.row.replyDate))?"\u672A\u56DE\u8986":new Date(t.row.replyDate).toLocaleDateString()),1)]),_:2},1024)]),_:1},8,["rows","filter"])])]))}};export{B as default};
