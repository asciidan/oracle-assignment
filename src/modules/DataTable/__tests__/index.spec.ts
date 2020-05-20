import { shallowMount } from '@vue/test-utils'
import DataTable from '../index.vue'

const mockTitle = 'Some title'
const mockColumns = ['Name', 'Height', 'Gender', 'Homeworld']
const mockData = [
  {
    name: 'Luke Skywalker',
    height: '172',
    gender: 'male',
    homeworld: 'Tatooine',
  },
]

const wrapper = shallowMount(DataTable, {
  stubs: [
    'md-table',
    'data-table-toolbar',
    'data-table-head',
    'data-table-row',
  ],

  propsData: {
    title: mockTitle,
    columns: mockColumns,
    data: mockData,
  },
})

describe('Module: DataTable', () => {
  it('correctly sets the title prop', () => {
    expect(wrapper.props('title')).toStrictEqual(mockTitle)
  })

  it('correctly sets the columns prop', () => {
    expect(wrapper.props('columns')).toStrictEqual(mockColumns)
  })

  it('correctly sets the data prop', () => {
    expect(wrapper.props('data')).toStrictEqual(mockData)
  })
})
