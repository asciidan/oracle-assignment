import { CharactersStore } from '../index'
import { HttpClient } from '@/services'

jest.mock('@/services', () => {
  return {
    HttpClient: {
      get: jest.fn(),
    },
  }
})

const mockResponse = { count: 0, next: null, previous: null, results: [] }
const mockError = 'Some error'

describe('Characters store: module', () => {
  test('setResponse should set the response state', () => {
    CharactersStore.setResponse(mockResponse)
    expect(CharactersStore.response).toStrictEqual(mockResponse)
  })

  test('setError should set the error state', () => {
    CharactersStore.setError(mockError)
    expect(CharactersStore.error).toEqual(mockError)
  })

  test('setLoading should set the loading state', () => {
    CharactersStore.setLoading(true)
    expect(CharactersStore.loading).toEqual(true)
  })

  test('loadInitialCharacters should perform an HTTP request', async done => {
    await CharactersStore.loadInitialCharacters()

    expect(HttpClient.get).toBeCalledTimes(1)

    done()
  })
})
