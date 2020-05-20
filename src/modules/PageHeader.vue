<template>
  <header class="header">
    <md-toolbar>
      <h1 class="header-title md-title">
        <router-link to="/" class="header-link">{{ title }}</router-link>
      </h1>
    </md-toolbar>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * Page header component
 */
@Component
export default class PageHeader extends Vue {
  @Prop(String) readonly title: string | undefined
}
</script>

<style lang="scss" scoped>
.header-title {
  display: flex;

  .header-link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
