import{r as m,b0 as Q,U as P,V as S,a0 as j,W as y,aW as x,b1 as w,aY as n,j as p,k as g,l as o,d as l,ad as L,ab as _,X as i,Z as $,F as A,aZ as B,ac as D,Y as U,G as f,a3 as Y,a_ as F,a$ as I,aa as N,b2 as R,b3 as E,a7 as M,a4 as O,ae as T}from"./index.ff209b5a.js";const W={id:"productView"},Z={class:"showProduct row flex justify-center"},z={class:"product-img col-12 col-lg-3 flex justify-center"},G={class:"product-content col-10 col-lg-5"},K={class:"q-my-lg"},X={class:"q-my-lg"},H={class:"pre q-my-lg"},J={class:"recomProduct row flex justify-center"},ee=o("div",{class:"col-6"},[o("div",{class:"text-h5"},"YOU MAY ALSO LIKE")],-1),te={class:"col-12 row justify-center",style:{margin:"50px"}},se=o("h5",{class:"text-white text-weight-bold"},"\u8CE3\u5B8C\u310C\u9912",-1),oe={__name:"ProductView",setup(ae){m(null);const c=Q(),h=P(),b=S(),{editCart:q,isLogin:k}=j(b),u=m(0),r=m(!1),v={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},number(e){return e>0||"\u6578\u91CF\u932F\u8AA4"}},t=y({_id:"",name:"",price:0,description:"",image:"",images:[],sell:!0,category:""}),d=y([]),C=()=>{q({_id:t._id,quantity:u.value,text:"\u52A0\u5165\u8CFC\u7269\u8ECA"})},V=async()=>{var e,a;try{const{data:s}=await w.post("/users/love",{p_id:c.params.id,love:!r.value});r.value=!r.value,r.value===!0?n.fire({title:"\u52A0\u5165\u6536\u85CF",color:"pink"}):n.fire({title:"\u79FB\u9664\u6536\u85CF",color:"pink"})}catch(s){n.fire({message:"\u5931\u6557",caption:((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4",color:"pink"})}};return(async()=>{try{const{data:e}=await x.get("/products/"+c.params.id);t._id=e.result._id,t.name=e.result.name,t.price=e.result.price,t.description=e.result.description,t.image=e.result.image,t.images=e.result.images,t.sell=e.result.sell,t.category=e.result.category,document.title="\u8CFC\u7269\u7DB2 | "+t.name,console.log(e.result.images);const{data:a}=await x.get("/products/"+c.params.id+"/recom");if(d.push(...a.result),k.value){const{data:s}=await w.get("/users/love/"+c.params.id);r.value=s.result}}catch(e){console.log(e),n.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),h.go(-1)}})(),(e,a)=>(p(),g("div",W,[o("div",Z,[o("div",z,[l(L,{src:t.image,style:{width:"200px"}},null,8,["src"])]),o("div",G,[o("h3",K,_(t.name),1),o("h4",X,"$ "+_(t.price),1),o("p",H,_(t.description),1),l($,{class:"row q-mt-md flex items-center",onSubmit:C},{default:i(()=>[l(U,{class:"col-5 col-lg-2 q-pr-md",filled:"",modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s),modelModifiers:{number:!0},type:"number",label:"\u6578\u91CF",rules:[v.required,v.number],style:{height:"55px"}},null,8,["modelValue","rules"]),l(f,{class:"col-5 col-lg-3 q-pr-md",type:"submit",color:"primary",style:{height:"55px"}},{default:i(()=>[Y("\u52A0\u5165\u8CFC\u7269\u8ECA")]),_:1}),l(f,{class:"col-2 col-lg-1 q-pa-md",flat:"",round:"",color:"red",size:"xl",icon:r.value?"fa-solid fa-heart":"fa-regular fa-heart",onClick:a[1]||(a[1]=s=>V({_id:t._id}))},null,8,["icon"])]),_:1})])]),o("div",J,[ee,o("div",te,[(p(!0),g(A,null,B(d,s=>(p(),g("div",{key:d._id},[l(I,F({style:{width:"250px"}},s),null,16)]))),128))])]),l(D,{"v-model":!t.sell,persistent:""},{default:i(()=>[l(N,{class:"bg-accent text-white",style:{width:"300px"}},{default:i(()=>[l(R,null,{default:i(()=>[se]),_:1}),l(E,{class:"bg-white text-accent",align:"right"},{default:i(()=>[M(l(f,{onClick:a[2]||(a[2]=s=>O(h).go(-1)),flat:"",label:"back"},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["v-model"])]))}};export{oe as default};
