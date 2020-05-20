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
    'md-button',
    'md-table-toolbar',
    'data-table-toolbar',
    'data-table-head',
    'data-table-row',
  ],

  propsData: {
    title: mockTitle,
    columns: mockColumns,
    data: mockData,
    enablePrev: true,
    enableNext: false,
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

  it('correctly sets the enablePrev prop', () => {
    expect(wrapper.props('enablePrev')).toStrictEqual(true)
  })

  it('correctly sets the enableNext prop', () => {
    expect(wrapper.props('enableNext')).toStrictEqual(false)
  })
})
