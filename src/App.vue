<template>
  <div id="app">
    <page-header />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: { PageHeader: Header },
})
export default class App extends Vue {}
</script>
