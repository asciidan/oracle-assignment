<template>
  <div v-show="visible">
    <md-progress-spinner class="md-accent" md-mode="indeterminate" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * Loader/spinner component
 */
@Component
export default class Loader extends Vue {
  @Prop(Boolean) readonly visible: boolean | undefined
}
</script>
