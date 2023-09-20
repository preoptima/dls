import{c as n,b as d,n as v,e as x,t as i,d as M,F as S,o as l}from"./vue.esm-bundler-a71739a9.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const B={name:"BaseRadio",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},errorMsg:{type:String,default:""}}},k={class:"ui-medium-book"},V=["disabled"],w={key:0,class:"error ui-small-book"};function N(t,C,e,D,E,F){return l(),n(S,null,[d("label",k,[d("input",{type:"radio",disabled:e.disabled,class:v({error:e.errorMsg})},null,10,V),x(" "+i(e.label),1)]),e.errorMsg?(l(),n("span",w,i(e.errorMsg),1)):M("",!0)],64)}const R=h(B,[["render",N],["__scopeId","data-v-14040681"]]);B.__docgenInfo={displayName:"BaseRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errorMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dls/dls/src/components/dls/BaseRadio.vue"]};const I={title:"Components/BaseRadio",component:R},a={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770"}},render:t=>({components:{BaseRadio:R},template:'<BaseRadio v-bind="args" />',setup(){return{args:t}}}),args:{disabled:!1,label:"Radio button item",errorMsg:""}},s={...a},r={...a,args:{...a.args,disabled:!0}},o={...a,args:{...a.args,errorMsg:"Lorem ipsum invalid text caption"}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...base
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,_;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    disabled: true
  }
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    errorMsg: 'Lorem ipsum invalid text caption'
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const T=["Primary","Disabled","Error"];export{r as Disabled,o as Error,s as Primary,T as __namedExportsOrder,I as default};
//# sourceMappingURL=BaseRadio.stories-3715affa.js.map
