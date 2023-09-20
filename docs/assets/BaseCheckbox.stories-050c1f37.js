import{c as n,b as c,n as k,e as B,t as l,d as C,F as v,o as d}from"./vue.esm-bundler-a71739a9.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const y={name:"BaseCheckbox",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},errorMsg:{type:String,default:""}}},S={class:"ui-medium-book"},V=["disabled"],w={key:0,class:"error ui-small-book"};function N(t,D,e,E,F,L){return d(),n(v,null,[c("label",S,[c("input",{type:"checkbox",name:"checkbox",disabled:e.disabled,class:k({error:e.errorMsg})},null,10,V),B(" "+l(e.label),1)]),e.errorMsg?(d(),n("span",w,l(e.errorMsg),1)):C("",!0)],64)}const h=M(y,[["render",N],["__scopeId","data-v-4951f606"]]);y.__docgenInfo={displayName:"BaseCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errorMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dls/dls/src/components/dls/BaseCheckbox.vue"]};const R={title:"Components/BaseCheckbox",component:h},a={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770"}},render:t=>({components:{BaseCheckbox:h},template:'<BaseCheckbox v-bind="args" />',setup(){return{args:t}}}),args:{disabled:!1,label:"Checkbox item",errorMsg:""}},s={...a},r={...a,args:{...a.args,disabled:!0}},o={...a,args:{...a.args,errorMsg:"Lorem ipsum invalid text caption"}};var i,m,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...base
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    disabled: true
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var _,f,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    errorMsg: 'Lorem ipsum invalid text caption'
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const T=["Primary","Disabled","Error"];export{r as Disabled,o as Error,s as Primary,T as __namedExportsOrder,R as default};
//# sourceMappingURL=BaseCheckbox.stories-050c1f37.js.map
