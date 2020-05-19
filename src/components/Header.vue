<template>
  <header class="header"></header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
</style>
