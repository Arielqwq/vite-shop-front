import{W as c,b1 as n,aY as d,j as u,k as m,l as i,d as a,X as r,Q as p,a3 as f,ab as _}from"./index.5f65fe0b.js";import{Q as b,a as s}from"./QTable.2e9b9ed2.js";import"./QCheckbox.99551527.js";import"./QMenu.ef9c7227.js";import"./QChip.00ec948c.js";import"./QItemLabel.cf8252b1.js";import"./format.2a3572e1.js";const D={class:"q-pa-md",id:"myfeedback"},g=i("h4",{class:"text-center"},"\u6211\u7684\u56DE\u61C9",-1),w={class:"q-px-xl q-mt-md"},V={__name:"FeedbacksView",setup(y){const l=c([]),o=[{name:"title",required:!0,label:"\u4E3B\u65E8",align:"center",field:e=>e.title},{name:"description",required:!0,label:"\u6211\u7684\u8A0A\u606F",align:"center",field:e=>e.description},{name:"createDate",required:!0,label:"\u5BC4\u4EF6\u6642\u9593",align:"center",field:e=>new Date(e.createDate).toLocaleDateString()},{name:"reply",required:!0,label:"\u7BA1\u7406\u54E1\u56DE\u8986",align:"center",field:e=>e.reply},{name:"replyDate",required:!0,label:"\u56DE\u4FE1\u6642\u9593",align:"center",field:e=>new Date(e.replyDate).toLocaleDateString()},{name:"status",required:!0,label:"\u72C0\u614B",align:"center",field:e=>e.status}];return(async()=>{try{const{data:e}=await n.get("/feedbacks");l.push(...e.result),console.log(l)}catch(e){console.log(e),d.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u56DE\u61C9\u5931\u6557"})}})(),(e,h)=>(u(),m("div",D,[g,i("div",w,[a(b,{columns:o,rows:l,"row-key":"p_id",filter:e.filter},{"body-cell-status":r(t=>[a(s,{class:"text-center"},{default:r(()=>[a(p,{size:"md",name:t.row.status==0?"fa-regular fa-envelope":"fa-solid fa-envelope-circle-check"},null,8,["name"])]),_:2},1024)]),"body-cell-replyDate":r(t=>[a(s,{class:"text-center"},{default:r(()=>[f(_(isNaN(new Date(t.row.replyDate))?"\u672A\u56DE\u8986":new Date(t.row.replyDate).toLocaleDateString()),1)]),_:2},1024)]),_:1},8,["rows","filter"])])]))}};export{V as default};