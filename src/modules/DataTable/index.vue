<template>
  <md-table md-card>
    <data-table-toolbar :title="title" />

    <!-- Table head -->
    <data-table-head :columns="columns" />

    <!-- Table body -->
    <data-table-row v-for="item in data" :key="item.url" :item="item" />
  </md-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
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
}
</script>
