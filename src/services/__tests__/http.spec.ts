import axios from 'axios'
import { resolveGetUrl } from '../http'

jest.mock('axios', () => {
  return {
    create: jest.fn(),
    get: jest.fn(
      () =>
        new Promise(resolve =>
          resolve({
            data: 'test value',
          })
        )
    ),
  }
})

const mockUrl = 'http://localhost'

describe('Service: HTTP', () => {
  test('resolveGetUrl should perform an HTTP request', async done => {
    await resolveGetUrl(mockUrl)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(mockUrl)

    done()
  })

  test('resolveGetUrl should return data', async done => {
    const data = await resolveGetUrl<string>(mockUrl)
    expect(data).toEqual('test value')

    done()
  })
})
