<template>
  <div class="hello">
    <h1>Components</h1>
    <base-button
      :text="'a'"
      @clicked="handleClick"
      :icon="'star'"
    ></base-button>
    <base-button :text="'disabled button'" disabled :icon="'list'" />
    <base-favorite-button />
    <base-favorite-button isFavorite="true" />

    <ul class="list">
      <base-list-element :text="'Pokemon 1'" />
      <base-list-element :text="'Pokemon 2'" />
      <base-list-element :text="'Pokemon 3'" />
      <base-search-bar v-model="searchString" />
    </ul>
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
import BaseListElement from "@/commons/components/BaseListElement.vue";
import BaseSearchBar from "@/commons/components/BaseSearchBar.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    BaseButton,
    BaseFavoriteButton,
    BaseListElement,
    BaseSearchBar,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  searchString!: string;
  handleClick(): void {
    console.log("click handled");
    console.log(this.searchString);
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

.list {
  background-color: whitesmoke;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
