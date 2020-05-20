<template>
  <div class="home-page">
    <snackbar
      :visible="showSnackbar"
      :message="errorMessage"
      @close="toggleSnackbar(false)"
    />

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
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { CharactersStore } from '@/store/characters'
import Snackbar from '@/modules/Snackbar.vue'
import DataTable from '@/modules/DataTable/index.vue'

/**
 * Home page component
 */
@Component({
  components: { Snackbar, DataTable },
})
export default class HomePage extends Vue {
  readonly tableTitle = 'Characters'
  readonly tableColumns = ['Name', 'Height', 'Gender', 'Homeworld']

  showSnackbar = false

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
   * Snackbar error message
   */
  get errorMessage() {
    return CharactersStore.error
  }

  @Watch('errorMessage')
  onError(msg: string) {
    if (msg) {
      this.toggleSnackbar(true)
    }
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
   * Toggle/show error snackbar
   */
  toggleSnackbar(show: boolean) {
    this.showSnackbar = show
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
.home-page {
  display: contents;

  .characters-table {
    width: 100%;
  }
}
</style>
