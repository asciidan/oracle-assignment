<template>
  <md-table-row>
    <md-table-head
      v-for="column in columns"
      :key="column"
      class="table-head-item"
    >
      {{ column }}
    </md-table-head>
  </md-table-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * Data table head component
 */
@Component
export default class DataTableHead extends Vue {
  @Prop(Array) readonly columns: Array<string> | undefined
}
</script>
