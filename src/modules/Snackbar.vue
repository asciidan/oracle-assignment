<template>
  <md-snackbar :md-duration="Infinity" :md-active.sync="visible" md-persistent>
    <span>{{ message }}</span>
    <md-button class="md-primary" @click="close">Close</md-button>
  </md-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

/**
 * Snackbar component
 */
@Component
export default class Snackbar extends Vue {
  @Prop(Boolean) readonly visible: boolean | undefined
  @Prop(String) readonly message: string | undefined

  @Emit()
  close() {
    return true
  }
}
</script>
