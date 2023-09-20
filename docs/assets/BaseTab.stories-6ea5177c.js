import{c as u,r as b,b as _,t as f,n as g,o as y}from"./vue.esm-bundler-a71739a9.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const i={name:"BaseTab",props:{selected:{type:Boolean,default:!1},label:{type:String,required:!0}}},T={class:"ui-small-book"};function S(s,v,r,w,x,h){return y(),u("button",{class:g({selected:r.selected})},[b(s.$slots,"default",{},void 0,!0),_("span",T,f(r.label),1)],2)}const m=B(i,[["render",S],["__scopeId","data-v-b585b29f"]]);i.__docgenInfo={displayName:"BaseTab",exportName:"default",description:"",tags:{},props:[{name:"selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/dls/dls/src/components/dls/BaseTab.vue"]};const N={title:"Components/BaseTab",component:m},t={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770"}},render:s=>({components:{BaseTab:m},template:'<BaseTab  v-bind="args"><span class="material-symbols-outlined"> add_circle </span></BaseTab>',setup(){return{args:s}}}),args:{label:"Tab"}},e={...t},a={...t,args:{...t.args,selected:!0}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...base
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    selected: true
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const P=["Primary","Selected"];export{e as Primary,a as Selected,P as __namedExportsOrder,N as default};
//# sourceMappingURL=BaseTab.stories-6ea5177c.js.map
