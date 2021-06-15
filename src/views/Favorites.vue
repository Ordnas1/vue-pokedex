<template>
  <pokemon-details-modal :isOpen="display" />
  <the-loader v-if="loading" />
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
import TheLoader from "@/commons/components/TheLoader.vue";
import PokemonDetailsModal from "@/modules/pokedex/components/PokemonDetailsModal.vue";

import store from "@/store";

@Options({
  components: {
    SearchBar,
    BaseList,
    ButtonGroup,
    TheLoader,
    PokemonDetailsModal,
  },
  computed: {
    pokemonList() {
      return this.$store.state.pokedex.pokemonList;
    },
    loading() {
      return this.$store.state.loading;
    },
    display() {
      return this.$store.state.pokedex.modal.display;
    },
  },
})
export default class Favorites extends Vue {
  searchText = "";
}
</script>
