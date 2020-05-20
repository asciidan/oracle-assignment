import centered from '@storybook/addon-centered/vue'
import { action } from '@storybook/addon-actions'
import { text, array, object, boolean } from '@storybook/addon-knobs'
import DataTable from '@/modules/DataTable/index.vue'

export default { title: 'DataTable', decorators: [centered] }

const tableData = [
  {
    name: 'Han Solo',
    height: '180',
    gender: 'male',
    homeworld: 'Corellia',
  },
]

export const Default = () => ({
  components: { DataTable },
  props: {
    title: {
      default: text('Title', 'Data Table'),
    },
    columns: {
      default: array('Columns', ['Name', 'Height', 'Gender', 'Homeworld']),
    },
    data: {
      default: object('Data', tableData),
    },
    enablePrev: {
      default: boolean('Enable Previous', true),
    },
    enableNext: {
      default: boolean('Enable Next', true),
    },
  },
  methods: {
    search: action('search'),
    prev: action('prev'),
    next: action('next'),
  },
  template: `
    <data-table :title="title" :columns="columns" :data="data" :enable-prev="enablePrev" :enable-next="enableNext" @search="search" @prev="prev" @next="next" />
  `,
})
