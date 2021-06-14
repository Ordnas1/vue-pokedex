<template>
  <li class="list-element">
    <span data-test="textContent" class="text">{{ text }}</span>
    <BaseFavoriteButton :isFavorite="isFavorite" @clicked="toggleFavorite" />
  </li>
</template>

<style scoped lang="scss">
$width: toRem(315px);
$height: toRem(60px);

$minSize: toRem(315px);
$maxSize: toRem(570px);

.list-element {
  min-width: $width;
  height: $height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: toRem(20px);
  padding-right: toRem(10px);
  background-color: $whitest;
  margin-bottom: toRem(10px);
  border-radius: 5px;
}

.text {
  font-size: $font-size-medium;
  font-weight: $font-weight-normal;
}
</style>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
import BaseFavoriteButton from "./BaseFavoriteButton.vue";
import { MUTATION_TYPES } from "@/modules/pokedex/store";
import store from "@/store";

class Props {
  text!: string;
  id!: number;
}

@Options({
  components: { BaseFavoriteButton },
  computed: {},
})
export default class BaseListElement extends Vue.with(Props) {
  favorite = false;

  get isFavorite(): boolean {
    return this.favorite;
  }

  set isFavorite(value) {
    this.favorite = value;
  }

  mounted(): void {
    this.isFavorite = (store.state as any).pokedex.pokemonList[
      Number(this.id) - 1
    ].isFavorite;
  }
  toggleFavorite(): void {
    console.log("togglin");
    store.commit(MUTATION_TYPES.TOGGLE_FAVORITE, Number(this.id));
    this.isFavorite = !this.isFavorite;
  }
}
</script>
