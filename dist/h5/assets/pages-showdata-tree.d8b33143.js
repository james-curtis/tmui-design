var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,u=(e,l)=>{for(var a in l||(l={}))d.call(l,a)&&o(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&o(e,a,l[a]);return e},r=(e,t)=>l(e,a(t));import{d as i,r as s,g as f,O as c,c as p,ad as v,o as m,a as h,w as x,u as w,j as y,P as N,i as S,Q as T,b as k,M as b,e as _,f as g,F as I,at as C,aM as P}from"./index-6b165856.js";import{t as j}from"./tm-app.d6cf2f93.js";import{t as O}from"./tm-sheet.3639b36a.js";import{t as A}from"./tm-text.6c910eb0.js";import{t as $}from"./tm-icon.65b53dc0.js";import{_ as E}from"./tm-checkbox.vue_vue_type_script_setup_true_lang.18bf0ebb.js";import{_ as U}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";import"./tm-translate.1f1c80c0.js";const B=i({__name:"child-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["change"],setup(e,{expose:l,emit:a}){var t,d,n,o,u;const r=e,i=s(null),T=null!=(d=null==(t=f())?void 0:t.proxy)?d:null;let k=null==T?void 0:T.$parent;for(;k&&"tmTree"!=(null==k?void 0:k.TreeParaentName)&&k;)k=null!=(n=null==k?void 0:k.$parent)?n:void 0;const b=c("TreePareantSelectedIds",s([])),_=null!=(o=null==k?void 0:k.$props.color)?o:"primary",g=p((()=>{var e,l;return{icon:null!=(e=r.data.icon)?e:"",color:r.data.color||_,disabled:null!=(l=r.data.disabled)&&l,text:r.data[r.fieldNames.text],id:r.data[r.fieldNames.id]}})),I=c("TreeNodeCheckable",p((()=>!0))),C=s(""),P=s(!1),j=null==(u=k.$props.multiple)||u;function O(e){!j&&b.value.length>=1&&(null==k||k.checkAll(!1)),e?null==k||k.onSelected([g.value.id]):null==k||k.onUnSelected([g.value.id]),null==k||k.onCheck({checked:e,data:N(r.data)})}return v((()=>function(){let e=b.value.filter((e=>e==g.value.id));e.length>=0?C.value=e[0]:C.value="",a("change",!!C.value)}())),l({setStatus:function(){var e;!0!==g.value.disabled&&(null==(e=i.value)||e.hanlerClick())}}),(e,l)=>{const a=S;return m(),h(a,{class:"flex flex-row flex-row-center-start"},{default:x((()=>[w(I)?(m(),h(E,{key:0,followTheme:r.followTheme,closeAni:"",color:w(g).color,indeterminate:P.value,onChange:O,disabled:w(g).disabled,modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=e=>C.value=e),value:w(g)[r.fieldNames.id],ref_key:"checkboxRef",ref:i},null,8,["followTheme","color","indeterminate","disabled","modelValue","value"])):y("v-if",!0)])),_:1})}}}),V=function(e=[],l="",a=[],t="id"){void 0===a&&(a=[]),Array.isArray(l)||(l=[l]);let d=Array.from(a);for(let n=0,o=e.length;n<o;n++){if(d.push(e[n][t]),e[n].id===l[0])return d;let a=e[n].children;if(a&&a.length){let e=V(a,l,d,t="id");if(e)return e}d.pop()}return null},q=function(e=[],l="id"){let a=[];return e.forEach((e=>{a.push(e[l]),e.children&&a.push(...q(e.children,l="id"))})),a},R=function(e=[],l="",a="id"){let t=null;for(let d=0,n=e.length;d<n;d++){let n=e[d];if(n[a]==l&&n.children){t=n;break}if(n.children){let e=R(n.children,l,a="id");e&&(t=e)}}return t},z=function(e=[],l="id"){let a=[];for(let t=0,d=e.length;t<d;t++){let d=e[t];d.children&&(a.push(d[l]),a.push(...z(d.children)))}return a},D=i({__name:"parent-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},setup(e,{expose:l}){var a,t,d;const n=e,o=s(null),{proxy:u}=f();let r=u.$parent;for(;r&&"tmTree"!=(null==r?void 0:r.TreeParaentName)&&r;)r=null!=(a=null==r?void 0:r.$parent)?a:void 0;const i=c("TreeParentIds",s([])),k=c("TreePareantSelectedIds",s([])),b=null!=(t=null==r?void 0:r.$props.color)?t:"primary",_=p((()=>{var e,l;return{icon:null!=(e=n.data.icon)?e:"",color:n.data.color||b,disabled:null!=(l=n.data.disabled)&&l,text:n.data[n.fieldNames.text],id:n.data[n.fieldNames.id]}})),g=r.getAllListData(),I=c("TreeNodeCheckable",p((()=>!0))),C=s(""),P=s(!1),j=null==(d=r.$props.multiple)||d,O=p((()=>{var e;return q(null!=(e=n.data.children)?e:[],n.fieldNames.id)}));let A=z(g,n.fieldNames.id),$=new Set(A);const U=O.value.filter((e=>!$.has(e))),B=O.value.filter((e=>$.has(e)));let V=i.value.filter((e=>e==_.value.id));function R(e){!j&&k.value.length>=1&&(null==r||r.checkAll(!1)),e?(null==r||r.onSelectedParent([_.value.id,...B]),null==r||r.onSelected(U)):(null==r||r.onUnSelectedParent([_.value.id,...B]),null==r||r.onUnSelected(U)),null==r||r.onCheck({checked:e,data:N(n.data)})}return O.value.length>0&&V.length>0&&j&&(null==r||r.onSelected(U),null==r||r.onSelectedParent(B)),N(_.value.id),v((()=>function(){let e=new Set([...k.value,...i.value]),l=O.value.filter((l=>e.has(l)));return l.length==O.value.length?(P.value=!1,void(C.value=_.value.id)):l.length>0?(P.value=!0,void(C.value="")):void(0==l.length&&(P.value=!1,C.value=""))}())),T((()=>C.value),((e,l)=>{let a=new Set([...k.value,...i.value]),t=O.value.filter((e=>a.has(e)));t.length!=O.value.length?(t.length>0||0==t.length)&&(null==r||r.onUnSelectedParent([_.value.id])):null==r||r.onSelectedParent([_.value.id])})),l({setStatus:function(){var e;!0!==_.value.disabled&&(null==(e=o.value)||e.hanlerClick())}}),(e,l)=>{const a=S;return m(),h(a,{class:"flex flex-row flex-row-center-start"},{default:x((()=>[w(I)?(m(),h(E,{key:0,followTheme:n.followTheme,closeAni:"",color:w(_).color,indeterminate:P.value,onChange:R,disabled:w(_).disabled,modelValue:C.value,"onUpdate:modelValue":l[0]||(l[0]=e=>C.value=e),value:w(_)[n.fieldNames.id],ref_key:"checkboxRef",ref:o},null,8,["followTheme","color","indeterminate","disabled","modelValue","value"])):y("v-if",!0)])),_:1})}}}),L=i({__name:"tree-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["textClick"],setup(e,{emit:l}){var a,t,d,n;const o=e,u=s(null),r=s(null),i=null!=(t=null==(a=f())?void 0:a.proxy)?t:null,c=s(!1);let v=i.$parent;for(;v&&"tmTree"!=(null==v?void 0:v.TreeParaentName)&&v;)v=null!=(d=null==v?void 0:v.$parent)?d:void 0;const N=null!=(n=null==v?void 0:v.$props.color)?n:"primary",T=p((()=>{var e,l;return{icon:null!=(e=o.data.icon)?e:"",color:o.data.color||N,disabled:null!=(l=o.data.disabled)&&l,text:o.data[o.fieldNames.text],id:o.data[o.fieldNames.id]}}));return(e,a)=>{const t=S;return m(),h(t,{class:"flex flex-row flex-row-center-start"},{default:x((()=>[o.data.children?y("v-if",!0):(m(),h(B,{key:0,onChange:a[0]||(a[0]=e=>c.value=e),ref_key:"parentNodeRefNode",ref:r,followTheme:o.followTheme,fieldNames:o.fieldNames,data:o.data},null,8,["followTheme","fieldNames","data"])),o.data.children?(m(),h(D,{key:1,ref_key:"parentNodeRef",ref:u,followTheme:o.followTheme,fieldNames:o.fieldNames,data:o.data},null,8,["followTheme","fieldNames","data"])):y("v-if",!0),w(T).icon?(m(),h($,{key:2,_class:"pr-16",color:w(T).color,"font-size":28,name:w(T).icon},null,8,["color","name"])):y("v-if",!0),k(A,{color:c.value?"primary":"",_class:w(T).disabled&&!o.data.children?"opacity-7":"",onClick:a[1]||(a[1]=e=>{return a=w(T),o.data.children||null==(t=r.value)||t.setStatus(),void l("textClick",a);var a,t}),"font-size":28,label:w(T).text},null,8,["color","_class","label"])])),_:1})}}}),M=i({__name:"expanded-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Object,default:()=>{},required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["textClick"],setup(e,{expose:l,emit:a}){var t,d,n;const o=e,{proxy:u}=f();let r=u.$parent;for(;r&&"tmTree"!=(null==r?void 0:r.TreeParaentName)&&r;)r=null!=(t=null==r?void 0:r.$parent)?t:void 0;const i=c("TreePareantSelectedExpandedId",s([])),T=null!=(d=null==r?void 0:r.$props.expandedIconOpen)?d:"tmicon-sort-down",_=null!=(n=null==r?void 0:r.$props.expandedIconClose)?n:"tmicon-caret-right",g=p((()=>o.data)),I=s("");function C(){I.value=I.value?"":g.value[o.fieldNames.id],I.value?null==r||r.onExpand({data:N(g.value),expand:!0}):null==r||r.onUnExpand({data:N(g.value),expand:!1})}return v((()=>function(){var e;let l=i.value.filter((e=>e==g.value[o.fieldNames.id]));I.value=null!=(e=l[0])?e:""}())),l({setStatus:function(){C(g.value[o.fieldNames.id])},filedId:g.value[o.fieldNames.id]}),(e,l)=>{const t=S;return m(),h(t,null,{default:x((()=>[k(t,{class:"flex flex-row flex-row-center-start"},{default:x((()=>[w(g).children?(m(),h($,{key:0,onClick:l[0]||(l[0]=e=>C(w(g)[o.fieldNames.id])),"font-size":26,name:I.value?w(T):w(_)},null,8,["name"])):y("v-if",!0),b(e.$slots,"default")])),_:3}),w(g).children&&I.value?(m(),h(t,{key:0},{default:x((()=>[k(F,{onTextClick:l[1]||(l[1]=e=>a("textClick",e)),followTheme:o.followTheme,fieldNames:o.fieldNames,data:w(g).children},null,8,["followTheme","fieldNames","data"])])),_:1})):y("v-if",!0)])),_:3})}}}),F=i({__name:"base-node",props:{followTheme:{type:[Boolean,String],default:!0},data:{type:Array,default:()=>[],required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})}},emits:["textClick"],setup(e,{emit:l}){const a=e,t=s(null),d=p((()=>a.data));return(e,n)=>{const o=S;return m(),h(o,{class:"pa-24"},{default:x((()=>[(m(!0),_(I,null,g(w(d),((e,d)=>(m(),h(o,{key:d},{default:x((()=>[k(M,{followTheme:a.followTheme,fieldNames:a.fieldNames,data:e,ref_for:!0,ref_key:"expandedNodeRef",ref:t,onTextClick:n[0]||(n[0]=e=>l("textClick",e))},{default:x((()=>[k(L,{onTextClick:d=>function(e,d){var n;if(l("textClick",e),d&&d.children)if(Array.isArray(t.value)){let e=t.value.find((e=>(null==e?void 0:e.filedId)==d[a.fieldNames.id]));e&&(null==e||e.setStatus())}else null==(n=t.value)||n.setStatus()}(d,e),followTheme:a.followTheme,fieldNames:a.fieldNames,data:e},null,8,["onTextClick","followTheme","fieldNames","data"])])),_:2},1032,["followTheme","fieldNames","data"])])),_:2},1024)))),128))])),_:1})}}}),J=i({__name:"tm-tree",props:{followTheme:{type:[Boolean,String],default:!0},color:{type:String,default:"primary"},expandedIconOpen:{type:String,default:"tmicon-sort-down"},expandedIconClose:{type:String,default:"tmicon-caret-right"},checkable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},expandedId:{type:Array,default:()=>[]},defaultExpandedId:{type:Array,default:()=>[]},selectedId:{type:Array,default:()=>[]},defaultSelectedId:{type:Array,default:()=>[]},data:{type:Array,default:()=>[],required:!0},fieldNames:{type:Object,default:()=>({id:"id",text:"text"})},showLine:{type:[Boolean,String],default:!0}},emits:["node-click","check","expand","update:selectedId","update:expandedId"],setup(e,{expose:l,emit:a}){const t=e;let d=s(t.data),n=[...q(t.data,t.fieldNames.id)],o=z(t.data,t.fieldNames.id);const i=s([...new Set([...t.defaultSelectedId,...t.selectedId])]),f=s([...new Set([...t.defaultExpandedId,...t.expandedId])]),c=s([]);!t.multiple&&i.value.length>=1&&(i.value=[i.value[0]]);let v=new Set(o);c.value=i.value.filter((e=>v.has(e))),i.value=i.value.filter((e=>!v.has(e)));const y=new Set(f.value);function b(e){i.value=[...new Set([...i.value,...e])],a("update:selectedId",i.value)}function _(e){let l=new Set(e);i.value=[...new Set([...i.value].filter((e=>!l.has(e))))],a("update:selectedId",i.value)}function g(e){c.value=[...new Set([...c.value,...e])]}function I(e){let l=new Set(e);c.value=[...new Set([...c.value].filter((e=>!l.has(e))))]}function j(e){return V(N(t.data),e,t.fieldNames.id)}return f.value=n.filter((e=>y.has(e))),C("TreePareantSelectedIds",P(i)),C("TreePareantSelectedExpandedId",P(f)),C("TreeParentIds",P(c)),T([()=>t.expandedId],(()=>{f.value=[...t.expandedId]})),T([()=>t.data],(()=>{d.value=t.data,n=[...q(t.data)],o=z(t.data,t.fieldNames.id);let e=new Set(o);c.value=i.value.filter((l=>e.has(l)));let l=new Set(i.value),u=n.filter((e=>l.has(e)));i.value=u.filter((l=>!e.has(l))),a("update:selectedId",i.value);let r=new Set(f.value);f.value=n.filter((e=>r.has(e))),a("update:expandedId",f.value)}),{deep:!0}),C("TreeNodeCheckable",p((()=>t.checkable))),l({TreeParaentName:"tmTree",onUnSelected:_,onSelected:b,onCheck:function(e){a("check",e)},onExpand:function(e){f.value=[...new Set([...f.value,e.data[t.fieldNames.id]])],a("expand",r(u({},e.data),{expanded:e.expand})),a("update:expandedId",f.value)},onUnExpand:function(e){f.value=[...new Set([...f.value].filter((l=>l!=e.data[t.fieldNames.id])))],a("expand",r(u({},e.data),{expanded:e.expand})),a("update:expandedId",f.value)},onSelectedParent:g,onUnSelectedParent:I,getAllListData:function(){return N(t.data)},checkAll:function(e=!0){1==e?(b(n),g(o)):(i.value=[],I(o)),a("update:selectedId",[...i.value,...c.value])},checkNode:function(e,l){if(!new Set(n).has(e))return console.error("不存在该节点"),!1;let d=R(N(t.data),e,t.fieldNames.id);if(d){let a=q(d.children,t.fieldNames.id),n=new Set(o),u=[...a,e].filter((e=>n.has(e))),r=[...a,e].filter((e=>!n.has(e)));1==l?(b(r),g(u)):(_(r),I(u))}else 1==l?b([e]):_([e]);return a("update:selectedId",[...i.value,...c.value]),!0},expandAll:function(e=!0){let l=z(N(t.data),t.fieldNames.id);f.value=e?[...new Set([...f.value,...l])]:[],a("update:expandedId",f.value)},expandNode:function(e,l){return new Set(n).has(e)?R(N(t.data,t.fieldNames.id),e)?(f.value=1==l?[...new Set([...f.value,e])]:[...new Set(f.value.filter((l=>l!=e)))],a("update:expandedId",f.value),!0):(console.error("该节点非父节点"),!1):(console.error("不存在该节点"),!1)},getCheckedNodes:function(e="all"){return"all"==e?[...N(i.value),...c.value]:"parent"==e?N(c.value):"children"==e?N(i.value):[]},getExpandedNodes:function(){return N(f.value)},getNodePath:j,showNode:function(e){let l=j(e);R(N(t.data),e,t.fieldNames.id)||(l=l.filter((l=>l!=e))),f.value=[...new Set([...f.value,...l])],a("update:expandedId",f.value)}}),(e,l)=>{const n=S;return m(),h(n,null,{default:x((()=>[k(F,{onTextClick:l[0]||(l[0]=e=>a("node-click",e)),followTheme:t.followTheme,fieldNames:t.fieldNames,data:w(d)},null,8,["followTheme","fieldNames","data"])])),_:1})}}}),Q=i({__name:"tree",setup(e){const l=s(function e(l="0",a=2){const t=[];for(let d=0;d<5;d+=1){const n=`${l}-${d}`,o={text:"选项"+n,id:n,disabled:1==d};a>0&&(o.children=e(n,a-1)),t.push(o)}return t}());function a(e){console.log(e)}return(e,t)=>(m(),h(j,null,{default:x((()=>[k(O,null,{default:x((()=>[k(A,{"font-size":30,_class:"font-weight-b",label:"基础示例,更多见文档"}),k(U),k(J,{onNodeClick:a,data:l.value},null,8,["data"])])),_:1})])),_:1}))}});export{Q as default};
