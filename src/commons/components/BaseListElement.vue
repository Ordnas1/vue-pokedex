<template>
  <li class="list-element">
    <span data-test="textContent" class="text">{{ text }}</span>
    <BaseFavoriteButton :isFavorite="isFavorite" @clicked="toggleFavorite" />
  </li>
</template>

<style scoped lang="scss">
$width: toRem(315px);
$height: toRem(60px);

.list-element {
  width: $width;
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

class Props {
  text!: string;
  isFavorite = prop<boolean>({ default: false });
}

@Options({
  components: { BaseFavoriteButton },
})
export default class BaseListElement extends Vue.with(Props) {
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    console.log("[Base List Element] toggling", this.isFavorite);
  }
}
</script>
