<template>
  <the-loader v-if="loading" />
  <div v-if="!loading" class="all">
    <header>
      <search-bar v-model="searchText" />
    </header>
    <base-list class="list" :pokemonData="pokemonList" />
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
import TheLoader from "@/commons/components/TheLoader.vue";

import { PokemonDetail } from "@/types/PokemonDetails.interface";

@Options({
  components: { SearchBar, BaseList, ButtonGroup, TheLoader },
  computed: {
    pokemonList() {
      return this.$store.state.pokedex.pokemonList;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
})
export default class All extends Vue {
  loading!: boolean;
  searchText = "";

  mounted() {
    console.log("mounted", this.loading);
  }
}
</script>
