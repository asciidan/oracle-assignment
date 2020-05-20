import { debounce } from 'lodash-es'
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators'
import { mapResultCharacter } from './helpers'
import store from '@/store'
import { HttpClient, resolveGetUrl } from '@/services'
import { CharactersResponse } from '@/abstract'

/**
 * Characters Vuex store module
 */
@Module({ dynamic: true, name: 'characters', store })
class CharactersModule extends VuexModule {
  response: CharactersResponse | null = null
  error = ''
  loading = true

  /**
   * Set character response
   */
  @Mutation
  setResponse(response: CharactersResponse | null) {
    this.response = response
  }

  /**
   * Set global error message
   */
  @Mutation
  setError(error: string) {
    this.error = error
  }

  /**
   * Show or hide loader
   */
  @Mutation
  setLoading(loading: boolean) {
    this.loading = loading
  }

  /**
   * Load initial/query characters
   */
  @Action
  async loadCharacters(searchQuery = '') {
    let response = this.response

    try {
      const params = { search: searchQuery }
      const { data } = await HttpClient.get<CharactersResponse>('/people', {
        params,
      })

      const resultsPromiseStack = data.results.map(mapResultCharacter)
      const results = await Promise.all(resultsPromiseStack)

      response = Object.assign({}, data, { results })
    } catch (e) {
      // One of the requests has failed
      this.setError(`Something went wrong while loading the page. ${e.message}`)
    }

    // Hide the loader
    this.setLoading(false)

    // Save the response
    this.setResponse(response)
  }

  /**
   * Load additional characters
   */
  @Action
  async loadAdditionalCharacters(url: string) {
    let response = this.response

    // Hide the loader
    this.setLoading(true)

    try {
      const data = await resolveGetUrl<CharactersResponse>(url)
      const resultsPromiseStack = data.results.map(mapResultCharacter)
      const results = await Promise.all(resultsPromiseStack)

      response = Object.assign({}, data, { results })
    } catch (e) {
      // One of the requests has failed
      this.setError(`Something went wrong while loading the page. ${e.message}`)
    }

    // Hide the loader
    this.setLoading(false)

    // Save the response
    this.setResponse(response)
  }
}

/**
 * Create dynamic characters store
 */
export const CharactersStore = getModule(CharactersModule)
