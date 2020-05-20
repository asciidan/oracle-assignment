import { shallowMount } from '@vue/test-utils'
import PageHeader from '../PageHeader.vue'

const mockTitle = 'Some title'
const wrapper = shallowMount(PageHeader, {
  stubs: ['md-toolbar', 'router-link'],
})

describe('Module: PageHeader', () => {
  it('correctly sets the title prop', () => {
    wrapper.setProps({ title: mockTitle })
    expect(wrapper.props('title')).toEqual(mockTitle)
  })

  it('should render a router link with a title', () => {
    wrapper.setProps({ title: mockTitle })
    expect(wrapper.find('.header-link').text()).toEqual(mockTitle)
  })
})
