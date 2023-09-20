import BaseTab from '@/components/dls/BaseTab.vue'

export default {
  title: 'Components/BaseTab',
  component: BaseTab
}

const base = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770'
    }
  },
  render: (args) => ({
    components: { BaseTab },
    template:
      '<BaseTab  v-bind="args"><span class="material-symbols-outlined"> add_circle </span></BaseTab>',
    setup() {
      return {
        args
      }
    }
  }),
  args: {
    label: 'Tab'
  }
}

export const Primary = {
  ...base
}

export const Selected = {
  ...base,
  args: {
    ...base.args,
    selected: true
  }
}
