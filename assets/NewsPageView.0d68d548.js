import{aY as r,M as l,O as n,aZ as d,aT as _,j as m,k as u,l as t,d as p,a7 as g,a5 as o}from"./index.4fff0d8a.js";const h={id:"front-news",style:{margin:"50px 0"}},x={class:"flex justify-center row"},v={class:"col-10"},w={class:"col-10"},f={class:"text-h3 q-my-xl q-mx-md"},y={class:"col-9 q-ma-md"},q={class:"text-h5 q-ma-md pre"},N={__name:"NewsPageView",setup(k){const c=r();l();const s=n({_id:"",title:"",description:"",image:""});return(async()=>{var a,i;try{const{data:e}=await d.get("/news/"+c.params.id);s._id=e.result._id,s.title=e.result.title,s.description=e.result.description,s.image=e.result.image,console.log(e.result)}catch(e){_.fire({icon:"error",title:"\u5931\u6557",text:((i=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:i.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,i)=>(m(),u("div",h,[t("div",x,[t("div",v,[p(g,{src:s.image},null,8,["src"])]),t("div",w,[t("div",f,o(s.title),1)]),t("div",y,[t("div",q,o(s.description),1)])])]))}};export{N as default};
