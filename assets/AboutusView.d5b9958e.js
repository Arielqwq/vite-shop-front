import{X as r,aX as l,aY as d,j as u,k as p,l as s,ae as n}from"./index.e70abd56.js";const _={id:"aboutus"},g={class:"q-ma-lg"},h={class:"text-center"},m={align:"center"},f=["src"],x={__name:"AboutusView",props:{_id:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""}},setup(y){const e=r([]);return(async()=>{var a,i;try{const{data:t}=await l.get("/aboutus");e.push(...t.result),console.log(e)}catch(t){d.fire({icon:"error",title:"\u5931\u6557",text:((i=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:i.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,i)=>{var t,o,c;return u(),p("div",_,[s("div",g,[s("h5",h,n((t=e[0])==null?void 0:t.title),1),s("h6",null,n((o=e[0])==null?void 0:o.description),1),s("div",m,[s("img",{src:(c=e[0])==null?void 0:c.image,style:{height:"100px"}},null,8,f)])])])}}};export{x as default};
