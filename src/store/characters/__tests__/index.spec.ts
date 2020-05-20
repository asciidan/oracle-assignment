import { CharactersStore } from '../index'
import { HttpClient, resolveGetUrl } from '@/services'
import { Planet } from '@/abstract'

jest.mock('@/services', () => {
  return {
    HttpClient: {
      get: jest.fn(),
    },
    resolveGetUrl: jest.fn(
      () =>
        new Promise(resolve =>
          resolve({
            name: 'some planet',
          } as Planet)
        )
    ),
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

  test('loadCharacters should perform an HTTP request', async done => {
    await CharactersStore.loadCharacters()

    expect(HttpClient.get).toBeCalledTimes(1)

    done()
  })

  test('loadAdditionalCharacters should perform an HTTP request', async done => {
    const TEST_URL = 'some url'
    await CharactersStore.loadAdditionalCharacters(TEST_URL)

    expect(resolveGetUrl).toBeCalledWith(TEST_URL)

    done()
  })
})
