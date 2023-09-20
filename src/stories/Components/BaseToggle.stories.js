import BaseToggle from '@/components/dls/BaseToggle.vue'

export default {
  title: 'Components/BaseToggle',
  component: BaseToggle
}

const base = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770'
    }
  },
  render: (args) => ({
    components: { BaseToggle },
    template: '<BaseToggle  v-bind="args" />',
    setup() {
      return {
        args
      }
    }
  }),
  args: {
    options: ['Option 1', 'Option 2']
  }
}

export const Primary = {
  ...base
}
