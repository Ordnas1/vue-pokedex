<template>
  <div class="hello">
    <h1>Components</h1>
    <BaseButton :text="'a'" @clicked="handleClick" :icon="'star'"></BaseButton>
    <BaseButton :text="'disabled button'" disabled :icon="'list'" />
    <base-favorite-button />
    <base-favorite-button isFavorite="true" />
    <h2>{{ msg }}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseButton from "@/commons/components/BaseButton.vue";
import BaseFavoriteButton from "@/commons/components/BaseFavoriteButton.vue";

@Options({
  props: {
    msg: String,
  },
  components: { BaseButton, BaseFavoriteButton },
})
export default class HelloWorld extends Vue {
  msg!: string;
  handleClick(): void {
    console.log("click handled");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
