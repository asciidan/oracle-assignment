import { shallowMount } from '@vue/test-utils'
import DataTableToolbar from '../Toolbar.vue'

const mockTitle = 'Some title'
const wrapper = shallowMount(DataTableToolbar, {
  stubs: ['md-table-toolbar'],
})

describe('Module: DataTableToolbar', () => {
  it('correctly sets the title prop', () => {
    wrapper.setProps({ title: mockTitle })
    expect(wrapper.props('title')).toEqual(mockTitle)
  })

  it('should render a heading with a title', () => {
    wrapper.setProps({ title: mockTitle })
    expect(wrapper.find('.md-title').text()).toEqual(mockTitle)
  })
})
