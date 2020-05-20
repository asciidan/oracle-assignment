import centered from '@storybook/addon-centered/vue'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import Snackbar from '@/modules/Snackbar.vue'

export default { title: 'Snackbar', decorators: [centered] }

export const Default = () => ({
  components: { Snackbar },
  props: {
    visible: {
      default: boolean('Visible', true),
    },
    message: {
      default: text('Message', 'Hello Storybook!'),
    },
  },
  methods: {
    close: action('close'),
  },
  template: '<snackbar :visible="visible" :message="message" @close="close" />',
})
