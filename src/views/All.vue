<template>
  <div class="all">
    <header>
      <search-bar v-model="searchText" />
    </header>
    <base-list class="list" :pokemonData="testPokemonData" />
    <button-group :view="'all'" />
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

import PokeAPIAdapter from "@/modules/pokedex/adapters/PokeAPIAdapter";
import HttpService from "@/commons/services/HttpService";

@Options({
  components: { SearchBar, BaseList, ButtonGroup },
})
export default class All extends Vue {
  searchText = "";

  async mounted() {
    const adapter = new PokeAPIAdapter(new HttpService());
    console.log(await adapter.getInitialPokemonList());
    console.log(await adapter.getNextPokemonList());
    console.log(await adapter.getNextPokemonList());
    console.log(await adapter.getNextPokemonList());
    console.log(adapter.nextList);
    console.log("mounted");
  }

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
      name: "Testmon",
      isFavorite: false,
    },
    {
      name: "pikachu",
      isFavorite: true,
    },
    {
      name: "Testmon",
      isFavorite: false,
    },
  ];
}
</script>
