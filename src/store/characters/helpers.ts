import { resolveGetUrl } from '~/services'
import { Character, Planet } from '~/abstract'

/**
 * Resolve homeworld URL and map result character
 */
export const mapResultCharacter = async (
  character: Character
): Promise<Character> => {
  const { homeworld, ...rest } = character
  const planet = await resolveGetUrl<Planet>(homeworld)

  return {
    homeworld: planet.name,
    ...rest,
  }
}
