import{c,b as p,t as d,n as h,d as k,o as i}from"./vue.esm-bundler-a71739a9.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const x={props:{step:{type:Number,required:!0},label:{type:String,required:!0},complete:{type:Boolean,default:!1},last:{type:Boolean,default:!1},current:{type:Boolean,default:!1}}},N={class:"step-indicator ui-large-bold"},V={class:"label"},q={key:0,class:"line"};function D(a,E,e,L,R,U){return i(),c("div",N,[p("div",{class:h(["step",{"complete material-symbols-outlined":e.complete,current:e.current}])},d(e.complete?"check_small":e.step),3),p("div",V,d(e.label),1),e.last?k("",!0):(i(),c("div",q))])}const l=w(x,[["render",D],["__scopeId","data-v-2ebfec98"]]);x.__docgenInfo={exportName:"default",displayName:"BaseStepIndicator",description:"",tags:{},props:[{name:"step",type:{name:"number"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"complete",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"last",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"current",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/dls/dls/src/components/dls/BaseStepIndicator.vue"]};const A={title:"Components/BaseStepIndicator",component:l},t={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770"}},render:a=>({components:{BaseStepIndicator:l},template:'<BaseStepIndicator  v-bind="args" />',setup(){return{args:a}}}),args:{step:1,label:"Label",complete:!1,last:!1}},s={...t,args:{...t.args,current:!0}},r={...t,args:{...t.args,complete:!0}},n={...t},o={...t,render:a=>({components:{BaseStepIndicator:l},template:'<div style="display: flex; align-items: center;"><BaseStepIndicator  v-bind="args" complete label="Completed step" step="1" /><BaseStepIndicator v-bind="args" current label="Current step" step="2" /><BaseStepIndicator v-bind="args" last label="Incomplete step" step="3" /></div>',setup(){return{args:a}}})};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    current: true
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,g,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...base,
  args: {
    ...base.args,
    complete: true
  }
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var y,v,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...base
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var B,I,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...base,
  render: args => ({
    components: {
      BaseStepIndicator
    },
    template: '<div style="display: flex; align-items: center;"><BaseStepIndicator  v-bind="args" complete label="Completed step" step="1" /><BaseStepIndicator v-bind="args" current label="Current step" step="2" /><BaseStepIndicator v-bind="args" last label="Incomplete step" step="3" /></div>',
    setup() {
      return {
        args
      };
    }
  })
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const F=["Current","Complete","Incomplete","Usage"];export{r as Complete,s as Current,n as Incomplete,o as Usage,F as __namedExportsOrder,A as default};
//# sourceMappingURL=BaseStepIndicator.stories-f3b6de45.js.map
