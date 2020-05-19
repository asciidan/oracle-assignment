<template>
  <md-table md-card>
    <md-table-toolbar>
      <h2 class="md-title">{{ title }}</h2>
    </md-table-toolbar>

    <md-table-row>
      <md-table-head>Name</md-table-head>
      <md-table-head>Height</md-table-head>
      <md-table-head>Gender</md-table-head>
      <md-table-head>Homeworld</md-table-head>
    </md-table-row>

    <md-table-row v-for="character in data" :key="character.url">
      <md-table-cell>{{ character.name }}</md-table-cell>
      <md-table-cell>{{ character.height }}</md-table-cell>
      <md-table-cell>{{ character.gender }}</md-table-cell>
      <md-table-cell>{{ character.homeworld || 'N/A' }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CharacterList extends Vue {
  @Prop(String) readonly title: string | undefined
  @Prop(Array) readonly data: any
}
</script>
