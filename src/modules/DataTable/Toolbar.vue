<template>
  <div class="toolbar-wrapper">
    <div class="md-toolbar-section-start">
      <h2 class="md-title">{{ title }}</h2>
    </div>

    <md-field md-clearable class="md-toolbar-section-end">
      <md-input
        placeholder="Filter by name"
        v-model="searchValue"
        @input="onSearchInput"
      />
    </md-field>
  </div>
</template>

<script lang="ts">
import { debounce } from 'lodash-es'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

/**
 * Data table toolbar component
 */
@Component
export default class DataTableToolbar extends Vue {
  searchValue = ''

  @Prop(String) readonly title: string | undefined

  @Emit()
  search() {
    return this.searchValue
  }

  onSearchInput = debounce(this.search, 300)
}
</script>

<style lang="scss" scoped>
.toolbar-wrapper {
  display: contents;
}
</style>
