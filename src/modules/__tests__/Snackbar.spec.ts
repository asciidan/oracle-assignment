import { shallowMount } from '@vue/test-utils'
import Snackbar from '../Snackbar.vue'

const stubs = ['md-snackbar', 'md-button']

describe('Module: DataTable', () => {
  it('correctly sets the visible prop', () => {
    const wrapper = shallowMount(Snackbar, {
      stubs,

      propsData: {
        visible: true,
      },
    })

    expect(wrapper.props('visible')).toEqual(true)
  })

  it('correctly sets the message prop', () => {
    const wrapper = shallowMount(Snackbar, {
      stubs,

      propsData: {
        message: 'some message',
      },
    })

    expect(wrapper.props('message')).toEqual('some message')
  })
})
