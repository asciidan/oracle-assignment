import { shallowMount } from '@vue/test-utils'
import RootApp from '../App.vue'

jest.mock('@/store/characters', () => {
  return {
    CharactersStore: {
      loading: true,
    },
  }
})

const mockTitle = 'Some title'
document.title = mockTitle

const wrapper = shallowMount(RootApp, {
  stubs: ['page-header', 'loader', 'router-view'],
})

describe('Root App', () => {
  it('should compute the title property from document', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((wrapper.vm as any).title).toEqual(mockTitle)
  })

  it('should compute the loading property from the state', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((wrapper.vm as any).loading).toEqual(true)
  })
})
