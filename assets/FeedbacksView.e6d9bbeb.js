import{Q as s}from"./QTable.f107e911.js";import{O as l,aZ as o,aT as i,j as c,k as n,l as a,a3 as d,d as m}from"./index.4fff0d8a.js";import"./QSeparator.42cdbfd1.js";import"./QMenu.8f4f2d0b.js";import"./QChip.18fe9cb0.js";import"./QItemLabel.0013ecfc.js";import"./format.2a3572e1.js";import"./QCheckbox.46551e99.js";const p={id:"myfeedback"},u={class:"text-center"},f={class:"q-ma-md q-px-xl row"},_={class:"col-12"},B={__name:"FeedbacksView",setup(b){const t=l([]),r=[{name:"title",required:!0,label:"\u540D\u7A31",align:"left",field:e=>e.title},{name:"description",required:!0,label:"\u6211\u7684\u8A0A\u606F",align:"left",field:e=>e.description},{name:"reply",required:!0,label:"\u7BA1\u7406\u54E1\u56DE\u8986",align:"left",field:e=>e.reply},{name:"status",required:!0,label:"\u72C0\u614B",align:"left",field:e=>e.status}];return(async()=>{try{const{data:e}=await o.get("/feedbacks");t.push(...e.result),console.log(t)}catch(e){console.log(e),i.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u56DE\u61C9\u5931\u6557"})}})(),(e,h)=>(c(),n("div",p,[a("h3",u,[d("\u6211\u7684\u56DE\u61C9"),a("div",f,[a("div",_,[m(s,{columns:r,rows:t,"row-key":"p_id",filter:e.filter},null,8,["rows","filter"])])])])]))}};export{B as default};
