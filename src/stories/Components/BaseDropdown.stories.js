import BaseDropdown from '@/components/dls/BaseDropdown.vue'

export default {
  title: 'Components/BaseDropdown',
  component: BaseDropdown
}

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370'
    }
  },
  render: (args) => ({
    components: { BaseDropdown },
    template: '<div style="width: 300px;"><BaseDropdown v-bind="args"></BaseDropdown></div>',
    setup() {
      return {
        args
      }
    }
  }),
  args: {
    label: 'Label',
    disabled: false,
    errorMsg: ''
  }
}
