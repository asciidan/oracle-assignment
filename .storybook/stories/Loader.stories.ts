import centered from '@storybook/addon-centered/vue'
import { boolean } from '@storybook/addon-knobs'
import Loader from '@/modules/Loader.vue'

export default { title: 'Loader', decorators: [centered] }

export const Default = () => ({
  components: { Loader },
  props: {
    visible: {
      default: boolean('Visible', true),
    },
  },
  template: '<loader :visible="visible" />',
})
