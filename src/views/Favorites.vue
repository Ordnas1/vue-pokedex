<template>
  <div class="favorites">
    <header>
      <search-bar v-model="searchText" />
    </header>
    <base-list class="list" :pokemonData="pokemonList" :onlyFavorites="true" />
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

import store from "@/store";

@Options({
  components: { SearchBar, BaseList, ButtonGroup },
  computed: {
    pokemonList() {
      return this.$store.state.pokedex.pokemonList;
    },
  },
})
export default class Favorites extends Vue {
  searchText = "";
}
</script>
