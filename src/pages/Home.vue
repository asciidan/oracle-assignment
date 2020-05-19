<template>
  <character-list :title="listTitle" :data="data" class="character-table" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CharacterList from '~/modules/CharacterList.vue'

const LIST_TITLE = 'Star Wars Characters'

@Component({
  components: { CharacterList },
})
export default class HomePage extends Vue {
  readonly listTitle = LIST_TITLE
  data: any = [
    {
      name: 'Luke Skywalker',
      height: '172',
      gender: 'male',
      homeworld: 'Tatooine',
      url: 'https://swapi.dev/api/people/1/',
    },
  ]
}
</script>

<style lang="scss" scoped>
.character-table {
  width: 100%;
}
</style>
