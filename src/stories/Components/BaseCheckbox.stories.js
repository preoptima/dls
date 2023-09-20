import BaseCheckbox from '@/components/dls/BaseCheckbox.vue'

export default {
  title: 'Components/BaseCheckbox',
  component: BaseCheckbox
}

const base = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770'
    }
  },
  render: (args) => ({
    components: { BaseCheckbox },
    template: '<BaseCheckbox v-bind="args" />',
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

export const Error = {
  ...base,
  args: {
    ...base.args,
    errorMsg: 'Lorem ipsum invalid text caption'
  }
}
