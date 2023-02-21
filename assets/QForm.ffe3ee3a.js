import{aw as oe,a6 as le,r as U,w as K,ag as N,a7 as ue,c as j,v as ee,I as ie,o as te,h as $,ak as se,g as ae,E as H,a9 as ce,aa as fe,A as de,ah as me,a5 as W,ab as ve,ap as ge}from"./index.d65890ce.js";import{g as he,c as ke,d as ye,e as xe,f as Me,h as we,i as be,j as Ce,k as ne,l as X,m as Se}from"./use-key-composition.e5e45876.js";function Y(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const m=parseInt(e,10);return isNaN(m)?0:m}var pe=oe({name:"close-popup",beforeMount(e,{value:m}){const M={depth:Y(m),handler(w){M.depth!==0&&setTimeout(()=>{const c=he(e);c!==void 0&&ke(c,w,M.depth)})},handlerKey(w){le(w,13)===!0&&M.handler(w)}};e.__qclosepopup=M,e.addEventListener("click",M.handler),e.addEventListener("keyup",M.handlerKey)},updated(e,{value:m,oldValue:M}){m!==M&&(e.__qclosepopup.depth=Y(m))},beforeUnmount(e){const m=e.__qclosepopup;e.removeEventListener("click",m.handler),e.removeEventListener("keyup",m.handlerKey),delete e.__qclosepopup}});const G={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},Q={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},re=Object.keys(Q);re.forEach(e=>{Q[e].regex=new RegExp(Q[e].pattern)});const Fe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+re.join("")+"])|(.)","g"),J=/[.*+?^${}()|[\]\\]/g,S=String.fromCharCode(1),Ee={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ve(e,m,M,w){let c,f,V,p;const P=U(null),y=U(v());function T(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}K(()=>e.type+e.autogrow,i),K(()=>e.mask,t=>{if(t!==void 0)F(y.value,!0);else{const n=x(y.value);i(),e.modelValue!==n&&m("update:modelValue",n)}}),K(()=>e.fillMask+e.reverseFillMask,()=>{P.value===!0&&F(y.value,!0)}),K(()=>e.unmaskedValue,()=>{P.value===!0&&F(y.value)});function v(){if(i(),P.value===!0){const t=Z(x(e.modelValue));return e.fillMask!==!1?b(t):t}return e.modelValue}function D(t){if(t<c.length)return c.slice(-t);let n="",o=c;const l=o.indexOf(S);if(l>-1){for(let u=t-o.length;u>0;u--)n+=S;o=o.slice(0,l)+n+o.slice(l)}return o}function i(){if(P.value=e.mask!==void 0&&e.mask.length>0&&T(),P.value===!1){p=void 0,c="",f="";return}const t=G[e.mask]===void 0?e.mask:G[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",o=n.replace(J,"\\$&"),l=[],u=[],r=[];let g=e.reverseFillMask===!0,s="",k="";t.replace(Fe,(A,O,q,a,C)=>{if(a!==void 0){const E=Q[a];r.push(E),k=E.negate,g===!0&&(u.push("(?:"+k+"+)?("+E.pattern+"+)?(?:"+k+"+)?("+E.pattern+"+)?"),g=!1),u.push("(?:"+k+"+)?("+E.pattern+")?")}else if(q!==void 0)s="\\"+(q==="\\"?"":q),r.push(q),l.push("([^"+s+"]+)?"+s+"?");else{const E=O!==void 0?O:C;s=E==="\\"?"\\\\\\\\":E.replace(J,"\\\\$&"),r.push(E),l.push("([^"+s+"]+)?"+s+"?")}});const _=new RegExp("^"+l.join("")+"("+(s===""?".":"[^"+s+"]")+"+)?"+(s===""?"":"["+s+"]*")+"$"),I=u.length-1,d=u.map((A,O)=>O===0&&e.reverseFillMask===!0?new RegExp("^"+o+"*"+A):O===I?new RegExp("^"+A+"("+(k===""?".":k)+"+)?"+(e.reverseFillMask===!0?"$":o+"*")):new RegExp("^"+A));V=r,p=A=>{const O=_.exec(e.reverseFillMask===!0?A:A.slice(0,r.length));O!==null&&(A=O.slice(1).join(""));const q=[],a=d.length;for(let C=0,E=A;C<a;C++){const z=d[C].exec(E);if(z===null)break;E=E.slice(z.shift().length),q.push(...z)}return q.length>0?q.join(""):A},c=r.map(A=>typeof A=="string"?A:S).join(""),f=c.split(S).join(n)}function F(t,n,o){const l=w.value,u=l.selectionEnd,r=l.value.length-u,g=x(t);n===!0&&i();const s=Z(g),k=e.fillMask!==!1?b(s):s,_=y.value!==k;l.value!==k&&(l.value=k),_===!0&&(y.value=k),document.activeElement===l&&N(()=>{if(k===f){const d=e.reverseFillMask===!0?f.length:0;l.setSelectionRange(d,d,"forward");return}if(o==="insertFromPaste"&&e.reverseFillMask!==!0){const d=u-1;R.right(l,d,d);return}if(["deleteContentBackward","deleteContentForward"].indexOf(o)>-1){const d=e.reverseFillMask===!0?u===0?k.length>s.length?1:0:Math.max(0,k.length-(k===f?0:Math.min(s.length,r)+1))+1:u;l.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(_===!0){const d=Math.max(0,k.length-(k===f?0:Math.min(s.length,r+1)));d===1&&u===1?l.setSelectionRange(d,d,"forward"):R.rightReverse(l,d,d)}else{const d=k.length-r;l.setSelectionRange(d,d,"backward")}else if(_===!0){const d=Math.max(0,c.indexOf(S),Math.min(s.length,u)-1);R.right(l,d,d)}else{const d=u-1;R.right(l,d,d)}});const I=e.unmaskedValue===!0?x(k):k;String(e.modelValue)!==I&&M(I,!0)}function B(t,n,o){const l=Z(x(t.value));n=Math.max(0,c.indexOf(S),Math.min(l.length,n)),t.setSelectionRange(n,o,"forward")}const R={left(t,n,o,l){const u=c.slice(n-1).indexOf(S)===-1;let r=Math.max(0,n-1);for(;r>=0;r--)if(c[r]===S){n=r,u===!0&&n++;break}if(r<0&&c[n]!==void 0&&c[n]!==S)return R.right(t,0,0);n>=0&&t.setSelectionRange(n,l===!0?o:n,"backward")},right(t,n,o,l){const u=t.value.length;let r=Math.min(u,o+1);for(;r<=u;r++)if(c[r]===S){o=r;break}else c[r-1]===S&&(o=r);if(r>u&&c[o-1]!==void 0&&c[o-1]!==S)return R.left(t,u,u);t.setSelectionRange(l?n:o,o,"forward")},leftReverse(t,n,o,l){const u=D(t.value.length);let r=Math.max(0,n-1);for(;r>=0;r--)if(u[r-1]===S){n=r;break}else if(u[r]===S&&(n=r,r===0))break;if(r<0&&u[n]!==void 0&&u[n]!==S)return R.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,l===!0?o:n,"backward")},rightReverse(t,n,o,l){const u=t.value.length,r=D(u),g=r.slice(0,o+1).indexOf(S)===-1;let s=Math.min(u,o+1);for(;s<=u;s++)if(r[s-1]===S){o=s,o>0&&g===!0&&o--;break}if(s>u&&r[o-1]!==void 0&&r[o-1]!==S)return R.leftReverse(t,u,u);t.setSelectionRange(l===!0?n:o,o,"forward")}};function L(t){if(m("keydown",t),ue(t)===!0)return;const n=w.value,o=n.selectionStart,l=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const u=R[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),u(n,o,l,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&o===l?R.left(n,o,l,!0):t.keyCode===46&&e.reverseFillMask===!0&&o===l&&R.rightReverse(n,o,l,!0)}function Z(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return h(t);const n=V;let o=0,l="";for(let u=0;u<n.length;u++){const r=t[o],g=n[u];if(typeof g=="string")l+=g,r===g&&o++;else if(r!==void 0&&g.regex.test(r))l+=g.transform!==void 0?g.transform(r):r,o++;else return l}return l}function h(t){const n=V,o=c.indexOf(S);let l=t.length-1,u="";for(let r=n.length-1;r>=0&&l>-1;r--){const g=n[r];let s=t[l];if(typeof g=="string")u=g+u,s===g&&l--;else if(s!==void 0&&g.regex.test(s))do u=(g.transform!==void 0?g.transform(s):s)+u,l--,s=t[l];while(o===r&&s!==void 0&&g.regex.test(s));else return u}return u}function x(t){return typeof t!="string"||p===void 0?typeof t=="number"?p(""+t):t:p(t)}function b(t){return f.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?f.slice(0,-t.length)+t:t+f.slice(t.length)}return{innerValue:y,hasMask:P,moveCursorForPaste:B,updateMaskValue:F,onMaskedKeydown:L}}function Re(e,m){function M(){const w=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(w)===w&&("length"in w?Array.from(w):[w]).forEach(f=>{c.items.add(f)}),{files:c.files}}catch{return{files:void 0}}}return m===!0?j(()=>{if(e.type==="file")return M()}):j(M)}var Te=ee({name:"QInput",inheritAttrs:!1,props:{...ye,...Ee,...xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Me,"paste","change","keydown","animationend"],setup(e,{emit:m,attrs:M}){const{proxy:w}=ae(),{$q:c}=w,f={};let V=NaN,p,P,y=null,T;const v=U(null),D=we(e),{innerValue:i,hasMask:F,moveCursorForPaste:B,updateMaskValue:R,onMaskedKeydown:L}=Ve(e,m,_,v),Z=Re(e,!0),h=j(()=>X(i.value)),x=Se(s),b=be(),t=j(()=>e.type==="textarea"||e.autogrow===!0),n=j(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),o=j(()=>{const a={...b.splitAttrs.listeners.value,onInput:s,onPaste:g,onChange:d,onBlur:A,onFocus:H};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=x,F.value===!0&&(a.onKeydown=L),e.autogrow===!0&&(a.onAnimationend=k),a}),l=j(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:D.value,...b.splitAttrs.attributes.value,id:b.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});K(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),K(()=>e.modelValue,a=>{if(F.value===!0){if(P===!0&&(P=!1,String(a)===V))return;R(a)}else i.value!==a&&(i.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(p===!0?p=!1:delete f.value));e.autogrow===!0&&N(I)}),K(()=>e.autogrow,a=>{a===!0?N(I):v.value!==null&&M.rows>0&&(v.value.style.height="auto")}),K(()=>e.dense,()=>{e.autogrow===!0&&N(I)});function u(){ne(()=>{const a=document.activeElement;v.value!==null&&v.value!==a&&(a===null||a.id!==b.targetUid.value)&&v.value.focus({preventScroll:!0})})}function r(){v.value!==null&&v.value.select()}function g(a){if(F.value===!0&&e.reverseFillMask!==!0){const C=a.target;B(C,C.selectionStart,C.selectionEnd)}m("paste",a)}function s(a){if(!a||!a.target)return;if(e.type==="file"){m("update:modelValue",a.target.files);return}const C=a.target.value;if(a.target.qComposing===!0){f.value=C;return}if(F.value===!0)R(C,!1,a.inputType);else if(_(C),n.value===!0&&a.target===document.activeElement){const{selectionStart:E,selectionEnd:z}=a.target;E!==void 0&&z!==void 0&&N(()=>{a.target===document.activeElement&&C.indexOf(a.target.value)===0&&a.target.setSelectionRange(E,z)})}e.autogrow===!0&&I()}function k(a){m("animationend",a),I()}function _(a,C){T=()=>{y=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&V!==a&&(V=a,C===!0&&(P=!0),m("update:modelValue",a),N(()=>{V===a&&(V=NaN)})),T=void 0},e.type==="number"&&(p=!0,f.value=a),e.debounce!==void 0?(y!==null&&clearTimeout(y),f.value=a,y=setTimeout(T,e.debounce)):T()}function I(){requestAnimationFrame(()=>{const a=v.value;if(a!==null){const C=a.parentNode.style,{overflow:E}=a.style;c.platform.is.firefox!==!0&&(a.style.overflow="hidden"),C.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",a.style.overflow=E,C.marginBottom=""}})}function d(a){x(a),y!==null&&(clearTimeout(y),y=null),T!==void 0&&T(),m("change",a.target.value)}function A(a){a!==void 0&&H(a),y!==null&&(clearTimeout(y),y=null),T!==void 0&&T(),p=!1,P=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=i.value!==void 0?i.value:"")})}function O(){return f.hasOwnProperty("value")===!0?f.value:i.value!==void 0?i.value:""}ie(()=>{A()}),te(()=>{e.autogrow===!0&&I()}),Object.assign(b,{innerValue:i,fieldClass:j(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:j(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:v,emitValue:_,hasValue:h,floatingLabel:j(()=>h.value===!0||X(e.displayValue)),getControl:()=>$(t.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...o.value,...e.type!=="file"?{value:O()}:Z.value}),getShadowControl:()=>$("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[$("span",{class:"invisible"},O()),$("span",e.shadowText)])});const q=Ce(b);return Object.assign(w,{focus:u,select:r,getNativeElement:()=>v.value}),se(w,"nativeEl",()=>v.value),q}}),Ie=ee({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:m,emit:M}){const w=ae(),c=U(null);let f=0;const V=[];function p(i){const F=typeof i=="boolean"?i:e.noErrorFocus!==!0,B=++f,R=(h,x)=>{M("validation"+(h===!0?"Success":"Error"),x)},L=h=>{const x=h.validate();return typeof x.then=="function"?x.then(b=>({valid:b,comp:h}),b=>({valid:!1,comp:h,err:b})):Promise.resolve({valid:x,comp:h})};return(e.greedy===!0?Promise.all(V.map(L)).then(h=>h.filter(x=>x.valid!==!0)):V.reduce((h,x)=>h.then(()=>L(x).then(b=>{if(b.valid===!1)return Promise.reject(b)})),Promise.resolve()).catch(h=>[h])).then(h=>{if(h===void 0||h.length===0)return B===f&&R(!0),!0;if(B===f){const{comp:x,err:b}=h[0];if(b!==void 0&&console.error(b),R(!1,x),F===!0){const t=h.find(({comp:n})=>typeof n.focus=="function"&&me(n.$)===!1);t!==void 0&&t.comp.focus()}}return!1})}function P(){f++,V.forEach(i=>{typeof i.resetValidation=="function"&&i.resetValidation()})}function y(i){i!==void 0&&W(i);const F=f+1;p().then(B=>{F===f&&B===!0&&(e.onSubmit!==void 0?M("submit",i):i!==void 0&&i.target!==void 0&&typeof i.target.submit=="function"&&i.target.submit())})}function T(i){i!==void 0&&W(i),M("reset"),N(()=>{P(),e.autofocus===!0&&e.noResetFocus!==!0&&v()})}function v(){ne(()=>{if(c.value===null)return;const i=c.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(c.value.querySelectorAll("[tabindex]"),F=>F.tabIndex>-1);i!=null&&i.focus({preventScroll:!0})})}ve(ge,{bindComponent(i){V.push(i)},unbindComponent(i){const F=V.indexOf(i);F>-1&&V.splice(F,1)}});let D=!1;return ce(()=>{D=!0}),fe(()=>{D===!0&&e.autofocus===!0&&v()}),te(()=>{e.autofocus===!0&&v()}),Object.assign(w.proxy,{validate:p,resetValidation:P,submit:y,reset:T,focus:v,getValidationComponents:()=>V}),()=>$("form",{class:"q-form",ref:c,onSubmit:y,onReset:T},de(m.default))}});export{pe as C,Te as Q,Ie as a,Re as u};
