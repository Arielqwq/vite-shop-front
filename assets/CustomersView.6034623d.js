import{O as g,r as Q,aZ as f,aT as u,j as _,k as x,l as n,d as t,P as i,a6 as y,R as r,Q as C,G as c,a4 as k,U,a$ as b,a5 as S,a0 as B,Z as D,b2 as T,a3 as I,a_ as N,a8 as R}from"./index.c4f1aba5.js";import{Q as $}from"./QTd.3d36e5a5.js";import{Q as j}from"./QTable.45855663.js";import{Q as A}from"./QCheckbox.043bb7c3.js";import"./QSeparator.4837b822.js";import"./QMenu.07320fa4.js";import"./QChip.f5862b57.js";import"./QItemLabel.0547f592.js";import"./format.2a3572e1.js";const F={id:"customersview"},P=n("h3",{class:"text-center"},"\u6703\u54E1\u7BA1\u7406",-1),Z=n("div",{class:"div q-px-xl row"},null,-1),E={class:"div q-px-xl q-mt-md"},G={class:"div q-pa-md row",align:"left"},O={class:"text-center"},z={class:"col-12"},H={class:"col-12"},J={class:"col-12"},K={class:"col-12"},L={class:"col-2"},ie={__name:"CustomersView",setup(M){const o=g([]),m=Q(""),p={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"}},e=g({_id:"",account:"",password:"",email:0,name:"",phone:"",sell:"",loading:!1,dialog:!1,idx:-1}),w=l=>{l===-1?(e._id="",e.account="",e.password="",e.email="",e.name="",e.phone="",e.sell="",e.loading=!1,e.dialog=!1,e.idx=-1):(e._id=o[l]._id,e.account=o[l].account,e.password=o[l].password,e.email=o[l].email,e.name=o[l].name,e.phone=o[l].phone,e.sell=o[l].sell,e.loading=o[l].loading,e.dialog=o[l].dialog,e.idx=l),e.dialog=!0},h=[{name:"account",required:!0,label:"\u5E33\u865F",align:"left",field:l=>l.account},{name:"email",required:!0,label:"\u4FE1\u7BB1",align:"left",field:l=>l.email,format:l=>`${l}`,sortable:!0},{name:"username",label:"\u6703\u54E1\u59D3\u540D",align:"left",field:l=>l.username},{name:"phone",label:"\u9023\u7D61\u96FB\u8A71",align:"left",field:l=>l.phone},{name:"edit",label:"\u7DE8\u8F2F",align:"left"}],V=()=>{e.account=null,e.email=null,e.name=null,e.phone=null,e.sell=!1,e.image=void 0},v=async()=>{var s,a;e.loading=!0;const l=new FormData;l.append("title",e.title);try{if(e._id.length===0){const{data:d}=await f.post("/users",l);o.push(d.result),u.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6D3B\u52D5\u6210\u529F"}),console.log(o)}else{const{data:d}=await f.patch("/users/"+e._id,l);o[e.idx]=d.result,u.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6703\u54E1\u8CC7\u6599\u6210\u529F"})}e.dialog=!1}catch(d){u.fire({icon:"error",title:"\u5931\u6557",text:((a=(s=d==null?void 0:d.response)==null?void 0:s.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var l,s;try{const{data:a}=await f.get("/users/all");o.push(...a.result),console.log(o)}catch(a){console.log(a),u.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,s)=>(_(),x("div",F,[P,Z,n("div",E,[t(j,{columns:h,rows:o,"row-key":"_id",filter:m.value,"rows-per-page-options":[5]},{"top-right":i(()=>[t(r,{borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=a=>m.value=a),placeholder:"Search"},{append:i(()=>[t(C,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-edit":i(a=>[t($,{class:"q-pa-md q-gutter-sm"},{default:i(()=>[t(c,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:d=>w(o.findIndex(q=>q._id===a.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),t(y,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":s[6]||(s[6]=a=>e.dialog=a),persistent:""},{default:i(()=>[t(k,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:i(()=>[t(U,{onSubmit:v,onReset:V},{default:i(()=>[t(b,{class:"row flex justify-between"},{default:i(()=>[n("div",G,[n("div",O,S(e._id.length>0?"\u7DE8\u8F2F\u5E33\u865F":"\u65B0\u589E\u5E33\u865F"),1)]),B((_(),D(c,{dense:"",flat:"",icon:"close"},{default:i(()=>[t(T,null,{default:i(()=>[I("Close")]),_:1})]),_:1})),[[R]])]),_:1}),t(N,{class:"column q-gutter-md"},{default:i(()=>[n("div",z,[t(r,{square:"",filled:"",modelValue:e.account,"onUpdate:modelValue":s[1]||(s[1]=a=>e.account=a),label:"\u5E33\u865F",rules:[p.required]},null,8,["modelValue","rules"])]),n("div",H,[t(r,{square:"",filled:"",modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=a=>e.password=a),type:"number",label:"\u5BC6\u78BC",rules:[p.required]},null,8,["modelValue","rules"])]),n("div",J,[t(r,{square:"",filled:"",modelValue:e.email,"onUpdate:modelValue":s[3]||(s[3]=a=>e.email=a),type:"email",label:"\u4FE1\u7BB1",rules:[p.required]},null,8,["modelValue","rules"])]),n("div",K,[t(r,{square:"",filled:"",modelValue:e.name,"onUpdate:modelValue":s[4]||(s[4]=a=>e.name=a),type:"text",label:"\u59D3\u540D"},null,8,["modelValue"])]),n("div",L,[t(A,{modelValue:e.sell,"onUpdate:modelValue":s[5]||(s[5]=a=>e.sell=a),label:"\u72C0\u614B"},null,8,["modelValue"])])]),_:1}),t(b,{align:"right"},{default:i(()=>[t(c,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),t(c,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{ie as default};
