<template>
  <div id="app">
    <page-header :title="title" />

    <main class="main-container">
      <loader :visible="loading" class="loader" />

      <div class="centered-container">
        <router-view v-show="!loading" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CharactersStore } from '@/store/characters'
import PageHeader from '@/modules/PageHeader.vue'
import Loader from '@/modules/Loader.vue'

/**
 * Root App component
 */
@Component({
  components: { PageHeader, Loader },
})
export default class App extends Vue {
  get title() {
    return document?.title
  }

  get loading() {
    return CharactersStore.loading
  }
}
</script>

<style lang="scss">
// Import the theme engine
@import '~vue-material/dist/theme/engine';

@include md-register-theme(
  'default',
  (
    primary: md-get-palette-color(blue, A200),
    accent: md-get-palette-color(red, A200),
    theme: dark,
  )
);

// Apply the theme
@import '~vue-material/dist/theme/all';

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
  margin: 1.5em 0;

  .loader {
    position: absolute;
  }

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
