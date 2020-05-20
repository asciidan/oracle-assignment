<template>
  <md-table-row>
    <md-table-cell>{{ item.name }}</md-table-cell>
    <md-table-cell>{{ item.height }}</md-table-cell>
    <md-table-cell>{{ item.gender }}</md-table-cell>
    <md-table-cell>{{ item.homeworld }}</md-table-cell>
  </md-table-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Character } from '~/abstract'

/**
 * Data table row component
 */
@Component
export default class DataTableRow extends Vue {
  @Prop(Object) readonly item: Character | undefined
}
</script>
