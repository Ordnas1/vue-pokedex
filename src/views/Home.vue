<template>
  <div class="home">
    <div class="content">
      <img src="@/assets/img/pikachu_splash.svg" alt="" />
      <div class="text-content">
        <h1 class="title">Welcome to Pokedex</h1>
        <p class="text">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
        <Button class="btn" :text="'Get Started'" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$text-max-width: toRem(315px);

.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
}

.text-content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: $font-size-large;
  margin: 0 0 30px 0;
  text-align: center;
}

.text {
  max-width: $text-max-width;
  line-height: $line-height-medium;
  margin: 0;
  font-size: toRem($font-size-x-small);
  text-align: center;
}

.btn {
  margin-top: 50px;
}
</style>
  
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@/commons/components/BaseButton.vue";

@Options({
  components: {
    Button,
  },
})
export default class Home extends Vue {}
</script>
