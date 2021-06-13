<template>
  <div class="wrapper">
    <fa-icon icon="search" class="icon"></fa-icon
    ><input
      v-model="value"
      class="text"
      type="text"
      data-test="text"
      placeholder="Search"
    />
  </div>
</template>
<style lang="scss" scoped>
$width: toRem(315px);
$height: toRem(50px);
$iconSize: toRem(18px);

.wrapper {
  background-color: $whitest;
  width: $width;
  height: $height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 toRem(15px);
}

.icon {
  margin-right: toRem(10px);
  color: $gray;
  width: $iconSize;
  height: $iconSize;
}

.text {
  flex: auto;
  border: none;
  font-size: toRem($font-size-xx-small);

  &::placeholder {
    color: $gray;
  }
  &:focus {
    outline: none;
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

class Props {
  modelValue!: string;
}

export default class BaseSearchBar extends Vue.with(Props) {
  get value(): string {
    return this.modelValue;
  }

  set value(value: string) {
    this.$emit("update:modelValue", value);
    console.log(value);
  }
}
</script>
