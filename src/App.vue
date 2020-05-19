<template>
  <div id="app">
    <page-header :title="title" />

    <main class="main-container">
      <div class="centered-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '~/modules/Header.vue'

@Component({
  components: { PageHeader: Header },
})
export default class App extends Vue {
  get title() {
    return document?.title
  }
}
</script>

<style lang="scss" scoped>
// Normalize CSS
html,
body {
  padding: 0;
  margin: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5em;

  .centered-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: auto;
    width: 100%;
    max-width: 1200px;
  }
}
</style>
