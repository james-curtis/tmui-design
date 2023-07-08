var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,s=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&n(e,l,t[l]);if(a)for(var l of a(t))r.call(t,l)&&n(e,l,t[l]);return e};import{d as u,c,r as i,H as d,m as p,Q as f,I as m,o as v,a as h,w as g,U as b,n as w,u as x,b as y,j as T,g as _,k as C,G as D,i as V,a9 as X,aa as Y,_ as S}from"./index-6b165856.js";import{e as P,t as $}from"./tm-app.d6cf2f93.js";import{t as j}from"./tm-sheet.3639b36a.js";import{t as k}from"./tm-text.6c910eb0.js";import{_ as I}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";import{g as R}from"./getCanvas.fc323e9a.js";import{t as O}from"./tm-icon.65b53dc0.js";import{t as U}from"./tm-button.80fc9b3b.js";const G=u({__name:"tm-color-view",props:{width:{type:Number,default:500},height:{type:Number,default:500},color:{type:String,default:"primary"},modelValue:{type:String,default:"#FF0000"}},emits:["confirm","update:modelValue"],setup(e,{expose:a,emit:o}){var r,n;const u=e,S=null!=(n=null==(r=_())?void 0:r.proxy)?n:null;let $="c_"+uni.$tm.u.getUid(4);const j=c((()=>250)),k=c((()=>200));c((()=>uni.$tm.u.torpx(j.value-30)));let I=null,G=0,F=0,H=NaN;i(null);let L=d().devicePixelRatio;const N=i(!0);let A=P.cssToRgba(u.modelValue);const z=i(s({},A)),M=i(A.a||0);function E(){M.value=M.value<=0?0:M.value,M.value=M.value>=1?1:M.value;let e=P.rgbaToCss((a=s({},z.value),r={a:M.value},t(a,l(r))));var a,r;o("update:modelValue",e),C((()=>{o("confirm",e),uni.$tm.u.setClipboardData(e)}))}function J(e){}function K(e){}function Q(e){}function W(e,t,l,a=!0){if(e=e-G+15,t=t-F+15,1==l?(e=e<40?40:e,t=t<=2?2:t):(e=e<0?0:e,t=(t=t<0?0:t)>200?200:t),null==I?void 0:I.getImageData){let l=I.getImageData(e*L,t*L,1,1),[o,r,n,u]=l.data,c={r:o,g:r,b:n,a:1};a&&(z.value=s({},c)),e>=0&&e<=30&&t>=0&&t<=k.value&&q(P.rgbaToHsla(c).h)}else Y({canvasId:$,x:e,y:t,width:1,height:1,success(l){let[o,r,n,u]=l.data,c={r:o,g:r,b:n,a:1};a&&(z.value=s({},c)),e>=0&&e<=30&&t>=0&&t<=k.value&&q(P.rgbaToHsla(c).h)},fail(e){console.error(e)}},S)}function q(e=0){let t=j.value;for(let l=0;l<100;l++){let a=I.createLinearGradient(40,l,t-40,l);a.addColorStop(0,P.rgbaToCss(P.hslaToRgba({h:e,s:0,l:100-l,a:1}))),a.addColorStop(1,P.rgbaToCss(P.hslaToRgba({h:e,s:100,l:50-l/2,a:1}))),I.fillStyle=a,I.fillRect(40,2*(l+1),t-40,2*(l+1)),(null==I?void 0:I.draw)&&(null==I||I.draw(!0))}}function B(e){clearTimeout(H),H=setTimeout((function(){m().in(S).selectAll(".wrapper").boundingClientRect((t=>{if(Array.isArray(t)&&!(t.length<2))if(P.rgbaToHsla(z.value),0===e){W(t[0].left,t[0].top,0,!1),H=setTimeout((()=>{W(t[1].left,t[1].top,1)}),150)}else{W(t[1].left,t[1].top,1)}})).exec()}),200)}function Z(e){(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault()}return p((()=>{m().in(S).select("#"+$).boundingClientRect((e=>{var t,l;G=null!=(t=null==e?void 0:e.left)?t:0,F=null!=(l=null==e?void 0:e.top)?l:0,R(S,$,j.value,k.value).then((e=>{I=e.ctx,function(){return e=this,t=null,l=function*(){let e=k.value/3,t=30,l=0,a=I.createLinearGradient(t/2,0,t/2,e);a.addColorStop(0,"rgba(255,0,0,1)"),a.addColorStop(.5,"rgba(255,0,255,1)"),a.addColorStop(1,"rgba(0,0,255,1)"),I.fillStyle=a,I.fillRect(l,0,t,e),(null==I?void 0:I.draw)&&(null==I||I.draw());let o=I.createLinearGradient(t/2,e,t/2,2*e);o.addColorStop(0,"rgba(0,0,255,1)"),o.addColorStop(.5,"rgba(0,255,255,1)"),o.addColorStop(1,"rgba(0,255,0,1)"),I.fillStyle=o,I.fillRect(l,e,t,e),(null==I?void 0:I.draw)&&(null==I||I.draw(!0));let r=I.createLinearGradient(t/2,2*e,t/2,3*e);r.addColorStop(0,"rgba(0,255,0,1)"),r.addColorStop(.5,"rgba(255,255,1,1)"),r.addColorStop(1,"rgba(255,0,0,1)"),I.fillStyle=r,I.fillRect(l,2*e,t,e),(null==I?void 0:I.draw)&&(null==I||I.draw(!0))},new Promise(((a,o)=>{var r=e=>{try{s(l.next(e))}catch(t){o(t)}},n=e=>{try{s(l.throw(e))}catch(t){o(t)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,n);s((l=l.apply(e,t)).next())}));var e,t,l}(),q()}))})).exec()})),f((()=>u.modelValue),(()=>{let e=P.cssToRgba(u.modelValue);z.value=s({},e),M.value=e.a})),a({wxsCallPos:function(e,t){}}),(e,t)=>{const l=D,a=V,o=X;return v(),h(a,{onTouchmove:b(Z,["stop"]),class:"flex flex-col flex-col-top-center"},{default:g((()=>[N.value?(v(),h(a,{key:0,onTouchmove:b(Z,["stop"]),class:"overflow relative",ref:"webviewWk",style:w({width:`${x(j)}px`,height:`${x(k)}px`})},{default:g((()=>[y(l,{onTouchstart:J,onTouchmove:K,onTouchend:Q,class:"canvas",id:x($),"canvas-id":x($),style:w({width:`${x(j)}px`,height:`${x(k)}px`,"touch-action":"none"})},null,8,["id","canvas-id","style"]),y(a,{id:"wrapper",class:"absolute l-0 t-0 wrapper item",onTouchstart:e.colorTouch.startDrag,onTouchmove:e.colorTouch.onDrag,onTouchend:e.colorTouch.endDrag,onTouchcancel:e.colorTouch.endDrag},{default:g((()=>[y(a,{class:"itemwk",onTouchend:t[0]||(t[0]=e=>B(0)),onTouchmove:t[1]||(t[1]=e=>B(0))})])),_:1},8,["onTouchstart","onTouchmove","onTouchend","onTouchcancel"]),y(a,{id:"wrapper2",class:"absolute r-0 t-0 wrapper item",onTouchstart:e.colorTouch.startDrag2,onTouchmove:e.colorTouch.onDrag2,onTouchend:e.colorTouch.endDrag2,onTouchcancel:e.colorTouch.endDrag2},{default:g((()=>[y(a,{class:"itemwk",onTouchend:t[2]||(t[2]=e=>B(1)),onTouchmove:t[3]||(t[3]=e=>B(1))})])),_:1},8,["onTouchstart","onTouchmove","onTouchend","onTouchcancel"])])),_:1},8,["onTouchmove","style"])):T("v-if",!0),N.value?T("v-if",!0):(v(),h(a,{key:1,class:"flex flex-row flex-row-center-center"},{default:g((()=>[y(O,{name:"tmicon-shuaxin",spin:""})])),_:1})),y(a,{class:"flex flex-row flex-row-center-center mt-32",style:w({width:`${x(j)}px`})},{default:g((()=>[y(a,{class:"round-0 shadow-4",style:w({width:"30px",height:"60rpx",background:`rgba(${z.value.r},${z.value.g},${z.value.b},${M.value})`})},null,8,["style"]),y(a,{style:{width:"5px"}}),y(a,{style:w({width:x(j)-35+"px"})},{default:g((()=>[y(a,{class:"flex flex-row flex-row-center-start"},{default:g((()=>[y(o,{modelValue:z.value.r,"onUpdate:modelValue":t[4]||(t[4]=e=>z.value.r=e),class:"colorInput",style:w({width:(x(j)-30)/4-6+"px"})},null,8,["modelValue","style"]),y(o,{modelValue:z.value.g,"onUpdate:modelValue":t[5]||(t[5]=e=>z.value.g=e),class:"colorInput",style:w({width:(x(j)-30)/4-6+"px"})},null,8,["modelValue","style"]),y(o,{modelValue:z.value.b,"onUpdate:modelValue":t[6]||(t[6]=e=>z.value.b=e),class:"colorInput",style:w({width:(x(j)-30)/4-6+"px"})},null,8,["modelValue","style"]),y(o,{modelValue:M.value,"onUpdate:modelValue":t[7]||(t[7]=e=>M.value=e),class:"colorInput",style:w({width:(x(j)-30)/4-6+"px"})},null,8,["modelValue","style"])])),_:1})])),_:1},8,["style"])])),_:1},8,["style"]),y(a,{class:"mt-10",style:w({width:`${x(j)}px`})},{default:g((()=>[y(U,{color:u.color,onClick:E,block:"",label:"确认"},null,8,["color"])])),_:1},8,["style"])])),_:1},8,["onTouchmove"])}}});var F,H,L=function(e){H=(F=e).getState()};const N={startDrag:function(e,t){L(t);var l=e.touches[0];H.startX||(H.startX=l.clientX,H.startY=l.clientY)},onDrag:function(e,t){var l,a,o,r,n=e.touches[0];H.deltaX=n.clientX-H.startX,H.deltaY=n.clientY-H.startY,0!=H.deltaX&&(H.deltaX=0),H.deltaY<=-15&&(H.deltaY=-15),H.deltaY>182&&(H.deltaY=182),H.dragging=!0,l=H.deltaX,a=H.deltaY,o="translate3d("+l+"px, "+a+"px, 0)",r=H.dragging?"none":"transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)",F.selectComponent("#wrapper").setStyle({"-webkit-transform":o,"-webkit-transition":r,transform:o,transition:r}),F.callMethod("wxsCallPos",H.deltaX,H.deltaY),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()},endDrag:function(e,t){e.touches[0],H.dragging=!1},startDrag2:function(e,t){L(t);var l=e.touches[0];H.startX2||(H.startX2=l.clientX,H.startY2=l.clientY)},onDrag2:function(e,t){var l,a,o,r,n=e.touches[0];H.deltaX2=n.clientX-H.startX2,H.deltaY2=n.clientY-H.startY2,H.dragging=!0,H.deltaX2>5&&(H.deltaX2=5),H.deltaX2<-182&&(H.deltaX2=-182),H.deltaY2<=-2&&(H.deltaY2=-2),H.deltaY2>185&&(H.deltaY2=185),l=H.deltaX2,a=H.deltaY2,o="translate3d("+l+"px, "+a+"px, 0)",r=H.dragging?"none":"transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)",F.selectComponent("#wrapper2").setStyle({"-webkit-transform":o,"-webkit-transition":r,transform:o,transition:r}),F.callMethod("wxsCallPos",H.deltaX2,H.deltaY2)},endDrag2:function(e,t){e.touches[0],H.dragging=!1}},A=e=>{e.$wxs||(e.$wxs=[]),e.$wxs.push("colorTouch"),e.mixins||(e.mixins=[]),e.mixins.push({beforeCreate(){this.colorTouch=N}})};A(G);const z=S(G,[["__scopeId","data-v-507ee41a"]]),M=u({__name:"colorPicker",setup(e){const t=i("#00FF00");return(e,l)=>{const a=V;return v(),h($,null,{default:g((()=>[y(j,null,{default:g((()=>[y(k,{label:"颜色选择器,全端兼容.因实现兼容有点小复杂,故属性上我虽然提供了宽和高.但实际上没有用处.也请不要随意赋值.固定值即可.如果确实需要更改宽和高,请自行修改源码."}),y(k,{color:"red",label:"暂时还未实现双向绑定定位颜色位置功能."}),y(k,{label:t.value},null,8,["label"]),y(I)])),_:1}),y(a,{class:"pa-32 flex flex-row flex-row-center-center"},{default:g((()=>[y(z,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e)},null,8,["modelValue"])])),_:1})])),_:1})}}});export{M as default};
