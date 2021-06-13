<template>
  <div class="favorites">
    <header>
      <search-bar v-model="searchText" />
    </header>
    <base-list
      class="list"
      :pokemonData="testPokemonData"
      :onlyFavorites="true"
    />
    <button-group :view="'favorites'" />
  </div>
</template>
<style lang="scss" scoped>
.favorites {
  @include vertical-center-flex;
  justify-content: flex-start;
  height: 100vh;
}
header {
  margin-top: toRem(35px);
}

.list {
  flex: 1 1 auto;
  overflow: scroll;
}
</style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";

import SearchBar from "@/commons/components/BaseSearchBar.vue";
import BaseList from "@/commons/components/BaseList.vue";
import ButtonGroup from "@/commons/components/BaseButtonGroup.vue";

@Options({
  components: { SearchBar, BaseList, ButtonGroup },
})
export default class Favorites extends Vue {
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
    {
      name: "Sax",
      isFavorite: true,
    },
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
    {
      name: "Sax",
      isFavorite: true,
    },
  ];
}
</script>
