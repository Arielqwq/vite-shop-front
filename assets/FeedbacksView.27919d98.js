import{Q as r}from"./QTable.2a62f5a6.js";import{O as l,a_ as o,aV as i,j as c,k as d,l as t,Z as n,d as m}from"./index.0a97dc81.js";import"./QCheckbox.e28a2c55.js";import"./QMenu.a38420b1.js";import"./QChip.3bd2b0cd.js";import"./QItemLabel.953f27a3.js";import"./format.2a3572e1.js";const p={id:"myfeedback"},_={class:"row"},u={class:"q-pa-xl col-12"},f={class:"text-center"},h={class:"q-ma-md q-px-xl row"},b={class:"col-12"},N={__name:"FeedbacksView",setup(k){const s=l([]),a=[{name:"title",required:!0,label:"\u540D\u7A31",align:"left",field:e=>e.title},{name:"description",required:!0,label:"\u6211\u7684\u8A0A\u606F",align:"left",field:e=>e.description},{name:"reply",required:!0,label:"\u7BA1\u7406\u54E1\u56DE\u8986",align:"left",field:e=>e.reply},{name:"status",required:!0,label:"\u72C0\u614B",align:"left",field:e=>e.status}];return(async()=>{try{const{data:e}=await o.get("/feedbacks");s.push(...e.result),console.log(s)}catch(e){console.log(e),i.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u56DE\u61C9\u5931\u6557"})}})(),(e,w)=>(c(),d("div",p,[t("div",_,[t("div",u,[t("h3",f,[n("\u6211\u7684\u56DE\u61C9"),t("div",h,[t("div",b,[m(r,{columns:a,rows:s,"row-key":"p_id",filter:e.filter},null,8,["rows","filter"])])])])])])]))}};export{N as default};
