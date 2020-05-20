import { shallowMount } from '@vue/test-utils'
import { CharactersStore } from '@/store/characters'
import HomePage from '../Home.vue'

jest.mock('@/store/characters', () => {
  const mockSampleCharacter = {
    name: 'Luke Skywalker',
    height: '172',
    gender: 'male',
    homeworld: 'Tatooine',
    url: 'https://swapi.dev/api/people/1/',
  }

  return {
    CharactersStore: {
      response: {
        results: [mockSampleCharacter],
      },
      loadCharacters: jest.fn(),
      loadAdditionalCharacters: jest.fn(),
    },
  }
})

const wrapper = shallowMount(HomePage, {
  stubs: ['snackbar', 'data-table'],
})

describe('Page: Home', () => {
  it('should call loadCharacters from the store', done => {
    wrapper.vm.$nextTick(() => {
      expect(CharactersStore['loadCharacters']).toHaveBeenCalledTimes(1)
      done()
    })
  })

  it('should have a computed property with characters data', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tableData = (wrapper.vm as any).tableData?.[0]

    expect(tableData?.name).toStrictEqual('Luke Skywalker')
    expect(tableData?.height).toStrictEqual('172')
    expect(tableData?.gender).toStrictEqual('male')
    expect(tableData?.homeworld).toStrictEqual('Tatooine')
    expect(tableData?.url).toStrictEqual('https://swapi.dev/api/people/1/')
  })
})
