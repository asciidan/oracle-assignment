import { mapResultCharacter } from '../helpers'
import { Planet } from '@/abstract'

jest.mock('@/services', () => {
  return {
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

const mockCharacter = {
  name: 'Luke Skywalker',
  height: '172',
  gender: 'male',
  homeworld: 'Tatooine',
  url: 'https://swapi.dev/api/people/1/',
}

describe('Characters store: helpers', () => {
  test('mapResultCharacter should correctly map a character', async done => {
    const character = await mapResultCharacter(mockCharacter)

    expect(character.name).toStrictEqual(mockCharacter.name)
    expect(character.height).toStrictEqual(mockCharacter.height)
    expect(character.gender).toStrictEqual(mockCharacter.gender)
    expect(character.url).toStrictEqual(mockCharacter.url)
    expect(character.homeworld).toStrictEqual('some planet')

    done()
  })
})
