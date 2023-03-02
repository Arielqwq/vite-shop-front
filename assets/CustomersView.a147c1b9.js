import{X as p,r as x,b1 as f,aY as m,j as g,k as Q,l as i,d as o,Y as n,af as C,Z as d,Q as b,G as r,ad as U,$ as k,b3 as _,ae as S,aa as B,a8 as D,a5 as T,a6 as I,b2 as N,ah as $}from"./index.f18948a3.js";import{Q as j,a as h}from"./QTable.f4ee3aa7.js";import"./QCheckbox.9079184c.js";import"./QMenu.803904a1.js";import"./QChip.b673c07f.js";import"./QItemLabel.1705e793.js";import"./format.2a3572e1.js";const A={class:"q-pa-md",id:"customersview"},R=i("h3",{class:"text-center"},"\u6703\u54E1\u7BA1\u7406",-1),Y={class:"q-px-xl q-mx-md"},z={class:"div q-pa-md row",align:"left"},E={class:"text-center"},F={class:"col-12"},G={class:"col-12"},P={class:"col-12"},X={class:"col-12"},Z={class:"col-12"},H={class:"col-12"},se={__name:"CustomersView",setup(J){const t=p([]),u=x(""),c={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"}},e=p({_id:"",account:"",password:"",email:"",username:"",phone:"",birth:"",sell:"",loading:!1,dialog:!1,idx:-1}),V=l=>{l===-1?(e._id="",e.account="",e.password="",e.email="",e.username="",e.birth="",e.phone="",e.sell="",e.loading=!1,e.dialog=!1,e.idx=-1):(e._id=t[l]._id,e.account=t[l].account,e.password="",e.email=t[l].email,e.username=t[l].username,e.birth=t[l].birth,e.phone=t[l].phone,e.sell=t[l].sell,e.loading=t[l].loading,e.dialog=t[l].dialog,e.idx=l),e.dialog=!0},w=[{name:"account",required:!0,label:"\u5E33\u865F",align:"center",field:l=>l.account},{name:"email",required:!0,label:"\u4FE1\u7BB1",align:"center",field:l=>l.email,format:l=>`${l}`,sortable:!0},{name:"username",label:"\u6703\u54E1\u59D3\u540D",align:"center",field:l=>l.username},{name:"phone",label:"\u9023\u7D61\u96FB\u8A71",align:"center",field:l=>l.phone},{name:"role",required:!0,label:"\u8EAB\u5206\u5225",align:"center",field:l=>l.role},{name:"edit",label:"\u7DE8\u8F2F",align:"center"}],v=()=>{e.account=null,e.email=null,e.username=null,e.birth=null,e.phone=null,e.sell=!1,e.image=void 0},q=async()=>{var l,s;e.loading=!0;try{const{data:a}=await f.patch("/users/edituser/",e);t[e.idx]=a.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6703\u54E1\u8CC7\u6599\u6210\u529F"}),e.dialog=!1}catch(a){m.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"}),e.dialog=!1}e.loading=!1};return(async()=>{var l,s;try{const{data:a}=await f.get("/users/all");t.push(...a.result),console.log(t)}catch(a){console.log(a),m.fire({icon:"error",title:"\u5931\u6557",text:((s=(l=a==null?void 0:a.response)==null?void 0:l.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,s)=>(g(),Q("div",A,[R,i("div",Y,[o(j,{columns:w,rows:t,"row-key":"_id",filter:u.value,"rows-per-page-options":[5]},{"top-right":n(()=>[o(d,{outlined:"",debounce:"300",modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=a=>u.value=a),placeholder:"Search"},{append:n(()=>[o(b,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-role":n(a=>[o(h,{class:"text-center"},{default:n(()=>[o(b,{size:"md",name:a.row.role==1?"fa-solid fa-user-gear":"fa-solid fa-user"},null,8,["name"])]),_:2},1024)]),"body-cell-edit":n(a=>[o(h,{class:"text-center"},{default:n(()=>[o(r,{round:"",color:"primary","text-color":"white",icon:"edit",onClick:K=>V(t.findIndex(y=>y._id===a.row._id))},null,8,["onClick"])]),_:2},1024)]),_:1},8,["rows","filter"]),o(C,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":s[7]||(s[7]=a=>e.dialog=a),persistent:""},{default:n(()=>[o(U,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:n(()=>[o(k,{onSubmit:q,onReset:v},{default:n(()=>[o(_,{class:"row flex justify-between"},{default:n(()=>[i("div",z,[i("div",E,S(e._id.length>0?"\u7DE8\u8F2F\u5E33\u865F":"\u65B0\u589E\u5E33\u865F"),1)]),B((g(),D(r,{dense:"",flat:"",icon:"close"},{default:n(()=>[o(T,null,{default:n(()=>[I("Close")]),_:1})]),_:1})),[[$]])]),_:1}),o(N,{class:"column q-gutter-md"},{default:n(()=>[i("div",F,[o(d,{square:"",filled:"",modelValue:e.account,"onUpdate:modelValue":s[1]||(s[1]=a=>e.account=a),label:"\u5E33\u865F",rules:[c.required]},null,8,["modelValue","rules"])]),i("div",G,[o(d,{square:"",filled:"",modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=a=>e.password=a),type:"password",label:"\u5BC6\u78BC",rules:[c.required]},null,8,["modelValue","rules"])]),i("div",P,[o(d,{square:"",filled:"",modelValue:e.email,"onUpdate:modelValue":s[3]||(s[3]=a=>e.email=a),type:"email",label:"\u4FE1\u7BB1",rules:[c.required]},null,8,["modelValue","rules"])]),i("div",X,[o(d,{square:"",filled:"",modelValue:e.username,"onUpdate:modelValue":s[4]||(s[4]=a=>e.username=a),type:"text",label:"\u59D3\u540D"},null,8,["modelValue"])]),i("div",Z,[o(d,{square:"",filled:"",modelValue:e.phone,"onUpdate:modelValue":s[5]||(s[5]=a=>e.phone=a),type:"phone",label:"\u624B\u6A5F"},null,8,["modelValue"])]),i("div",H,[o(d,{square:"",filled:"",modelValue:e.birth,"onUpdate:modelValue":s[6]||(s[6]=a=>e.birth=a),type:"birth",label:"\u51FA\u751F\u5E74\u6708\u65E5"},null,8,["modelValue"])])]),_:1}),o(_,{align:"right"},{default:n(()=>[o(r,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),o(r,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{se as default};
