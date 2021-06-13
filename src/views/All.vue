<template>
  <div class="all">
    <header>
      <search-bar v-model="searchText" />
    </header>
    <base-list :pokemonData="testPokemonData" />
  </div>
</template>
<style lang="scss" scoped>
.all {
  @include vertical-center-flex;
  justify-content: flex-start;
  height: 100vh;
}

header {
  margin-top: toRem(35px);
}
</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

import Button from "@/commons/components/BaseButton.vue";
import SearchBar from "@/commons/components/BaseSearchBar.vue";
import ListElement from "@/commons/components/BaseListElement.vue";
import BaseList from "@/commons/components/BaseList.vue";

@Options({
  components: { Button, SearchBar, ListElement, BaseList },
})
export default class All extends Vue {
  searchText = "";

  //remove when done
  testPokemonData = [
    {
      name: "Testmon",
      isFavorite: false,
    },
    {
      name: "pikachu",
      isFavorite: true,
    },
    {
      name: "Amoonguss",
      isFavorite: true,
    },
  ];
}
</script>