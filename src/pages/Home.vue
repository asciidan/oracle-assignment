<template>
  <data-table
    :title="tableTitle"
    :columns="tableColumns"
    :data="tableData"
    class="characters-table"
  />
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { CharactersStore } from '~/store/characters'
import DataTable from '~/modules/DataTable/index.vue'

/**
 * Characters table heading title
 */
const TABLE_TITLE = 'Characters Table'

/**
 * Home page component
 */
@Component({
  components: { DataTable },
})
export default class HomePage extends Vue {
  readonly tableTitle = TABLE_TITLE
  readonly tableColumns = ['Name', 'Height', 'Gender', 'Homeworld']

  // Map characters data from the state
  get tableData() {
    return CharactersStore.response?.results
  }

  // Initialize characters in this lifecycle hook
  created() {
    CharactersStore.loadInitialCharacters()
  }
}
</script>

<style lang="scss" scoped>
.characters-table {
  width: 100%;
}
</style>
