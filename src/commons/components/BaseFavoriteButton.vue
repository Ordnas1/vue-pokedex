<template>
  <button class="btn" @click="onClick" data-test="clickable">
    <fa-icon
      icon="star"
      class="icon"
      :class="{ favorite: isFavorite }"
      data-test="icon"
    ></fa-icon>
  </button>
</template>

<style scoped lang="scss">
$size: toRem(44px);
$iconSize: toRem(26px);

.btn {
  height: $size;
  width: $size;
  border-radius: 50%;
  border: none;
  background-color: $white;
  cursor: pointer;
  color: gray;
}
.icon {
  height: $iconSize;
  width: $iconSize;
  @include transition-colors;
}
.favorite {
  color: $yellow;
}
</style>

<script scoped lang="ts">
import { Vue } from "vue-class-component";

class Props {
  isFavorite!: boolean;
}

export default class BaseFavoriteButton extends Vue.with(Props) {
  onClick(): void {
    this.$emit("clicked");
  }
}
</script>
