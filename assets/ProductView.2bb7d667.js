import{r as m,b0 as V,V as k,W as S,a1 as $,X as x,aW as w,b1 as b,aY as n,j as p,k as g,l as a,d as l,ae as j,ac as _,Y as i,$ as B,F as L,aZ as A,ad as D,Z as R,G as f,a_ as Y,a$ as F,ab as I,b2 as U,b3 as z,a8 as E,a5 as M,af as N}from"./index.f86514b6.js";const O={id:"productView"},W={class:"showProduct row flex justify-center"},Z={class:"product-img col-12 col-md-3 flex justify-center"},G={class:"product-content col-10 col-md-5"},K={class:"q-my-lg"},T={class:"q-my-lg"},X={class:"pre q-my-lg"},H=a("div",{class:"text-h5"},"Qty\uFF1A",-1),J={class:"recomProduct row flex justify-center"},ee=a("div",{class:"col-6"},[a("div",{class:"text-h5"},"YOU MAY ALSO LIKE")],-1),te={class:"col-12 row justify-center",style:{margin:"50px"}},se=a("h5",{class:"text-white text-weight-bold"},"\u8CE3\u5B8C\u310C\u9912",-1),le={__name:"ProductView",setup(ae){m(null);const c=V(),h=k(),v=S(),{editCart:q}=v,{isLogin:C}=$(v),d=m(0),r=m(!1),y={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},number(e){return e>0||"\u6578\u91CF\u932F\u8AA4"}},t=x({_id:"",name:"",price:0,description:"",image:"",images:[],sell:!0,category:""}),u=x([]),Q=()=>{q({_id:t._id,quantity:d.value,text:"\u52A0\u5165\u8CFC\u7269\u8ECA"})},P=async()=>{var e,o;try{const{data:s}=await b.post("/users/love",{p_id:c.params.id,love:!r.value});r.value=!r.value,r.value===!0?n.fire({title:"\u52A0\u5165\u6536\u85CF",color:"#630606"}):n.fire({title:"\u79FB\u9664\u6536\u85CF",color:"#630606"})}catch(s){n.fire({message:"\u5931\u6557",caption:((o=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4",color:"red"})}};return(async()=>{try{const{data:e}=await w.get("/products/"+c.params.id);t._id=e.result._id,t.name=e.result.name,t.price=e.result.price,t.description=e.result.description,t.image=e.result.image,t.images=e.result.images,t.sell=e.result.sell,t.category=e.result.category,document.title="\u8CFC\u7269\u7DB2 | "+t.name,console.log(e.result.images);const{data:o}=await w.get("/products/"+c.params.id+"/recom");if(u.push(...o.result),C.value){const{data:s}=await b.get("/users/love/"+c.params.id);r.value=s.result}}catch(e){console.log(e),n.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),h.go(-1)}})(),(e,o)=>(p(),g("div",O,[a("div",W,[a("div",Z,[l(j,{src:t.image,style:{width:"200px","max-height":"650px"}},null,8,["src"])]),a("div",G,[a("h3",K,_(t.name),1),a("h4",T,"$ "+_(t.price),1),a("h6",X,_(t.description),1),l(B,{class:"row q-mt-md flex items-center",onSubmit:Q},{default:i(()=>[H,l(R,{class:"col-5 col-lg-2 q-pr-md",filled:"",modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=s=>d.value=s),modelModifiers:{number:!0},type:"number",rules:[y.required,y.number],style:{height:"55px","font-size":"20px"}},null,8,["modelValue","rules"]),l(f,{class:"addCartBtn col-5 col-lg-3 q-pr-md",type:"submit",color:"primary",style:{height:"55px"},label:"\u52A0\u5165\u8CFC\u7269\u8ECA"}),l(f,{class:"col-2 col-lg-1 q-pa-md",flat:"",round:"",color:"red",size:"xl",icon:r.value?"fa-solid fa-heart":"fa-regular fa-heart",onClick:o[1]||(o[1]=s=>P({_id:t._id}))},null,8,["icon"])]),_:1})])]),a("div",J,[ee,a("div",te,[(p(!0),g(L,null,A(u,s=>(p(),g("div",{key:u._id},[l(F,Y({class:"cardinRecomProduct",style:{width:"250px"}},s),null,16)]))),128))])]),l(D,{"v-model":!t.sell,persistent:""},{default:i(()=>[l(I,{class:"bg-accent text-white",style:{width:"300px"}},{default:i(()=>[l(U,null,{default:i(()=>[se]),_:1}),l(z,{class:"bg-white text-accent",align:"right"},{default:i(()=>[E(l(f,{onClick:o[2]||(o[2]=s=>M(h).go(-1)),flat:"",label:"back"},null,512),[[N]])]),_:1})]),_:1})]),_:1},8,["v-model"])]))}};export{le as default};
