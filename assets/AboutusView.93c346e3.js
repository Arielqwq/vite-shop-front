import{W as h,b1 as g,aY as p,j as b,k as C,l,d as s,G as m,ab as _,a3 as x,X as n,ac as k,aa as B,Z as D,b3 as v,a7 as S,a5 as U,a2 as I,b2 as A,Y as w,ad as F,Q as N,ae as j}from"./index.a71905f2.js";import{Q as R}from"./QFile.f149a672.js";import"./QChip.effc23a0.js";import"./format.2a3572e1.js";const T={id:"admin-aboutUs"},Y=l("h3",{class:"text-center"},"\u95DC\u65BC\u6211\u5011\u7BA1\u7406",-1),E={class:"div q-px-xl row"},G={class:"col-12"},P={class:"q-px-xl q-mt-md"},W={style:{width:"80%",height:"500px","border-radius":"30px","background-color":"rgb(255, 245, 238)",padding:"20px"}},X=["src"],Z={class:"div q-pa-md row",align:"left"},$={class:"text-center"},z={class:"col-12"},H={class:"col-12"},J={class:"col-5"},K=l("div",{class:"row"},null,-1),se={__name:"AboutusView",setup(L){const f={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"}},V=()=>{e.image=[]},i=h([]),e=h({_id:"",title:"",image:void 0,description:""}),y=a=>{a===-1&&(e.title="",e.image=void 0,e.description=""),e.dialog=!0},Q=()=>{e.title="",e.image=void 0,e.description=""},q=async()=>{var t,o;e.loading=!0;const a=new FormData;a.append("title",e.title),a.append("description",e.description),a.append("image",e.image);try{if(e._id.length===0){const{data:d}=await g.post("/aboutus",a);i.push(d.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:d}=await g.patch("/aboutus/"+e._id,a);console.log(d.result);const u=i.findIndex(r=>r._id===e._id);i[u]=d.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(d){p.fire({icon:"error",title:"\u5931\u6557",text:((o=(t=d==null?void 0:d.response)==null?void 0:t.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1};return(async()=>{var a,t;try{const{data:o}=await g.get("/aboutus");i.push(...o.result),e._id=i[0]._id,e.title=i[0].title,e.image=i[0].image,e.description=i[0].description,console.log(e)}catch(o){p.fire({icon:"error",title:"\u5931\u6557",text:((t=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,t)=>{var o,d,u;return b(),C("div",T,[Y,l("div",E,[l("div",G,[s(m,{onClick:t[0]||(t[0]=r=>y(e._id.length>0?0:-1)),color:"primary",label:"\u7DE8\u8F2F"})])]),l("div",P,[l("div",W,[l("h5",null,"\u6A19\u984C\uFF1A "+_((o=i[0])==null?void 0:o.title),1),l("h6",null,"\u5167\u5BB9\uFF1A "+_((d=i[0])==null?void 0:d.description),1),l("h6",null,[x("\u5716\u7247\uFF1A"),l("img",{src:(u=i[0])==null?void 0:u.image,style:{height:"100px"}},null,8,X)])]),s(k,{align:"center",modelValue:e.dialog,"onUpdate:modelValue":t[4]||(t[4]=r=>e.dialog=r),persistent:""},{default:n(()=>[s(B,{class:"column",style:{width:"700px","max-width":"80vw"}},{default:n(()=>[s(D,{onSubmit:q,onReset:Q},{default:n(()=>[s(v,{class:"row flex justify-between"},{default:n(()=>[l("div",Z,[l("div",$,_(e._id.length>0?"\u7DE8\u8F2F\u95DC\u65BC\u6211\u5011":"\u65B0\u589E\u95DC\u65BC\u6211\u5011"),1)]),S((b(),U(m,{dense:"",flat:"",icon:"close"},{default:n(()=>[s(I,null,{default:n(()=>[x("Close")]),_:1})]),_:1})),[[j]])]),_:1}),s(A,{class:"column q-gutter-md"},{default:n(()=>{var r;return[l("div",z,[s(w,{square:"",filled:"",modelValue:e.title,"onUpdate:modelValue":t[1]||(t[1]=c=>e.title=c),label:"\u95DC\u65BC\u6211\u5011\u6A19\u984C",rules:[f.required]},null,8,["modelValue","rules"])]),l("div",H,[s(w,{square:"",filled:"",modelValue:e.description,"onUpdate:modelValue":t[2]||(t[2]=c=>e.description=c),type:"textarea",label:"\u95DC\u65BC\u6211\u5011\u5167\u5BB9",rules:[f.required]},null,8,["modelValue","rules"])]),l("div",J,[K,s(F,{src:(r=i[e.idx])==null?void 0:r.image,style:{height:"100px"}},null,8,["src"]),s(R,{filled:"",modelValue:e.image,"onUpdate:modelValue":t[3]||(t[3]=c=>e.image=c),label:"\u8ACB\u4E0A\u50B3\u5716\u7247",style:{"max-height":"50px"}},{append:n(()=>[s(N,{name:"close",onClick:V})]),_:1},8,["modelValue"])])]}),_:1}),s(v,{align:"right"},{default:n(()=>[s(m,{disabled:e.loading,flat:"",label:"reset",type:"reset",color:"red"},null,8,["disabled"]),s(m,{disabled:e.loading,flat:"",label:"submit",type:"submit",color:"green"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}}};export{se as default};
