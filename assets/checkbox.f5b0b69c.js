import{N as O,S as R,O as Q,P as X,Q as he,R as Y,T as ke,U as ge,V as pe,W as xe,X as ye,Y as Z,Z as w,$ as U,a0 as A,a1 as V,a2 as B,c as p,a3 as N,a4 as Ce,a5 as z,q as J,a6 as _,a7 as j,a8 as ee,m as F,a9 as L,aa as Se,ab as M,ac as Le,ad as H,ae,a as C,af as ne,u as G,o as x,v as le,x as te,A as K,n as g,f as n,ag as E,e as y,ah as I,ai as $,r as P,aj as Be,B as oe,C as se,g as T,ak as ie,_ as D,h as Ee,b as Ie,d as $e,al as we,t as Ve,w as Ne,am as ue}from"./index.cc5c9bb4.js";function Fe(e){return e}function Te(e,a,t){switch(t.length){case 0:return e.call(a);case 1:return e.call(a,t[0]);case 2:return e.call(a,t[0],t[1]);case 3:return e.call(a,t[0],t[1],t[2])}return e.apply(a,t)}var ze=800,Ge=16,Pe=Date.now;function De(e){var a=0,t=0;return function(){var l=Pe(),s=Ge-(l-t);if(t=l,s>0){if(++a>=ze)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Oe(e){return function(){return e}}var Re=O?function(e,a){return O(e,"toString",{configurable:!0,enumerable:!1,value:Oe(a),writable:!0})}:Fe,Ue=Re,Ae=De(Ue),Me=Ae,q=Math.max;function He(e,a,t){return a=q(a===void 0?e.length-1:a,0),function(){for(var l=arguments,s=-1,d=q(l.length-a,0),c=Array(d);++s<d;)c[s]=l[a+s];s=-1;for(var i=Array(a+1);++s<a;)i[s]=l[s];return i[a]=t(c),Te(e,this,i)}}var W=R?R.isConcatSpreadable:void 0;function Ke(e){return Q(e)||X(e)||!!(W&&e&&e[W])}function re(e,a,t,l,s){var d=-1,c=e.length;for(t||(t=Ke),s||(s=[]);++d<c;){var i=e[d];a>0&&t(i)?a>1?re(i,a-1,t,l,s):he(s,i):l||(s[s.length]=i)}return s}function qe(e){var a=e==null?0:e.length;return a?re(e,1):[]}function We(e){return Me(He(e,void 0,qe),e+"")}function Qe(e,a){return e!=null&&a in Object(e)}function Xe(e,a,t){a=Y(a,e);for(var l=-1,s=a.length,d=!1;++l<s;){var c=ke(a[l]);if(!(d=e!=null&&t(e,c)))break;e=e[c]}return d||++l!=s?d:(s=e==null?0:e.length,!!s&&ge(s)&&pe(c,s)&&(Q(e)||X(e)))}function Ye(e,a){return e!=null&&Xe(e,a,Qe)}function Ze(e,a,t){for(var l=-1,s=a.length,d={};++l<s;){var c=a[l],i=xe(e,c);t(i,c)&&ye(d,Y(c,e),i)}return d}function Je(e,a){return Ze(e,a,function(t,l){return Ye(e,l)})}var _e=We(function(e,a){return e==null?{}:Je(e,a)}),je=_e;const S=Symbol("checkboxGroupContextKey"),de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Z,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ce={[w]:e=>U(e)||A(e)||V(e),change:e=>U(e)||A(e)||V(e)},ea=({model:e,isChecked:a})=>{const t=B(S,void 0),l=p(()=>{var d,c;const i=(d=t==null?void 0:t.max)==null?void 0:d.value,v=(c=t==null?void 0:t.min)==null?void 0:c.value;return!N(i)&&e.value.length>=i&&!a.value||!N(v)&&e.value.length<=v&&a.value});return{isDisabled:Ce(p(()=>(t==null?void 0:t.disabled.value)||l.value)),isLimitDisabled:l}},aa=(e,{model:a,isLimitExceeded:t,hasOwnLabel:l,isDisabled:s,isLabeledByFormItem:d})=>{const c=B(S,void 0),{formItem:i}=z(),{emit:v}=ee();function u(o){var b,h;return o===e.trueLabel||o===!0?(b=e.trueLabel)!=null?b:!0:(h=e.falseLabel)!=null?h:!1}function m(o,b){v("change",u(o),b)}function k(o){if(t.value)return;const b=o.target;v("change",u(b.checked),o)}async function f(o){t.value||!l.value&&!s.value&&d.value&&(o.composedPath().some(fe=>fe.tagName==="LABEL")||(a.value=u([!1,e.falseLabel].includes(a.value)),await j(),m(a.value,o)))}const r=p(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return J(()=>e.modelValue,()=>{r.value&&(i==null||i.validate("change").catch(o=>_()))}),{handleChange:k,onClickRoot:f}},na=e=>{const a=F(!1),{emit:t}=ee(),l=B(S,void 0),s=p(()=>N(l)===!1),d=F(!1);return{model:p({get(){var i,v;return s.value?(i=l==null?void 0:l.modelValue)==null?void 0:i.value:(v=e.modelValue)!=null?v:a.value},set(i){var v,u;s.value&&L(i)?(d.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&i.length>(l==null?void 0:l.max.value),d.value===!1&&((u=l==null?void 0:l.changeEvent)==null||u.call(l,i))):(t(w,i),a.value=i)}}),isGroup:s,isLimitExceeded:d}},la=(e,a,{model:t})=>{const l=B(S,void 0),s=F(!1),d=p(()=>{const u=t.value;return V(u)?u:L(u)?Se(e.label)?u.map(M).some(m=>Le(m,e.label)):u.map(M).includes(e.label):u!=null?u===e.trueLabel:!!u}),c=H(p(()=>{var u;return(u=l==null?void 0:l.size)==null?void 0:u.value}),{prop:!0}),i=H(p(()=>{var u;return(u=l==null?void 0:l.size)==null?void 0:u.value})),v=p(()=>!!(a.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:s,checkboxSize:i,hasOwnLabel:v}},ta=(e,{model:a})=>{function t(){L(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&t()},be=(e,a)=>{const{formItem:t}=z(),{model:l,isGroup:s,isLimitExceeded:d}=na(e),{isFocused:c,isChecked:i,checkboxButtonSize:v,checkboxSize:u,hasOwnLabel:m}=la(e,a,{model:l}),{isDisabled:k}=ea({model:l,isChecked:i}),{inputId:f,isLabeledByFormItem:r}=ae(e,{formItemContext:t,disableIdGeneration:m,disableIdManagement:s}),{handleChange:o,onClickRoot:b}=aa(e,{model:l,isLimitExceeded:d,hasOwnLabel:m,isDisabled:k,isLabeledByFormItem:r});return ta(e,{model:l}),{inputId:f,isLabeledByFormItem:r,isChecked:i,isDisabled:k,isFocused:c,checkboxButtonSize:v,checkboxSize:u,hasOwnLabel:m,model:l,handleChange:o,onClickRoot:b}},oa=["tabindex","role","aria-checked"],sa=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],ia=["id","aria-hidden","disabled","value","name","tabindex"],ua=C({name:"ElCheckbox"}),ra=C({...ua,props:de,emits:ce,setup(e){const a=e,t=ne(),{inputId:l,isLabeledByFormItem:s,isChecked:d,isDisabled:c,isFocused:i,checkboxSize:v,hasOwnLabel:u,model:m,handleChange:k,onClickRoot:f}=be(a,t),r=G("checkbox");return(o,b)=>(x(),le(ie(!n(u)&&n(s)?"span":"label"),{class:g([n(r).b(),n(r).m(n(v)),n(r).is("disabled",n(c)),n(r).is("bordered",o.border),n(r).is("checked",n(d))]),"aria-controls":o.indeterminate?o.controls:null,onClick:n(f)},{default:te(()=>[K("span",{class:g([n(r).e("input"),n(r).is("disabled",n(c)),n(r).is("checked",n(d)),n(r).is("indeterminate",o.indeterminate),n(r).is("focus",n(i))]),tabindex:o.indeterminate?0:void 0,role:o.indeterminate?"checkbox":void 0,"aria-checked":o.indeterminate?"mixed":void 0},[o.trueLabel||o.falseLabel?E((x(),y("input",{key:0,id:n(l),"onUpdate:modelValue":b[0]||(b[0]=h=>I(m)?m.value=h:null),class:g(n(r).e("original")),type:"checkbox","aria-hidden":o.indeterminate?"true":"false",name:o.name,tabindex:o.tabindex,disabled:n(c),"true-value":o.trueLabel,"false-value":o.falseLabel,onChange:b[1]||(b[1]=(...h)=>n(k)&&n(k)(...h)),onFocus:b[2]||(b[2]=h=>i.value=!0),onBlur:b[3]||(b[3]=h=>i.value=!1)},null,42,sa)),[[$,n(m)]]):E((x(),y("input",{key:1,id:n(l),"onUpdate:modelValue":b[4]||(b[4]=h=>I(m)?m.value=h:null),class:g(n(r).e("original")),type:"checkbox","aria-hidden":o.indeterminate?"true":"false",disabled:n(c),value:o.label,name:o.name,tabindex:o.tabindex,onChange:b[5]||(b[5]=(...h)=>n(k)&&n(k)(...h)),onFocus:b[6]||(b[6]=h=>i.value=!0),onBlur:b[7]||(b[7]=h=>i.value=!1)},null,42,ia)),[[$,n(m)]]),K("span",{class:g(n(r).e("inner"))},null,2)],10,oa),n(u)?(x(),y("span",{key:0,class:g(n(r).e("label"))},[P(o.$slots,"default"),o.$slots.default?T("v-if",!0):(x(),y(Be,{key:0},[oe(se(o.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var da=D(ra,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ca=["name","tabindex","disabled","true-value","false-value"],ba=["name","tabindex","disabled","value"],va=C({name:"ElCheckboxButton"}),ma=C({...va,props:de,emits:ce,setup(e){const a=e,t=ne(),{isFocused:l,isChecked:s,isDisabled:d,checkboxButtonSize:c,model:i,handleChange:v}=be(a,t),u=B(S,void 0),m=G("checkbox"),k=p(()=>{var f,r,o,b;const h=(r=(f=u==null?void 0:u.fill)==null?void 0:f.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(b=(o=u==null?void 0:u.textColor)==null?void 0:o.value)!=null?b:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}});return(f,r)=>(x(),y("label",{class:g([n(m).b("button"),n(m).bm("button",n(c)),n(m).is("disabled",n(d)),n(m).is("checked",n(s)),n(m).is("focus",n(l))])},[f.trueLabel||f.falseLabel?E((x(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=o=>I(i)?i.value=o:null),class:g(n(m).be("button","original")),type:"checkbox",name:f.name,tabindex:f.tabindex,disabled:n(d),"true-value":f.trueLabel,"false-value":f.falseLabel,onChange:r[1]||(r[1]=(...o)=>n(v)&&n(v)(...o)),onFocus:r[2]||(r[2]=o=>l.value=!0),onBlur:r[3]||(r[3]=o=>l.value=!1)},null,42,ca)),[[$,n(i)]]):E((x(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=o=>I(i)?i.value=o:null),class:g(n(m).be("button","original")),type:"checkbox",name:f.name,tabindex:f.tabindex,disabled:n(d),value:f.label,onChange:r[5]||(r[5]=(...o)=>n(v)&&n(v)(...o)),onFocus:r[6]||(r[6]=o=>l.value=!0),onBlur:r[7]||(r[7]=o=>l.value=!1)},null,42,ba)),[[$,n(i)]]),f.$slots.default||f.label?(x(),y("span",{key:2,class:g(n(m).be("button","inner")),style:Ee(n(s)?n(k):void 0)},[P(f.$slots,"default",{},()=>[oe(se(f.label),1)])],6)):T("v-if",!0)],2))}});var ve=D(ma,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const fa=Ie({modelValue:{type:$e(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Z,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ha={[w]:e=>L(e),change:e=>L(e)},ka=C({name:"ElCheckboxGroup"}),ga=C({...ka,props:fa,emits:ha,setup(e,{emit:a}){const t=e,l=G("checkbox"),{formItem:s}=z(),{inputId:d,isLabeledByFormItem:c}=ae(t,{formItemContext:s}),i=async u=>{a(w,u),await j(),a("change",u)},v=p({get(){return t.modelValue},set(u){i(u)}});return we(S,{...je(Ve(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:i}),J(()=>t.modelValue,()=>{t.validateEvent&&(s==null||s.validate("change").catch(u=>_()))}),(u,m)=>{var k;return x(),le(ie(u.tag),{id:n(d),class:g(n(l).b("group")),role:"group","aria-label":n(c)?void 0:u.label||"checkbox-group","aria-labelledby":n(c)?(k=n(s))==null?void 0:k.labelId:void 0},{default:te(()=>[P(u.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var me=D(ga,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const xa=Ne(da,{CheckboxButton:ve,CheckboxGroup:me});ue(ve);ue(me);export{xa as E,re as b,Ye as h,Fe as i};
//# sourceMappingURL=checkbox.f5b0b69c.js.map