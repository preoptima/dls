import BaseStepIndicator from '@/components/dls/BaseStepIndicator.vue'

export default {
  title: 'Components/BaseStepIndicator',
  component: BaseStepIndicator
}

const base = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=59-1770'
    }
  },
  render: (args) => ({
    components: { BaseStepIndicator },
    template: '<BaseStepIndicator  v-bind="args" />',
    setup() {
      return {
        args
      }
    }
  }),
  args: {
    step: 1,
    label: 'Label',
    complete: false,
    last: false
  }
}

export const Current = {
  ...base,
  args: {
    ...base.args,
    current: true
  }
}

export const Complete = {
  ...base,
  args: {
    ...base.args,
    complete: true
  }
}

export const Incomplete = {
  ...base
}

export const Usage = {
  ...base,
  render: (args) => ({
    components: { BaseStepIndicator },
    template:
      '<div style="display: flex; align-items: center;"><BaseStepIndicator  v-bind="args" complete label="Completed step" step="1" /><BaseStepIndicator v-bind="args" current label="Current step" step="2" /><BaseStepIndicator v-bind="args" last label="Incomplete step" step="3" /></div>',
    setup() {
      return {
        args
      }
    }
  })
}
