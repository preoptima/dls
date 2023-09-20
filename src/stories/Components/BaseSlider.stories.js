import BaseSlider from '@/components/dls/BaseSlider.vue'

export default {
  title: 'Components/BaseSlider',
  component: BaseSlider
}

const base = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770'
    }
  },
  render: (args) => ({
    components: { BaseSlider },
    template: '<BaseSlider v-bind="args" />',
    setup() {
      return {
        args
      }
    }
  }),
  args: {
    disabled: false,
    label: 'Checkbox item',
    errorMsg: ''
  }
}

export const Primary = {
  ...base
}

export const Disabled = {
  ...base,
  args: {
    ...base.args,
    disabled: true
  }
}
