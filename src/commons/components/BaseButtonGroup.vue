<template>
  <div class="wrapper">
    <div v-if="view === 'all'" class="btn-group">
      <Button :text="'All'" :icon="'list'" disabled />
      <Button
        :text="'Favorite'"
        :icon="'star'"
        :inactive="true"
        @clicked="goToFavorites"
      />
    </div>
    <div v-if="view === 'favorites'" class="btn-group">
      <Button
        :text="'All'"
        :icon="'list'"
        :inactive="true"
        @clicked="goToAll"
      />
      <Button :text="'Favorite'" :icon="'star'" disabled />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$minSize: toRem(315px);
$maxSize: toRem(570px);

.wrapper {
  height: toRem(80px);
  width: 100vw;
  background-color: $whitest;
  z-index: 20;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
}
.btn-group {
  min-width: $minSize;
  display: flex;
  justify-content: space-between;
  padding: toRem(18px) 0;
}
</style>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

import Button from "@/commons/components/BaseButton.vue";

class Props {
  view!: "all" | "favorites";
}

@Options({
  components: { Button },
})
export default class BaseButtonGroup extends Vue.with(Props) {
  goToAll(): void {
    this.$router.push("all");
  }

  goToFavorites(): void {
    this.$router.push("favorites");
  }
}
</script>