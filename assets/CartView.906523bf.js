import{b0 as M,V as z,W as I,r as c,X as N,c as q,b1 as w,aY as x,j as k,k as j,l as r,d as l,Y as s,ae as m,a7 as C,G as i,af as A,Z as v,Q as L,ad as P,$ as E,b2 as F,aa as G,a8 as O,a5 as W,a6 as V,b3 as X,ah as Z}from"./index.7fa1104e.js";import{Q as H,a as d}from"./QTable.95d23f70.js";import{a as J}from"./QCheckbox.8da67322.js";import"./index.0d5d5c21.js";import"./QMenu.057b14ae.js";import"./QChip.5ce032e8.js";import"./QItemLabel.e200e953.js";import"./format.2a3572e1.js";const K={class:"q-pa-md",id:"cart"},ee=r("h4",{class:"text-center"},"\u8CFC\u7269\u6E05\u55AE",-1),te={class:"q-px-xl q-mt-md"},ae=["src"],le={class:"flex justify-center items-center"},se={class:"text-h7 q-ma-sm"},re={class:"q-px-xl q-mt-xl"},oe={class:"col-12",align:"center"},ne={class:"text-h5 q-ma-md"},ie={class:"flex column q-pa-xl"},de=r("h6",{class:"q-pa-none q-ma-none"},"\u70BA\u78BA\u8A8D\u60A8\u5DF2\u662F\u6210\u5E74\u4EBA\uFF0C",-1),ue=r("h6",{class:"q-pa-none q-ma-none"},"\u8ACB\u8F38\u5165\u60A8\u771F\u5BE6\u7684\u51FA\u751F\u5E74\u6708\u65E5\u53CA\u59D3\u540D\u3002",-1),ce=r("p",{class:"q-mt-md"},"\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u59D3\u540D",-1),me=r("p",{class:"q-mt-md"},"\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u51FA\u751F\u5E74\u6708\u65E5",-1),pe={align:"center"},ke={__name:"CartView",setup(_e){M();const Q=z(),U=I(),{editCart:T,checkout:B,editUser:D}=U,f=c(""),h=c(!1),p=c(!1),_=c(""),b=c(""),o=N([]),u={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},maxLength(e){return e.length<=20||"\u6700\u591A\u8F38\u516520\u500B\u5B57"},countyYears(e){const a=new Date(e).getTime(),t=new Date().getTime(),n=1e3*60*60*24*365,g=Math.abs(t-a);return Math.trunc(g/n)>=18},requiredCheckbox(e){return e===!0||"\u8ACB\u78BA\u8A8D\u60A8\u5DF2\u662F\u6210\u5E74\u4EBA"}},S=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"center",field:e=>e.p_id.name,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"center",field:e=>e.p_id.image,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"center",field:e=>e.p_id.price,sortable:!0},{name:"quantity",required:!0,label:"\u6578\u91CF",align:"center",field:e=>e.quantity,sortable:!0},{name:"happy",required:!0,label:"\u5C0F\u8A08",align:"center",field:e=>e.quantity*e.p_id.price,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"center"}],y=async(e,a,t)=>{const n=o.findIndex(g=>g._id===e);console.log(n),await T({_id:o[n].p_id._id,quantity:a,text:t}),o[n].quantity+=a,o[n].quantity<=0&&o.splice(n,1)},Y=async e=>{try{const{data:a}=await w.get("/users/me");if(!a.result.birth||!a.result.username)await D({username:_.value,birth:b.value},"\u7D50\u5E33\u6210\u529F");else if(b.value!==a.result.birth||_.value!==a.result.username){x.fire({icon:"error",title:"\u5931\u6557",text:"\u8CC7\u6599\u932F\u8AA4"});return}p.value=!1,await B(),console.log("2"),Q.push("/Mypage/MypageOrders")}catch(a){console.log(a),x.fire({icon:"error",title:"\u5931\u6557",text:"\u7D50\u5E33\u5931\u6557"})}},R=q(()=>o.reduce((e,a)=>e+a.p_id.price*a.quantity,0)),$=q(()=>o.length>0&&!o.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await w.get("/users/cart");o.push(...e.result),console.log(o)}catch{x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,a)=>(k(),j("div",K,[ee,r("div",te,[l(H,{columns:S,rows:o,"row-key":"p_id",filter:f.value},{"top-right":s(()=>[l(v,{borderless:"",dense:"",debounce:"300",modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=t=>f.value=t),placeholder:"Search"},{append:s(()=>[l(L,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-name":s(t=>[l(d,null,{default:s(()=>[r("p",null,m(t.row.p_id.name),1)]),_:2},1024)]),"body-cell-image":s(t=>[l(d,{class:"text-center"},{default:s(()=>[r("img",{src:t.row.p_id.image,style:{height:"100px"}},null,8,ae)]),_:2},1024)]),"body-cell-price":s(t=>[l(d,{class:"text-center"},{default:s(()=>[r("p",null,m(t.row.p_id.price),1)]),_:2},1024)]),"body-cell-quantity":s(t=>[l(d,{class:"text-center"},{default:s(()=>[r("div",le,[l(i,{style:{border:"1px solid #999"},flat:"",size:"md",onClick:n=>y(t.row._id,-1,"\u4FEE\u6539\u6210\u529F"),label:"-"},null,8,["onClick"]),r("div",se,"\xA0"+m(t.row.quantity)+"\xA0",1),l(i,{style:{border:"1px solid #999"},flat:"",size:"md",onClick:n=>y(t.row._id,1,"\u4FEE\u6539\u6210\u529F"),label:"+"},null,8,["onClick"])])]),_:2},1024)]),"body-cell-happy":s(t=>[l(d,{class:"text-center"},{default:s(()=>[r("p",null,m(t.value),1)]),_:2},1024)]),"body-cell-edit":s(t=>[l(d,{class:"text-center"},{default:s(()=>[l(i,{round:"",color:"red",onClick:n=>y(t.row._id,t.row.quantity*-1,"\u522A\u9664\u5546\u54C1"),icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])]),r("div",re,[r("div",oe,[r("div",ne,"\u7E3D\u91D1\u984D "+m(C(R)),1),l(i,{size:"md",color:"green",disabled:!C($),onClick:a[1]||(a[1]=t=>p.value=!0),label:"\u7D50\u5E33"},null,8,["disabled"])])]),l(A,{modelValue:p.value,"onUpdate:modelValue":a[5]||(a[5]=t=>p.value=t),persistent:""},{default:s(()=>[l(P,{class:"bg-accent text-white",style:{width:"500px"}},{default:s(()=>[l(E,{onSubmit:Y,onReset:e.onReset},{default:s(()=>[l(F,{align:"right"},{default:s(()=>[G((k(),O(i,{dense:"",flat:"",icon:"close"},{default:s(()=>[l(W,null,{default:s(()=>[V("Close")]),_:1})]),_:1})),[[Z]])]),_:1}),l(X,{class:"bg-white text-primary",align:"center"},{default:s(()=>[r("div",ie,[de,ue,ce,l(v,{filled:"",modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=t=>_.value=t),label:"\u8ACB\u8F38\u5165\u60A8\u7684\u771F\u5BE6\u59D3\u540D",rules:[u.required,u.maxLength]},null,8,["modelValue","rules"]),me,l(v,{type:"date",modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=t=>b.value=t),rules:[u.required,u.countyYears]},null,8,["modelValue","rules"]),l(J,{class:"checkbox",modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=t=>h.value=t),rules:[u.requiredCheckbox]},{default:s(()=>[V("\u6211\u5DF2\u662F\u6210\u5E74\u4EBA\u3002")]),_:1},8,["modelValue","rules"]),r("div",pe,[l(i,{type:"reset",color:"red",flat:"",label:"reset"}),l(i,{flat:"",type:"submit",label:"submit",disabled:!h.value},null,8,["disabled"])])])]),_:1})]),_:1},8,["onReset"])]),_:1})]),_:1},8,["modelValue"])]))}};export{ke as default};
