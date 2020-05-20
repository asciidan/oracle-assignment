<template>
  <character-list
    :title="listTitle"
    :data="charactersData"
    class="character-table"
  />
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import { Character } from '~/types'
import { CharacterActions } from '~/store'
import CharacterList from '~/modules/CharacterList.vue'

/**
 * Character table heading title
 */
const LIST_TITLE = 'Star Wars Characters'

/**
 * Home page component
 */
@Component({
  components: { CharacterList },
  methods: mapActions([CharacterActions.LoadAdditionalCharacters]),
})
export default class HomePage extends Vue {
  readonly listTitle = LIST_TITLE
  loadInitialCharacters!: () => Promise<void>

  // Map charactersData from state
  get charactersData() {
    return this.$store.state.characters.response?.results
  }

  // Initialize characters in this lifecycle hook
  created() {
    this.loadInitialCharacters()
  }
}
</script>

<style lang="scss" scoped>
.character-table {
  width: 100%;
}
</style>
