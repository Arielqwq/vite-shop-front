import{b0 as $,U as I,V as N,r as c,W as A,c as x,b1 as C,aY as v,j as V,k as L,l as r,a3 as q,d as a,X as o,ab as m,a4 as Q,G as i,ac as P,Y as w,Q as j,aa as E,Z as F,b2 as G,a7 as O,a5 as W,a2 as X,b3 as Z,ae as z}from"./index.a71905f2.js";import{Q as u}from"./QTd.79ad081c.js";import{Q as H}from"./QTable.aa4b05b2.js";import{a as J}from"./QCheckbox.b8e22bce.js";import"./index.b6d502fd.js";import"./QMenu.e6deb13b.js";import"./QChip.effc23a0.js";import"./QItemLabel.7adbd025.js";import"./format.2a3572e1.js";const K={id:"cart"},ee={class:"row"},te={class:"col-12"},le={class:"text-center"},ae={class:"div q-px-xl q-ma-md row"},oe={class:"col-12"},re=["src"],se={class:"flex"},ne={class:"col-12"},ie={class:"flex column q-pa-md"},ue=r("h6",{class:"q-pa-none q-ma-none"},"\u70BA\u78BA\u8A8D\u60A8\u5DF2\u662F\u6210\u5E74\u4EBA\uFF0C",-1),de=r("h6",{class:"q-pa-none q-ma-none"},"\u8ACB\u8F38\u5165\u60A8\u771F\u5BE6\u7684\u51FA\u751F\u5E74\u6708\u65E5\u53CA\u59D3\u540D\u3002",-1),ce=r("p",{class:"q-mt-md"},"\u8ACB\u8F38\u5165\u59D3\u540D",-1),me={align:"center"},xe={__name:"CartView",setup(pe){$();const U=I(),T=N(),{editCart:B,checkout:D,editUser:S}=T,b=c(""),h=c(!1),p=c(!1),_=c(""),f=c(""),s=A([]),d={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},maxLength(e){return e.length<=20||"\u6700\u591A\u8F38\u516520\u500B\u5B57"},countyYears(e){const l=new Date(e).getTime(),t=new Date().getTime(),n=1e3*60*60*24*365,g=Math.abs(t-l);return Math.trunc(g/n)>=18},requiredCheckbox(e){return e===!0||"\u8ACB\u78BA\u8A8D\u60A8\u5DF2\u662F\u6210\u5E74\u4EBA"}},Y=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:e=>e.p_id.name,sortable:!0},{name:"image",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"left",field:e=>e.p_id.image,sortable:!0},{name:"price",required:!0,label:"\u5546\u54C1\u50F9\u683C",align:"left",field:e=>e.p_id.price,sortable:!0},{name:"quantity",required:!0,label:"\u5546\u54C1\u6578\u91CF",align:"left",field:e=>e.quantity,sortable:!0},{name:"happy",required:!0,label:"\u5C0F\u8A08",align:"left",field:e=>e.quantity*e.p_id.price,sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"left"}],y=async(e,l,t)=>{const n=s.findIndex(g=>g._id===e);console.log(n),await B({_id:s[n].p_id._id,quantity:l,text:t}),s[n].quantity+=l,s[n].quantity<=0&&s.splice(n,1)},k=async e=>{try{const{data:l}=await C.get("/users/me");if(!l.result.birth||!l.result.username)await S({username:_.value,birth:f.value});else if(f.value!==l.result.birth||_.value!==l.result.username){v.fire({icon:"error",title:"\u5931\u6557",text:"\u8CC7\u6599\u932F\u8AA4"});return}p.value=!1,await D(),console.log("2"),U.push("/Mypage/MypageOrders")}catch(l){console.log(l),v.fire({icon:"error",title:"\u5931\u6557",text:"\u7D50\u5E33\u5931\u6557"})}},R=x(()=>s.reduce((e,l)=>e+l.p_id.price*l.quantity,0)),M=x(()=>s.length>0&&!s.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await C.get("/users/cart");s.push(...e.result),console.log(s)}catch{v.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557"})}})(),(e,l)=>(V(),L("div",K,[r("div",ee,[r("div",te,[r("h4",le,[q("\u8CFC\u7269\u8ECA"),r("div",ae,[r("div",oe,[a(H,{columns:Y,rows:s,"row-key":"p_id",filter:b.value},{"top-right":o(()=>[a(w,{borderless:"",dense:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=t=>b.value=t),placeholder:"Search"},{append:o(()=>[a(j,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-name":o(t=>[a(u,null,{default:o(()=>[r("p",null,m(t.row.p_id.name),1)]),_:2},1024)]),"body-cell-image":o(t=>[a(u,null,{default:o(()=>[r("img",{src:t.row.p_id.image,style:{height:"100px"}},null,8,re)]),_:2},1024)]),"body-cell-price":o(t=>[a(u,null,{default:o(()=>[r("p",null,m(t.row.p_id.price),1)]),_:2},1024)]),"body-cell-quantity":o(t=>[a(u,null,{default:o(()=>[r("div",se,[a(i,{color:"primary",onClick:n=>y(t.row._id,-1,"\u4FEE\u6539\u6210\u529F"),label:"-"},null,8,["onClick"]),r("p",null,"\xA0"+m(t.row.quantity)+"\xA0",1),a(i,{color:"primary",onClick:n=>y(t.row._id,1,"\u4FEE\u6539\u6210\u529F"),label:"+"},null,8,["onClick"])])]),_:2},1024)]),"body-cell-happy":o(t=>[a(u,null,{default:o(()=>[r("p",null,m(t.value),1)]),_:2},1024)]),"body-cell-edit":o(t=>[a(u,null,{default:o(()=>[a(i,{round:"",color:"red",onClick:n=>y(t.row._id,t.row.quantity*-1,"\u522A\u9664\u5546\u54C1"),icon:"fa-solid fa-trash-can"},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"])])]),r("div",ne,[r("p",null,"\u7E3D\u91D1\u984D "+m(Q(R)),1),a(i,{color:"green",disabled:!Q(M),onClick:l[1]||(l[1]=t=>p.value=!0),label:"\u7D50\u5E33"},null,8,["disabled"])])])])]),a(P,{modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=t=>p.value=t),persistent:""},{default:o(()=>[a(E,{class:"bg-accent text-white",style:{width:"500px"}},{default:o(()=>[a(F,{onSubmit:k,onReset:e.onReset},{default:o(()=>[a(G,{align:"right"},{default:o(()=>[O((V(),W(i,{dense:"",flat:"",icon:"close"},{default:o(()=>[a(X,null,{default:o(()=>[q("Close")]),_:1})]),_:1})),[[z]])]),_:1}),a(Z,{class:"bg-white text-accent",align:"center"},{default:o(()=>[r("div",ie,[ue,de,ce,a(w,{filled:"",modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=t=>_.value=t),label:"\u8ACB\u8F38\u5165\u60A8\u7684\u771F\u5BE6\u59D3\u540D",rules:[d.required,d.maxLength]},null,8,["modelValue","rules"]),a(w,{type:"date",modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=t=>f.value=t),label:"\u8ACB\u8F38\u5165\u60A8\u7684\u51FA\u751F\u5E74\u6708\u65E5",rules:[d.required,d.countyYears]},null,8,["modelValue","rules"]),a(J,{class:"checkbox",modelValue:h.value,"onUpdate:modelValue":l[4]||(l[4]=t=>h.value=t),rules:[d.requiredCheckbox]},{default:o(()=>[q("\u6211\u771F\u7684\u662F\u6210\u5E74\u4EBA!!")]),_:1},8,["modelValue","rules"]),r("div",me,[a(i,{type:"reset",color:"red",flat:"",label:"reset"}),a(i,{flat:"",type:"submit",label:"submit",disabled:!h.value,onClick:k},null,8,["disabled"])])])]),_:1})]),_:1},8,["onReset"])]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
