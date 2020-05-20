import { text } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'
import PageHeader from '@/modules/PageHeader.vue'

export default { title: 'PageHeader', decorators: [StoryRouter()] }

export const Default = () => ({
  components: { PageHeader },
  props: {
    title: {
      default: text('Title', 'Page Title'),
    },
  },
  template: '<page-header :title="title" />',
})
