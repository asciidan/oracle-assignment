import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators'
import { mapResultCharacter } from './helpers'
import store from '@/store'
import { HttpClient } from '@/services'
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
   * Load all initial characters
   */
  @Action
  async loadInitialCharacters() {
    let response = this.response

    // Show the loader
    this.setLoading(true)

    try {
      const { data } = await HttpClient.get<CharactersResponse>('/people')
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
