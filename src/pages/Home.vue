<template>
  <data-table
    :title="tableTitle"
    :columns="tableColumns"
    :data="tableData"
    :enable-prev="!!previousUrl"
    :enable-next="!!nextUrl"
    class="characters-table"
    @search="loadCharacters"
    @prev="loadAdditionalCharacters(previousUrl)"
    @next="loadAdditionalCharacters(nextUrl)"
  />
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { CharactersStore } from '@/store/characters'
import DataTable from '@/modules/DataTable/index.vue'

/**
 * Home page component
 */
@Component({
  components: { DataTable },
})
export default class HomePage extends Vue {
  readonly tableTitle = 'Characters Table'
  readonly tableColumns = ['Name', 'Height', 'Gender', 'Homeworld']

  /**
   * Map characters data from the state
   */
  get tableData() {
    return CharactersStore.response?.results
  }

  /**
   * Previous characters url
   */
  get previousUrl() {
    return CharactersStore.response?.previous
  }

  /**
   * Next characters url
   */
  get nextUrl() {
    return CharactersStore.response?.next
  }

  /**
   * Load initial (or query) all characters
   */
  loadCharacters(searchQuery: string) {
    CharactersStore.loadCharacters(searchQuery)
  }

  /**
   * Load additional characters
   */
  loadAdditionalCharacters(url: string) {
    CharactersStore.loadAdditionalCharacters(url)
  }

  /**
   * Initialize characters in this lifecycle hook
   */
  created() {
    CharactersStore.loadCharacters()
  }
}
</script>

<style lang="scss" scoped>
.characters-table {
  width: 100%;
}
</style>
