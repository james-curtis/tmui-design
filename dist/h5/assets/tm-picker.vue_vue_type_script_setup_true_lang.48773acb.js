var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a;import{d as r,r as d,c as i,O as s,ad as f,Q as c,m,o as p,a as v,w as h,M as y,b as g,u as b,j as x,n as C,g as S,K as k,k as w,P as j,i as _}from"./index-6b165856.js";import{c as O}from"./tm-app.d6cf2f93.js";import{t as I}from"./tm-drawer.cfc5bd4b.js";import{_ as V}from"./tm-picker-view.vue_vue_type_script_setup_true_lang.75791078.js";import{t as K}from"./tm-button.80fc9b3b.js";const M=r({__name:"tm-picker",props:(N=((e,t)=>{for(var l in t||(t={}))n.call(t,l)&&o(e,l,t[l]);if(a)for(var l of a(t))u.call(t,l)&&o(e,l,t[l]);return e})({},O),P={modelValue:{type:Array,default:()=>[]},modelStr:{type:[String],default:""},defaultValue:{type:Array,default:()=>[]},selectedModel:{type:String,default:"index"},columns:{type:Array,default:()=>[],required:!0},dataKey:{type:String,default:"text"},mapKey:{type:String,default:"text"},beforeChange:{type:[Boolean,Function],default:()=>!1},show:{type:[Boolean],default:!1},color:{type:String,default:"primary"},linear:{type:String,default:""},linearDeep:{type:String,default:"light"},btnRound:{type:Number,default:0},round:{type:Number,default:12},height:{type:Number,default:700},immediateChange:{type:Boolean,default:!1},inContent:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:999},duration:{type:Number,default:300}},t(N,l(P))),emits:["update:show","update:modelValue","update:modelStr","confirm","cancel","close","open"],setup(e,{emit:t}){var l;const a=e,n=d(null);null==(l=S())||l.proxy;const u=d(!0),o=d([]),r=i((()=>a.columns)),O=d(a.modelStr),M=d(!0),N=s("tmuiSysInfo",i((()=>({bottom:0,height:750,width:k(750),top:0,isCustomHeader:!1,sysinfo:null}))));let P=NaN;function B(e){u.value=e,t("update:show",u.value),E(r.value,a.selectedModel,0,a.modelValue),t("close")}function z(){t("open")}function T(){0==o.value.length&&function(e=[],t="name",l=0,a=[]){let n=[...o.value];if(o.value=[],"name"==t){let u=e.filter((e=>a[l]==e.text));0==u.length?(u=e[0],u&&(a[l]=u.text,n[l]=0,u.children&&E(u.children,t,l+1,a))):(u=u[0],u&&(n[l]=e.findIndex((e=>e.text==u.text)),u.children&&E(u.children,t,l+1,a)))}else if("id"==t){let u=e.filter((e=>a[l]==e.id));0==u.length?(u=e[0],u&&(a[l]=u.id,n[l]=0,u.children&&E(u.children,t,l+1,a))):(u=u[0],u&&(n[l]=e.findIndex((e=>e.id==u.id)),u.children&&E(u.children,t,l+1,a)))}else n=[...a];o.value=[...n],o.value}(r.value,a.selectedModel,0,a.defaultValue),function(){var e;let l=[];l="name"==a.selectedModel?null!=(e=O.value.split("/"))?e:[]:"id"==a.selectedModel?Q(r.value,0):[...o.value];t("update:modelValue",l),t("update:modelStr",O.value)}(),w((()=>{var e;t("confirm",j(o.value)),null==(e=n.value)||e.close()}))}function A(){M.value&&t("cancel")}function D(){clearTimeout(P),P=setTimeout((function(){if(!O.value&&o.value.length>0){let e=R(r.value,0).join("/");t("update:modelStr",e)}0==o.value.length&&t("update:modelStr","")}),100)}function E(e=[],t="name",l=0,a=[]){if(0==a.length)return o.value=[],[];let n=[...o.value];if(o.value=[],"name"==t){let u=e.filter((e=>a[l]==e.text));0==u.length||(u=u[0],u&&(n[l]=e.findIndex((e=>e.text==u.text)),u.children&&E(u.children,t,l+1,a)))}else if("id"==t){let u=e.filter((e=>a[l]==e.id));0==u.length||(u=u[0],u&&(n[l]=e.findIndex((e=>e.id==u.id)),u.children&&E(u.children,t,l+1,a)))}else n=[...a];return o.value=[...n],o.value}function Q(e=[],t=0){let l=[];for(let a=0;a<e.length;a++)if(a==o.value[t]){if(l.push(e[a].id),void 0!==o.value[t]){let n=Q(e[a].children,t+1);l=[...l,...n]}break}return l}function R(e=[],t=0){let l=[];for(let a=0;a<e.length;a++)if(a==o.value[t]){if(l.push(e[a].text),void 0!==o.value[t]){let n=R(e[a].children,t+1);l=[...l,...n]}break}return l}f((()=>{u.value=a.show})),c([()=>a.columns,()=>a.modelValue],(()=>{clearTimeout(P),P=setTimeout((function(){E(r.value,a.selectedModel,0,a.modelValue),D()}),500)}),{deep:!0}),m((()=>{a.defaultValue.length>0&&(E(r.value,a.selectedModel,0,a.defaultValue),D())}));const U=i((()=>a.height+N.value.bottom+80));return(e,t)=>{const l=_;return p(),v(l,{onClick:t[4]||(t[4]=e=>u.value=!a.disabled&&!u.value)},{default:h((()=>[y(e.$slots,"default"),g(I,{zIndex:a.zIndex,inContent:a.inContent,disabbleScroll:!0,round:a.round,ref_key:"drawer",ref:n,height:b(U),closeable:!0,overlayClick:M.value,onOpen:z,onCancel:A,onOk:T,show:u.value,onClose:B,title:"请选择","ok-text":"确认"},{default:h((()=>[u.value?(p(),v(V,{key:0,dataKey:a.mapKey||a.dataKey,"map-key":a.mapKey||a.dataKey,height:b(U)-230,onEnd:t[0]||(t[0]=e=>M.value=!0),onStart:t[1]||(t[1]=e=>M.value=!1),value:o.value,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e),"onUpdate:modelStr":t[3]||(t[3]=e=>O.value=e),"model-str":O.value,"default-value":o.value,beforeChange:a.beforeChange,immediateChange:a.immediateChange,columns:b(r)},null,8,["dataKey","map-key","height","value","model-str","default-value","beforeChange","immediateChange","columns"])):x("v-if",!0),g(K,{label:"确认选择",block:"",margin:[32,12],color:a.color,linear:a.linear,"linear-deep":a.linearDeep,onClick:T,round:a.btnRound},null,8,["color","linear","linear-deep","round"]),g(l,{style:C({height:b(N).bottom+"px"})},null,8,["style"])])),_:1},8,["zIndex","inContent","round","height","overlayClick","show"])])),_:3})}}});var N,P;export{M as _};