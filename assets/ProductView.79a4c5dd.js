import{r as m,b0 as P,U as k,V as S,a0 as j,W as y,aW as x,b1 as w,aY as d,j as p,k as _,l as a,d as l,ad as B,ab as g,X as i,Z as L,F as $,aZ as A,ac as D,Y as R,G as f,a3 as U,a_ as Y,a$ as F,aa as I,b2 as N,b3 as z,a7 as E,a4 as M,ae as O}from"./index.b4f43733.js";const T={id:"productView"},W={class:"showProduct row flex justify-center"},Z={class:"product-img col-12 col-md-3 flex justify-center"},G={class:"product-content col-10 col-md-5"},K={class:"q-my-lg"},X={class:"q-my-lg"},H={class:"pre q-my-lg"},J=a("div",{class:"text-h5"},"Qty\uFF1A",-1),ee={class:"recomProduct row flex justify-center"},te=a("div",{class:"col-6"},[a("div",{class:"text-h5"},"YOU MAY ALSO LIKE")],-1),se={class:"col-12 row justify-center",style:{margin:"50px"}},ae=a("h5",{class:"text-white text-weight-bold"},"\u8CE3\u5B8C\u310C\u9912",-1),re={__name:"ProductView",setup(oe){m(null);const c=P(),h=k(),b=S(),{editCart:q,isLogin:C}=j(b),n=m(0),r=m(!1),v={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},number(e){return e>0||"\u6578\u91CF\u932F\u8AA4"}},t=y({_id:"",name:"",price:0,description:"",image:"",images:[],sell:!0,category:""}),u=y([]),Q=()=>{q({_id:t._id,quantity:n.value,text:"\u52A0\u5165\u8CFC\u7269\u8ECA"})},V=async()=>{var e,o;try{const{data:s}=await w.post("/users/love",{p_id:c.params.id,love:!r.value});r.value=!r.value,r.value===!0?d.fire({title:"\u52A0\u5165\u6536\u85CF",color:"#630606"}):d.fire({title:"\u79FB\u9664\u6536\u85CF",color:"#630606"})}catch(s){d.fire({message:"\u5931\u6557",caption:((o=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4",color:"red"})}};return(async()=>{try{const{data:e}=await x.get("/products/"+c.params.id);t._id=e.result._id,t.name=e.result.name,t.price=e.result.price,t.description=e.result.description,t.image=e.result.image,t.images=e.result.images,t.sell=e.result.sell,t.category=e.result.category,document.title="\u8CFC\u7269\u7DB2 | "+t.name,console.log(e.result.images);const{data:o}=await x.get("/products/"+c.params.id+"/recom");if(u.push(...o.result),C.value){const{data:s}=await w.get("/users/love/"+c.params.id);r.value=s.result}}catch(e){console.log(e),d.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),h.go(-1)}})(),(e,o)=>(p(),_("div",T,[a("div",W,[a("div",Z,[l(B,{src:t.image,style:{width:"200px","max-height":"650px"}},null,8,["src"])]),a("div",G,[a("h3",K,g(t.name),1),a("h4",X,"$ "+g(t.price),1),a("h6",H,g(t.description),1),l(L,{class:"row q-mt-md flex items-center",onSubmit:Q},{default:i(()=>[J,l(R,{class:"col-5 col-lg-2 q-pr-md",filled:"",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),modelModifiers:{number:!0},type:"number",rules:[v.required,v.number],style:{height:"55px","font-size":"20px"}},null,8,["modelValue","rules"]),l(f,{class:"addCartBtn col-5 col-lg-3 q-pr-md",type:"submit",color:"primary",style:{height:"55px"}},{default:i(()=>[U("\u52A0\u5165\u8CFC\u7269\u8ECA")]),_:1}),l(f,{class:"col-2 col-lg-1 q-pa-md",flat:"",round:"",color:"red",size:"xl",icon:r.value?"fa-solid fa-heart":"fa-regular fa-heart",onClick:o[1]||(o[1]=s=>V({_id:t._id}))},null,8,["icon"])]),_:1})])]),a("div",ee,[te,a("div",se,[(p(!0),_($,null,A(u,s=>(p(),_("div",{key:u._id},[l(F,Y({class:"cardinRecomProduct",style:{width:"250px"}},s),null,16)]))),128))])]),l(D,{"v-model":!t.sell,persistent:""},{default:i(()=>[l(I,{class:"bg-accent text-white",style:{width:"300px"}},{default:i(()=>[l(N,null,{default:i(()=>[ae]),_:1}),l(z,{class:"bg-white text-accent",align:"right"},{default:i(()=>[E(l(f,{onClick:o[2]||(o[2]=s=>M(h).go(-1)),flat:"",label:"back"},null,512),[[O]])]),_:1})]),_:1})]),_:1},8,["v-model"])]))}};export{re as default};
