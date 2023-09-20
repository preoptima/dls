import BaseNotification from '@/components/dls/BaseNotification.vue'

export default {
  title: 'Components/BaseNotification',
  component: BaseNotification
}

const base = (type) => ({
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370'
    }
  },
  render: (args) => ({
    components: { BaseNotification },
    template: '<BaseNotification v-bind="args"></BaseNotification>',
    setup() {
      return {
        args
      }
    }
  }),
  args: {
    title: 'This is the notification title which states the issue or topic.',
    content:
      'This is supporting text that instructs the user how to resolve the error that has occured or adresses the topic.',
    type
  }
})

export const Success = base('success')
export const Error = base('error')
export const Warning = base('warning')
export const Info = base('info')
