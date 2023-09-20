import BaseButton from "@/components/dls/BaseButton.vue";

export default {
  title: "Components/BaseButton",
  component: BaseButton,
};

const base = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770",
    },
  },
  render: (args) => ({
    components: { BaseButton },
    template: '<BaseButton v-bind="args">Primary button</BaseButton>',
    setup() {
      return {
        args,
      };
    },
  }),
  args: {
    disabled: false,
  },
};

export const Primary = {
  ...base,
};

export const Secondary = {
  ...base,
  render: (args) => ({
    components: { BaseButton },
    template:
      '<BaseButton v-bind="args" secondary>Secondary button</BaseButton>',
    setup() {
      return {
        args,
      };
    },
  }),
};
