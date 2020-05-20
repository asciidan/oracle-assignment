/**
 * @example
 * {
 *   "name": "Luke Skywalker",
 *   "height": "172",
 *   "gender": "male",
 *   "homeworld": "Tatooine",
 *   "url": "https://swapi.dev/api/people/1/"
 * }
 */
export interface Character {
  name: string
  height: string
  gender: string
  homeworld: string
  url: string
}

/**
 * @example
 * {
 *   "name": "Tatooine"
 * }
 */
export interface Planet {
  name: string
}

/**
 * @example
 * {
 *   "count": 0,
 *   "next": null,
 *   "previous": null,
 *   "results": []
 * }
 */
export interface CharactersResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<Character>
}
