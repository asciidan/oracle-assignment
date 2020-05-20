<template>
  <md-table-toolbar>
    <h2 class="md-title">{{ title }}</h2>
  </md-table-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * Data table toolbar component
 */
@Component
export default class DataTableToolbar extends Vue {
  @Prop(String) readonly title: string | undefined
}
</script>
