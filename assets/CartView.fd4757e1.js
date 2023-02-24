import{aZ as Y,M as N,N as I,r as c,O as P,c as k,a_ as C,aV as v,j as x,k as A,l as o,d as a,P as r,a6 as m,$ as V,G as i,a7 as L,R as q,Q as O,a5 as Z,U as j,a$ as E,a2 as F,a0 as G,Y as z,Z as Q,b0 as H,a9 as J}from"./index.b5a0edbd.js";import{Q as u}from"./QTd.23d51b43.js";import{Q as K}from"./QTable.d1bb8e9f.js";import{a as W}from"./QCheckbox.1e281e25.js";import"./index.d8caebf8.js";import"./QMenu.158ee7e6.js";import"./QChip.95544fed.js";import"./QItemLabel.5cdebcd7.js";import"./format.2a3572e1.js";const X={class:"q-pa-md",id:"cart"},ee=o("h3",{class:"text-center"},"\u8CFC\u7269\u8ECA",-1),te={class:"row"},le={class:"col-10"},ae=["src"],re={class:"flex"},oe={class:"col-12"},se={class:"flex column q-pa-md"},ne=o("h6",{class:"q-pa-none q-ma-none"},"\u70BA\u78BA\u8A8D\u60A8\u5DF2\u662F\u6210\u5E74\u4EBA\uFF0C",-1),ie=o("h6",{class:"q-pa-none q-ma-none"},"\u8ACB\u8F38\u5165\u60A8\u771F\u5BE6\u7684\u51FA\u751F\u5E74\u6708\u65E5\u53CA\u59D3\u540D\u3002",-1),ue=o("p",{class:"q-mt-md"},"\u8ACB\u8F38\u5165\u59D3\u540D",-1),de={align:"center"},we={__name:"CartView",setup(ce){Y();const U=N(),T=I(),{editCart:B,checkout:D,editUser:R}=T,b=c(""),h=c(!1),p=c(!1),f=c(""),_=c(""),s=P([]),d={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},maxLength(e){return e.length<=20||"\u6700\u591A\u8F38\u516520\u500B\u5B57"},countyYears(e){const l=new Date(e).getTime(),t=new Date().getTime(),n=1e3*60*60*24*365,g=Math.abs(t-l);return Math.trunc(g/n)>=18},requiredCheckbox(e){return e===!0||"\u8ACB\u78BA\u8A8D\u60A8\u5DF2\u662F\u6210\u5E74\u4EBA"}},S=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:e=>e.p_id.name,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"left",field:e=>e.p_id.image,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"left",field:e=>e.p_id.price,sortable:!0},{name:"quantity",required:!0,label:"\u5546\u54C1\u6578\u91CF",align:"left",field:e=>e.quantity,sortable:!0},{name:"happy",required:!0,label:"\u5C0F\u8A08",align:"left",field:e=>e.quantity*e.p_id.price,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"left"}],y=async(e,l,t)=>{const n=s.findIndex(g=>g._id===e);console.log(n),await B({_id:s[n].p_id._id,quantity:l,text:t}),s[n].quantity+=l,s[n].quantity<=0&&s.splice(n,1)},w=async e=>{try{const{data:l}=await C.get("/users/me");if(!l.result.birth||!l.result.username)await R({username:f.value,birth:_.value});else if(_.value!==l.result.birth||f.value!==l.result.username){v.fire({icon:"error",title:"\u5931\u6557",text:"\u8CC7\u6599\u932F\u8AA4"});return}p.value=!1,await D(),console.log("2"),U.push("/Mypage/MypageOrders")}catch(l){console.log(l),v.fire({icon:"error",title:"\u5931\u6557",text:"\u7D50\u5E33\u5931\u6557"})}},$=k(()=>s.reduce((e,l)=>e+l.p_id.price*l.quantity,0)),M=k(()=>s.length>0&&!s.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await C.get("/users/cart");s.push(...e.result),console.log(s)}catch{v.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,l)=>(x(),A("div",X,[ee,o("div",te,[o("div",le,[a(K,{columns:S,rows:s,"row-key":"p_id",filter:b.value},{"top-right":r(()=>[a(q,{borderless:"",dense:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=t=>b.value=t),placeholder:"Search"},{append:r(()=>[a(O,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-name":r(t=>[a(u,null,{default:r(()=>[o("p",null,m(t.row.p_id.name),1)]),_:2},1024)]),"body-cell-image":r(t=>[a(u,null,{default:r(()=>[o("img",{src:t.row.p_id.image,style:{height:"100px"}},null,8,ae)]),_:2},1024)]),"body-cell-price":r(t=>[a(u,null,{default:r(()=>[o("p",null,m(t.row.p_id.price),1)]),_:2},1024)]),"body-cell-quantity":r(t=>[a(u,null,{default:r(()=>[o("div",re,[a(i,{color:"primary",onClick:n=>y(t.row._id,-1,"\u4FEE\u6539\u6210\u529F"),label:"-"},null,8,["onClick"]),o("p",null,"\xA0"+m(t.row.quantity)+"\xA0",1),a(i,{color:"primary",onClick:n=>y(t.row._id,1,"\u4FEE\u6539\u6210\u529F"),label:"+"},null,8,["onClick"])])]),_:2},1024)]),"body-cell-happy":r(t=>[a(u,null,{default:r(()=>[o("p",null,m(t.value),1)]),_:2},1024)]),"body-cell-edit":r(t=>[a(u,null,{default:r(()=>[a(i,{round:"",color:"red",onClick:n=>y(t.row._id,t.row.quantity*-1,"\u522A\u9664\u5546\u54C1"),icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])]),o("div",oe,[o("p",null,"\u7E3D\u91D1\u984D "+m(V($)),1),a(i,{color:"green",disabled:!V(M),onClick:l[1]||(l[1]=t=>p.value=!0),label:"\u7D50\u5E33"},null,8,["disabled"])])]),a(L,{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=t=>p.value=t),persistent:""},{default:r(()=>[a(Z,{class:"bg-accent text-white",style:{width:"500px"}},{default:r(()=>[a(j,{onSubmit:w,onReset:e.onReset},{default:r(()=>[a(E,{align:"right"},{default:r(()=>[F((x(),G(i,{dense:"",flat:"",icon:"close"},{default:r(()=>[a(z,null,{default:r(()=>[Q("Close")]),_:1})]),_:1})),[[J]])]),_:1}),a(H,{class:"bg-white text-accent",align:"center"},{default:r(()=>[o("div",se,[ne,ie,ue,a(q,{filled:"",modelValue:f.value,"onUpdate:modelValue":l[2]||(l[2]=t=>f.value=t),label:"\u8ACB\u8F38\u5165\u60A8\u7684\u771F\u5BE6\u59D3\u540D",rules:[d.required,d.maxLength]},null,8,["modelValue","rules"]),a(q,{type:"date",modelValue:_.value,"onUpdate:modelValue":l[3]||(l[3]=t=>_.value=t),label:"\u8ACB\u8F38\u5165\u60A8\u7684\u51FA\u751F\u5E74\u6708\u65E5",rules:[d.required,d.countyYears]},null,8,["modelValue","rules"]),a(W,{class:"checkbox",modelValue:h.value,"onUpdate:modelValue":l[4]||(l[4]=t=>h.value=t),rules:[d.requiredCheckbox]},{default:r(()=>[Q("\u6211\u771F\u7684\u662F\u6210\u5E74\u4EBA!!")]),_:1},8,["modelValue","rules"]),o("div",de,[a(i,{type:"reset",color:"red",flat:"",label:"reset"}),a(i,{flat:"",type:"submit",label:"submit",disabled:!h.value,onClick:w},null,8,["disabled"])])])]),_:1})]),_:1},8,["onReset"])]),_:1})]),_:1},8,["modelValue"])]))}};export{we as default};
