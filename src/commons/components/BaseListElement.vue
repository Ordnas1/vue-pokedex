<template >
  <li class="list-element" @click="handleClick($event)">
    <span data-test="textContent" class="text">{{ text }}</span>
    <BaseFavoriteButton
      class="ignore-click"
      :isFavorite="isFavorite"
      @clicked="toggleFavorite"
    />
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
import { MUTATION_TYPES, ACTION_TYPES } from "@/modules/pokedex/store";
import store from "@/store";

class Props {
  text!: string;
  id!: number;
}

@Options({
  components: { BaseFavoriteButton },
  computed: {
    isFavorite() {
      return (store.state as any).pokedex.pokemonList[Number(this.id) - 1]
        .isFavorite;
    },
  },
  emits: ["elementClicked"],
})
export default class BaseListElement extends Vue.with(Props) {
  isFavorite!: boolean;

  toggleFavorite(): void {
    store.commit(MUTATION_TYPES.TOGGLE_FAVORITE, Number(this.id));
  }

  handleClick(event: Event): void | undefined {
    if (
      (event.target as Element).localName === "svg" ||
      (event.target as Element).localName === "path"
    )
      return;
    store.dispatch(ACTION_TYPES.DISPLAY_MODAL, this.id);
  }
}
</script>
