import{b0 as r,U as d,W as l,b1 as n,aY as _,j as m,k as u,l as t,d as p,ad as g,ab as o}from"./index.89e27a3f.js";const h={id:"front-news",style:{margin:"50px 0"}},x={class:"flex justify-center row"},v={class:"col-10"},w={class:"col-10"},f={class:"text-h3 q-my-xl q-mx-md"},y={class:"col-9 q-ma-md"},q={class:"text-h5 q-ma-md pre"},B={__name:"NewsPageView",setup(b){const c=r();d();const s=l({_id:"",title:"",description:"",image:""});return(async()=>{var a,i;try{const{data:e}=await n.get("/news/"+c.params.id);s._id=e.result._id,s.title=e.result.title,s.description=e.result.description,s.image=e.result.image,console.log(e.result)}catch(e){_.fire({icon:"error",title:"\u5931\u6557",text:((i=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:i.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,i)=>(m(),u("div",h,[t("div",x,[t("div",v,[p(g,{src:s.image},null,8,["src"])]),t("div",w,[t("div",f,o(s.title),1)]),t("div",y,[t("div",q,o(s.description),1)])])]))}};export{B as default};