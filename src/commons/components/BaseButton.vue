<template>
  <button
    :disabled="disabled"
    class="btn"
    v-on:click="onClick"
    data-test="clickable"
  >
    <div class="content">
      <fa-icon
        v-if="icon === 'list'"
        icon="list"
        data-test="icon"
        class="icon"
      ></fa-icon>
      <fa-icon
        v-else-if="icon === 'star'"
        icon="star"
        data-test="icon"
        class="icon"
      ></fa-icon>
      <span>{{ text }}</span>
    </div>
  </button>
</template>

<style scoped lang="scss">
$height: 44px;
$min-width: 150px;
$padding-x: 20px;
$padding-y: 10px;

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.icon {
  margin-right: 10px;
}

.btn {
  height: $height;
  padding: $padding-y $padding-x;
  min-width: $min-width;
  font-size: toRem($font-size-x-small);
  color: #ffffff;
  background-color: $red;
  border-radius: 60px;
  border: none;
  font-weight: $font-weight-bold;
  cursor: pointer;

  @include transition-colors;

  &:active {
    background-color: $red-dark;
  }

  &:disabled {
    background-color: $gray;
    cursor: not-allowed;
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

class Props {
  text!: string;
  disabled?: boolean;
  icon?: "none" | "list" | "star";
}

export default class BaseButton extends Vue.with(Props) {
  onClick(): void {
    this.$emit("clicked");
  }
}
</script>
