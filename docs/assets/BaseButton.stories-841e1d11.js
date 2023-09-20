import{B as n}from"./BaseButton-1115f9b2.js";import"./vue.esm-bundler-a71739a9.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={title:"Components/BaseButton",component:n},d={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770"}},render:r=>({components:{BaseButton:n},template:'<BaseButton v-bind="args">Primary button</BaseButton>',setup(){return{args:r}}}),args:{disabled:!1}},e={...d},t={...d,render:r=>({components:{BaseButton:n},template:'<BaseButton v-bind="args" secondary>Secondary button</BaseButton>',setup(){return{args:r}}})};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...base
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...base,
  render: args => ({
    components: {
      BaseButton
    },
    template: '<BaseButton v-bind="args" secondary>Secondary button</BaseButton>',
    setup() {
      return {
        args
      };
    }
  })
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const g=["Primary","Secondary"];export{e as Primary,t as Secondary,g as __namedExportsOrder,y as default};
//# sourceMappingURL=BaseButton.stories-841e1d11.js.map
