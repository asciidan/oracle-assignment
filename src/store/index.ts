import Vue from 'vue'
import Vuex from 'vuex'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { HttpClient, resolveGetUrl } from '~/services'
import { Character, Planet, CharacterResponse } from '~/types'

Vue.use(Vuex)

export enum CharacterMutations {
  SetResponse = 'setResponse',
  SetError = 'setError',
  SetLoading = 'setLoading',
}

export enum CharacterActions {
  LoadAdditionalCharacters = 'loadInitialCharacters',
}

/**
 * Character Vuex store module
 */
@Module
class CharacterModule extends VuexModule {
  results: Array<Character> = []
  response: CharacterResponse | null = null
  error = ''
  loading = true

  /**
   * Set character response
   */
  @Mutation
  setResponse(response: CharacterResponse) {
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

    // Show loader
    this.context.commit(CharacterMutations.SetLoading, true)

    try {
      const { data } = await HttpClient.get<CharacterResponse>('/people')
      const resultsPromiseStack = data.results.map(async character => {
        const { homeworld, ...rest } = character
        const planet = await resolveGetUrl<Planet>(homeworld)

        return {
          homeworld: planet.name,
          ...rest,
        }
      })

      const results = await Promise.all(resultsPromiseStack)
      response = Object.assign({}, data, { results })
    } catch (e) {
      // One of the requests has failed
      this.context.commit(
        CharacterMutations.SetError,
        `Something went wrong while loading the page. ${e.message}`
      )
    }

    // Hide loader
    this.context.commit(CharacterMutations.SetLoading, false)

    // Save the response
    this.context.commit(CharacterMutations.SetResponse, response)
  }
}

export default new Vuex.Store({
  modules: { characters: CharacterModule },
})
