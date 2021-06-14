<template>
  <div class="wrapper">
    <img
      class="loader"
      src="../../assets/img/loader.svg"
      alt="loading"
      srcset=""
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @include vertical-center-flex;
  height: 100vh;

  transform: scale(1);
  animation: pulse 1.5s infinite;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TheLoader extends Vue {}
</script>