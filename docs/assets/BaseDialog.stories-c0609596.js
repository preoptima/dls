import{m as Ze,h as E,F as Pe,q as D,s as N,u as y,v,x as O,y as L,z as F,w as J,A as R,T as Je,k as Qe,B as et,C as tt,D as te,E as he,G as ne,n as nt,o as ye,H as lt,e as rt,t as ot,d as at,r as it}from"./vue.esm-bundler-a71739a9.js";import{_ as ut}from"./_plugin-vue_export-helper-c27b6911.js";import{B as st}from"./BaseButton-1115f9b2.js";function C(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,C),l}var oe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(oe||{}),dt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(dt||{});function $({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...r}){var o;let a=Le(l,n),i=Object.assign(r,{props:a});if(e||t&2&&a.static)return le(i);if(t&1){let u=(o=a.unmount)==null||o?0:1;return C(u,{0(){return null},1(){return le({...r,props:{...a,hidden:!0,style:{display:"none"}}})}})}return le(i)}function le({props:e,attrs:t,slots:n,slot:l,name:r}){var o,a;let{as:i,...u}=ct(e,["unmount","static"]),s=(o=n.default)==null?void 0:o.call(n,l),d={};if(l){let m=!1,p=[];for(let[c,f]of Object.entries(l))typeof f=="boolean"&&(m=!0),f===!0&&p.push(c);m&&(d["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(s=De(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[m,...p]=s??[];if(!ft(m)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(g=>g.trim()).filter((g,k,q)=>q.indexOf(g)===k).sort((g,k)=>g.localeCompare(k)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let c=Le((a=m.props)!=null?a:{},u),f=Ze(m,c);for(let g in c)g.startsWith("on")&&(f.props||(f.props={}),f.props[g]=c[g]);return f}return Array.isArray(s)&&s.length===1?s[0]:s}return E(i,Object.assign({},u,d),{default:()=>s})}function De(e){return e.flatMap(t=>t.type===Pe?De(t.children):[t])}function Le(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let r in l)r.startsWith("on")&&typeof l[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(l[r])):t[r]=l[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](r,...o){let a=n[l];for(let i of a){if(r instanceof Event&&r.defaultPrevented)return;i(r,...o)}}});return t}function ct(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function ft(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let pt=0;function mt(){return++pt}function ce(){return mt()}var Fe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Fe||{});function b(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let vt=Symbol("Context");var U=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(U||{});function gt(){return D(vt,null)}var ht=Object.defineProperty,yt=(e,t,n)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t,n)=>(yt(e,typeof t!="symbol"?t+"":t,n),n);class wt{constructor(){we(this,"current",this.detect()),we(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Q=new wt;function j(e){if(Q.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(P||{}),$e=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))($e||{}),bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(bt||{});function Et(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ae=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ae||{});function St(e,t=0){var n;return e===((n=j(e))==null?void 0:n.body)?!1:C(t,{0(){return e.matches(ae)},1(){let l=e;for(;l!==null;){if(l.matches(ae))return!0;l=l.parentElement}return!1}})}var Tt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Tt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function B(e){e==null||e.focus({preventScroll:!0})}let Ot=["textarea","input"].join(",");function Pt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ot))!=null?n:!1}function Dt(e,t=n=>n){return e.slice().sort((n,l)=>{let r=t(n),o=t(l);if(r===null||o===null)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:r=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,i=Array.isArray(e)?n?Dt(e):e:Et(e);r.length>0&&i.length>1&&(i=i.filter(f=>!r.includes(f))),l=l??a.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(l))-1;if(t&4)return Math.max(0,i.indexOf(l))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},m=0,p=i.length,c;do{if(m>=p||m+p<=0)return 0;let f=s+m;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}c=i[f],c==null||c.focus(d),m+=u}while(c!==a.activeElement);return t&6&&Pt(c)&&c.select(),2}function z(e,t,n){Q.isServer||N(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function xe(e,t,n){Q.isServer||N(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Lt(e,t,n=v(()=>!0)){function l(o,a){if(!n.value||o.defaultPrevented)return;let i=a(o);if(i===null||!i.getRootNode().contains(i))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:b(s);if(d!=null&&d.contains(i)||o.composed&&o.composedPath().includes(d))return}return!St(i,Ae.Loose)&&i.tabIndex!==-1&&o.preventDefault(),t(o,i)}let r=y(null);z("pointerdown",o=>{var a,i;n.value&&(r.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),z("mousedown",o=>{var a,i;n.value&&(r.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),z("click",o=>{r.value&&(l(o,()=>r.value),r.value=null)},!0),z("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),xe("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Z||{});let ie=O({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:l,...r}=e,o={"aria-hidden":(l&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return $({ourProps:o,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function Ft(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function fe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function pe(){let e=[],t={addEventListener(n,l,r,o){return n.addEventListener(l,r,o),t.add(()=>n.removeEventListener(l,r,o))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return fe(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let o=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:o})})},group(n){let l=pe();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}var W=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(W||{});function $t(){let e=y(0);return xe("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Be(e,t,n,l){Q.isServer||N(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}function At(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ce(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=b(n);l instanceof HTMLElement&&t.add(l)}return t}var Ne=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ne||{});let I=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:y(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=y(null);l({el:r,$el:r});let o=v(()=>j(r)),a=y(!1);L(()=>a.value=!0),F(()=>a.value=!1),Bt({ownerDocument:o},v(()=>a.value&&!!(e.features&16)));let i=Ct({ownerDocument:o,container:r,initialFocus:v(()=>e.initialFocus)},v(()=>a.value&&!!(e.features&2)));Nt({ownerDocument:o,container:r,containers:e.containers,previousActiveElement:i},v(()=>a.value&&!!(e.features&8)));let u=$t();function s(c){let f=b(r);f&&(g=>g())(()=>{C(u.value,{[W.Forwards]:()=>{X(f,P.First,{skipElements:[c.relatedTarget]})},[W.Backwards]:()=>{X(f,P.Last,{skipElements:[c.relatedTarget]})}})})}let d=y(!1);function m(c){c.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(c){if(!a.value)return;let f=Ce(e.containers);b(r)instanceof HTMLElement&&f.add(b(r));let g=c.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&(ke(f,g)||(d.value?X(b(r),C(u.value,{[W.Forwards]:()=>P.Next,[W.Backwards]:()=>P.Previous})|P.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&B(c.target)))}return()=>{let c={},f={ref:r,onKeydown:m,onFocusout:p},{features:g,initialFocus:k,containers:q,..._}=e;return E(Pe,[!!(g&4)&&E(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Z.Focusable}),$({ourProps:f,theirProps:{...t,..._},slot:c,attrs:t,slots:n,name:"FocusTrap"}),!!(g&4)&&E(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Z.Focusable})])}}}),{features:Ne}),A=[];At(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&A[0]!==t.target&&(A.unshift(t.target),A=A.filter(n=>n!=null&&n.isConnected),A.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function xt(e){let t=y(A.slice());return J([e],([n],[l])=>{l===!0&&n===!1?fe(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=A.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Bt({ownerDocument:e},t){let n=xt(t);L(()=>{N(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&B(n())},{flush:"post"})}),F(()=>{t.value&&B(n())})}function Ct({ownerDocument:e,container:t,initialFocus:n},l){let r=y(null),o=y(!1);return L(()=>o.value=!0),F(()=>o.value=!1),L(()=>{J([t,n,l],(a,i)=>{if(a.every((s,d)=>(i==null?void 0:i[d])===s)||!l.value)return;let u=b(t);u&&fe(()=>{var s,d;if(!o.value)return;let m=b(n),p=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===p){r.value=p;return}}else if(u.contains(p)){r.value=p;return}m?B(m):X(u,P.First|P.NoScroll)===$e.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function Nt({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var o;Be((o=e.value)==null?void 0:o.defaultView,"focus",a=>{if(!r.value)return;let i=Ce(n);b(t)instanceof HTMLElement&&i.add(b(t));let u=l.value;if(!u)return;let s=a.target;s&&s instanceof HTMLElement?ke(i,s)?(l.value=s,B(s)):(a.preventDefault(),a.stopPropagation(),B(u)):B(l.value)},!0)}function ke(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let re=new Map,V=new Map;function be(e,t=y(!0)){N(n=>{var l;if(!t.value)return;let r=b(e);if(!r)return;n(function(){var a;if(!r)return;let i=(a=V.get(r))!=null?a:1;if(i===1?V.delete(r):V.set(r,i-1),i!==1)return;let u=re.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,re.delete(r))});let o=(l=V.get(r))!=null?l:0;V.set(r,o+1),o===0&&(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let Me=Symbol("ForcePortalRootContext");function kt(){return D(Me,!1)}let Ee=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return R(Me,e.force),()=>{let{force:l,...r}=e;return $({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Mt(e){let t=j(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Rt=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=y(null),r=v(()=>j(l)),o=kt(),a=D(Re,null),i=y(o===!0||a==null?Mt(l.value):a.resolveTarget());N(()=>{o||a!=null&&(i.value=a.resolveTarget())});let u=D(ue,null);return L(()=>{let s=b(l);s&&u&&F(u.register(s))}),F(()=>{var s,d;let m=(s=r.value)==null?void 0:s.getElementById("headlessui-portal-root");m&&i.value===m&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return E(Je,{to:i.value},$({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),ue=Symbol("PortalParentContext");function jt(){let e=D(ue,null),t=y([]);function n(o){return t.value.push(o),e&&e.register(o),()=>l(o)}function l(o){let a=t.value.indexOf(o);a!==-1&&t.value.splice(a,1),e&&e.unregister(o)}let r={register:n,unregister:l,portals:t};return[t,O({name:"PortalWrapper",setup(o,{slots:a}){return R(ue,r),()=>{var i;return(i=a.default)==null?void 0:i.call(a)}}})]}let Re=Symbol("PortalGroupContext"),_t=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=Qe({resolveTarget(){return e.target}});return R(Re,l),()=>{let{target:r,...o}=e;return $({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),je=Symbol("StackContext");var se=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(se||{});function Ht(){return D(je,()=>{})}function It({type:e,enabled:t,element:n,onUpdate:l}){let r=Ht();function o(...a){l==null||l(...a),r(...a)}L(()=>{J(t,(a,i)=>{a?o(0,e,n):i===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),F(()=>{t.value&&o(1,e,n)}),R(je,o)}let Vt=Symbol("DescriptionContext");function Ut({slot:e=y({}),name:t="Description",props:n={}}={}){let l=y([]);function r(o){return l.value.push(o),()=>{let a=l.value.indexOf(o);a!==-1&&l.value.splice(a,1)}}return R(Vt,{register:r,slot:e,name:t,props:n}),v(()=>l.value.length>0?l.value.join(" "):void 0)}function Wt(e){let t=et(e.getSnapshot());return F(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function qt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...o){let a=t[r].call(n,...o);a&&(n=a,l.forEach(i=>i()))}}}function Gt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,o=e-r;n.style(l,"paddingRight",`${o}px`)}}}function zt(){if(!Ft())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function r(a){return l.containers.flatMap(i=>i()).some(i=>i.contains(a))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=pe();a.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>a.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:u}=new URL(i.href),s=t.querySelector(u);s&&!r(s)&&(o=s)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!r(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function Kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Yt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let x=qt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:pe(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Yt(n)},r=[zt(),Gt(),Kt()];r.forEach(({before:o})=>o==null?void 0:o(l)),r.forEach(({after:o})=>o==null?void 0:o(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});x.subscribe(()=>{let e=x.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&x.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&x.dispatch("TEARDOWN",n)}});function Xt(e,t,n){let l=Wt(x),r=v(()=>{let o=e.value?l.value.get(e.value):void 0;return o?o.count>0:!1});return J([e,t],([o,a],[i],u)=>{if(!o||!a)return;x.dispatch("PUSH",o,n);let s=!1;u(()=>{s||(x.dispatch("POP",i??o,n),s=!0)})},{immediate:!0}),r}function Zt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=y(null),r=j(l);function o(){var a;let i=[];for(let u of e)u!==null&&(u instanceof HTMLElement?i.push(u):"value"in u&&u.value instanceof HTMLElement&&i.push(u.value));if(t!=null&&t.value)for(let u of t.value)i.push(u);for(let u of(a=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?a:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(b(l))||i.some(s=>u.contains(s))||i.push(u));return i}return{resolveContainers:o,contains(a){return o().some(i=>i.contains(a))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:E(ie,{features:Z.Hidden,ref:l})}}}var Jt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Jt||{});let de=Symbol("DialogContext");function me(e){let t=D(de,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,me),n}return t}let K="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Qt=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:K},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ce()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var o;let a=y(!1);L(()=>{a.value=!0});let i=y(0),u=gt(),s=v(()=>e.open===K&&u!==null?(u.value&U.Open)===U.Open:e.open),d=y(null),m=v(()=>j(d));if(r({el:d,$el:d}),!(e.open!==K||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===K?void 0:e.open}`);let p=v(()=>a.value&&s.value?0:1),c=v(()=>p.value===0),f=v(()=>i.value>1),g=D(de,null)!==null,[k,q]=jt(),{resolveContainers:_,mainTreeNodeRef:ve,MainTreeNode:Ie}=Zt({portals:k,defaultContainers:[v(()=>{var h;return(h=H.panelRef.value)!=null?h:d.value})]}),Ve=v(()=>f.value?"parent":"leaf"),ge=v(()=>u!==null?(u.value&U.Closing)===U.Closing:!1),Ue=v(()=>g||ge.value?!1:c.value),We=v(()=>{var h,w,S;return(S=Array.from((w=(h=m.value)==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).find(T=>T.id==="headlessui-portal-root"?!1:T.contains(b(ve))&&T instanceof HTMLElement))!=null?S:null});be(We,Ue);let qe=v(()=>f.value?!0:c.value),Ge=v(()=>{var h,w,S;return(S=Array.from((w=(h=m.value)==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(T=>T.contains(b(ve))&&T instanceof HTMLElement))!=null?S:null});be(Ge,qe),It({type:"Dialog",enabled:v(()=>p.value===0),element:d,onUpdate:(h,w)=>{if(w==="Dialog")return C(h,{[se.Add]:()=>i.value+=1,[se.Remove]:()=>i.value-=1})}});let ze=Ut({name:"DialogDescription",slot:v(()=>({open:s.value}))}),G=y(null),H={titleId:G,panelRef:y(null),dialogState:p,setTitleId(h){G.value!==h&&(G.value=h)},close(){t("close",!1)}};R(de,H);let Ke=v(()=>!(!c.value||f.value));Lt(_,(h,w)=>{H.close(),tt(()=>w==null?void 0:w.focus())},Ke);let Ye=v(()=>!(f.value||p.value!==0));Be((o=m.value)==null?void 0:o.defaultView,"keydown",h=>{Ye.value&&(h.defaultPrevented||h.key===Fe.Escape&&(h.preventDefault(),h.stopPropagation(),H.close()))});let Xe=v(()=>!(ge.value||p.value!==0||g));return Xt(m,Xe,h=>{var w;return{containers:[...(w=h.containers)!=null?w:[],_]}}),N(h=>{if(p.value!==0)return;let w=b(d);if(!w)return;let S=new ResizeObserver(T=>{for(let ee of T){let M=ee.target.getBoundingClientRect();M.x===0&&M.y===0&&M.width===0&&M.height===0&&H.close()}});S.observe(w),h(()=>S.disconnect())}),()=>{let{id:h,open:w,initialFocus:S,...T}=e,ee={...n,ref:d,id:h,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":ze.value},M={open:p.value===0};return E(Ee,{force:!0},()=>[E(Rt,()=>E(_t,{target:d.value},()=>E(Ee,{force:!1},()=>E(I,{initialFocus:S,containers:_,features:c.value?C(Ve.value,{parent:I.features.RestoreFocus,leaf:I.features.All&~I.features.FocusLock}):I.features.None},()=>E(q,{},()=>$({ourProps:ee,theirProps:{...T,...n},slot:M,attrs:n,slots:l,visible:p.value===0,features:oe.RenderStrategy|oe.Static,name:"Dialog"})))))),E(Ie)])}}}),en=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${ce()}`}},setup(e,{attrs:t,slots:n,expose:l}){let r=me("DialogPanel");l({el:r.panelRef,$el:r.panelRef});function o(a){a.stopPropagation()}return()=>{let{id:a,...i}=e,u={id:a,ref:r.panelRef,onClick:o};return $({ourProps:u,theirProps:i,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),tn=O({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${ce()}`}},setup(e,{attrs:t,slots:n}){let l=me("DialogTitle");return L(()=>{l.setTitleId(e.id),F(()=>l.setTitleId(null))}),()=>{let{id:r,...o}=e;return $({ourProps:{id:r},theirProps:o,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});const _e={components:{DialogComponent:Qt,DialogPanel:en,DialogTitle:tn},props:{open:{type:Boolean,default:!1},title:{type:String,default:""},size:{type:String,default:""}},data(){return{isOpen:this.open}},watch:{open(e){this.isOpen=e}},methods:{setIsOpen(e){this.isOpen=e}}};function nn(e,t,n,l,r,o){const a=te("DialogTitle"),i=te("DialogPanel"),u=te("DialogComponent");return ye(),he(u,{open:r.isOpen,class:nt(["BaseDialog",n.size]),onClose:o.setIsOpen},{default:ne(()=>[lt(i,null,{default:ne(()=>[n.title?(ye(),he(a,{key:0,class:"title heading-02"},{default:ne(()=>[rt(ot(n.title),1)]),_:1})):at("",!0),it(e.$slots,"default")]),_:3})]),_:3},8,["open","class","onClose"])}const He=ut(_e,[["render",nn]]);_e.__docgenInfo={exportName:"default",displayName:"BaseDialog",description:"",tags:{},props:[{name:"open",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dls/dls/src/components/dls/BaseDialog.vue"]};const an={title:"Components/BaseDialog",component:He},Y={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370"}},render:e=>({components:{BaseDialog:He,BaseButton:st},template:'<BaseDialog v-bind="args"><div class="ui-large-book" style="padding: 20px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</div><div style="text-align: right;"><BaseButton secondary style="margin-right: 16px;">Cancel</BaseButton><BaseButton>Submit</BaseButton></div></BaseDialog>',setup(){return{args:e}}}),argTypes:{size:{control:{type:"inline-radio"},options:[null,"sm","lg","xl"]}},args:{open:!0,title:"Title",size:null}};var Se,Te,Oe;Y.parameters={...Y.parameters,docs:{...(Se=Y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370'
    }
  },
  render: args => ({
    components: {
      BaseDialog,
      BaseButton
    },
    template: '<BaseDialog v-bind="args"><div class="ui-large-book" style="padding: 20px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</div><div style="text-align: right;"><BaseButton secondary style="margin-right: 16px;">Cancel</BaseButton><BaseButton>Submit</BaseButton></div></BaseDialog>',
    setup() {
      return {
        args
      };
    }
  }),
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      },
      options: [null, 'sm', 'lg', 'xl']
    }
  },
  args: {
    open: true,
    title: 'Title',
    size: null
  }
}`,...(Oe=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};const un=["Primary"];export{Y as Primary,un as __namedExportsOrder,an as default};
//# sourceMappingURL=BaseDialog.stories-c0609596.js.map
