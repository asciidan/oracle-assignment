import { shallowMount } from '@vue/test-utils'
import Loader from '../Loader.vue'

const wrapper = shallowMount(Loader, {
  stubs: ['md-progress-spinner'],
})

describe('Module: Loader', () => {
  it('correctly sets the visible prop', () => {
    wrapper.setProps({ visible: true })
    expect(wrapper.props('visible')).toEqual(true)
  })

  it('is visible if the visible prop is true', done => {
    wrapper.setProps({ visible: true })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.loader-wrapper').isVisible()).toEqual(true)
      done()
    })
  })

  it('is hidden if the visible prop is false', done => {
    wrapper.setProps({ visible: false })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.loader-wrapper').isVisible()).toEqual(false)
      done()
    })
  })
})
