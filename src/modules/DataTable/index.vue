<template>
  <md-table md-card>
    <md-table-toolbar class="data-table-toolbar">
      <data-table-toolbar :title="title" @search="search" />
    </md-table-toolbar>

    <!-- Table head -->
    <data-table-head :columns="columns" />

    <!-- Table body -->
    <data-table-row v-for="item in data" :key="item.url" :item="item" />

    <md-button :disabled="!enablePrev" @click="prev">Previous</md-button>
    <md-button :disabled="!enableNext" @click="next">Next</md-button>
  </md-table>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Character } from '@/abstract'
import DataTableToolbar from './Toolbar.vue'
import DataTableHead from './Head.vue'
import DataTableRow from './Row.vue'

/**
 * Data table component
 */
@Component({ components: { DataTableToolbar, DataTableHead, DataTableRow } })
export default class DataTable extends Vue {
  @Prop(String) readonly title: string | undefined
  @Prop(Array) readonly columns: Array<string> | undefined
  @Prop(Array) readonly data: Array<Character> | undefined
  @Prop(Boolean) readonly enablePrev: boolean | undefined
  @Prop(Boolean) readonly enableNext: boolean | undefined

  @Emit()
  search(value: string) {
    return value
  }

  @Emit()
  prev() {
    return true
  }

  @Emit()
  next() {
    return true
  }
}
</script>
