import BaseDialog from '@/components/dls/BaseDialog.vue'
import BaseButton from '@/components/dls/BaseButton.vue'

export default {
  title: 'Components/BaseDialog',
  component: BaseDialog
}

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jyRuiZGTRyBAdifCSwsbta/Preoptima-DLS?type=design&node-id=118-7370'
    }
  },
  render: (args) => ({
    components: { BaseDialog, BaseButton },
    template:
      '<BaseDialog v-bind="args"><div class="ui-large-book" style="padding: 20px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</div><div style="text-align: right;"><BaseButton secondary style="margin-right: 16px;">Cancel</BaseButton><BaseButton>Submit</BaseButton></div></BaseDialog>',
    setup() {
      return {
        args
      }
    }
  }),
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: [null, 'sm', 'lg', 'xl']
    }
  },
  args: {
    open: true,
    title: 'Title',
    size: null
  }
}
