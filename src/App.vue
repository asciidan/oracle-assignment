<template>
  <div id="app">
    <page-header :title="title" />

    <main class="main-container">
      <div class="loader">
        <md-progress-spinner
          v-if="isLoading"
          class="md-accent"
          md-mode="indeterminate"
        />
      </div>

      <div class="centered-container">
        <router-view v-show="!isLoading" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '~/modules/Header.vue'

/**
 * Root App component
 */
@Component({
  components: { PageHeader: Header },
})
export default class App extends Vue {
  get title() {
    return document?.title
  }

  get isLoading() {
    return this.$store.state.characters.loading
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
  margin-top: 1.5em;

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
