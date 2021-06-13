<template>
  <div
    data-test="messageWhenEmpty"
    class="messageWhenEmpty"
    v-if="!pokemonData"
  >
    <h1 class="title">Uh-oh!</h1>
    <p class="text">You look lost on your journey!</p>
    <Button :text="'Go back home'" @clicked="goToHome" />
  </div>
  <ul v-else-if="onlyFavorites">
    <template v-for="item in pokemonData" v-bind:key="item.name">
      <list-element
        v-if="item.isFavorite"
        data-test="element"
        :text="item.name"
        :isFavorite="item.isFavorite"
      />
    </template>
  </ul>
  <ul v-else>
    <template v-for="item in pokemonData" v-bind:key="item.name">
      <list-element
        data-test="element"
        :text="item.name"
        :isFavorite="item.isFavorite"
      />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: toRem(40px) 0 0;
}
</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ListElement from "@/commons/components/BaseListElement.vue";
import Button from "@/commons/components/BaseButton.vue";

import { PokemonListElement } from "@/types/PokemonDetails.interface";

class Props {
  pokemonData?: PokemonListElement;
  onlyFavorites?: boolean;
}

@Options({
  components: { ListElement, Button },
})
export default class BaseList extends Vue.with(Props) {
  goToHome() {
    this.$router.push({ name: "Home" });
  }
}
</script>
