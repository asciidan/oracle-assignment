import { withKnobs, boolean } from '@storybook/addon-knobs'
import Loader from '@/modules/Loader.vue'

export default { title: 'Loader', decorators: [withKnobs] }

export const Component = () => ({
  components: { Loader },
  props: {
    visible: {
      default: boolean('Visible', true),
    },
  },
  template: '<loader :visible="visible" />',
})
