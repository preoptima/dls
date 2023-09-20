import{c as n,b as s,t,n as d,d as u,F as b,o as r,f}from"./vue.esm-bundler-a71739a9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const c={name:"BaseDropdown",props:{label:{type:String,default:""},disabled:{type:Boolean,default:!1},errorMsg:{type:String,default:""}}},g={class:"ui-small-book"},w=["disabled"],v=f('<option value="" disabled selected data-v-1d8d6bb0>Please select</option><option value="1" data-v-1d8d6bb0>1</option><option value="2" data-v-1d8d6bb0>2</option><option value="3" data-v-1d8d6bb0>3</option><option value="4" data-v-1d8d6bb0>4</option>',5),y=[v],B={key:0,class:"error ui-small-book"};function D(o,h,e,S,x,M){return r(),n(b,null,[s("label",{for:"basedropdown",class:d({disbled:e.disabled})},[s("span",g,t(e.label),1),s("select",{id:"basedropdown",disabled:e.disabled,class:d({error:e.errorMsg})},y,10,w)],2),e.errorMsg?(r(),n("span",B,t(e.errorMsg),1)):u("",!0)],64)}const m=_(c,[["render",D],["__scopeId","data-v-1d8d6bb0"]]);c.__docgenInfo={displayName:"BaseDropdown",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errorMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/dls/dls/src/components/dls/BaseDropdown.vue"]};const C={title:"Components/BaseDropdown",component:m},a={parameters:{design:{type:"figma",url:"https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370"}},render:o=>({components:{BaseDropdown:m},template:'<div style="width: 300px;"><BaseDropdown v-bind="args"></BaseDropdown></div>',setup(){return{args:o}}}),args:{label:"Label",disabled:!1,errorMsg:""}};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370'
    }
  },
  render: args => ({
    components: {
      BaseDropdown
    },
    template: '<div style="width: 300px;"><BaseDropdown v-bind="args"></BaseDropdown></div>',
    setup() {
      return {
        args
      };
    }
  }),
  args: {
    label: 'Label',
    disabled: false,
    errorMsg: ''
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const N=["Primary"];export{a as Primary,N as __namedExportsOrder,C as default};
//# sourceMappingURL=BaseDropdown.stories-e49cf33e.js.map
