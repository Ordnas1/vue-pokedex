<template>
  <div class="modal-wrapper" :class="{ close: !isOpen }">
    <transition>
      <div class="modal-card">
        <span class="close-icon" @click="closeModal"
          ><fa-icon class="icon" icon="times-circle"></fa-icon
        ></span>
        <div class="pokemon-img">
          <img :src="pokemon?.spriteUrl" alt="" />
        </div>
        <div class="pokemon-detail">
          <ul>
            <li>
              <span><strong>Name: </strong>{{ pokemon?.name }}</span>
            </li>
            <li>
              <span><strong>Weight: </strong>{{ pokemon?.weight }}</span>
            </li>
            <li>
              <span><strong>Height: </strong>{{ pokemon?.height }}</span>
            </li>
            <li>
              <span
                ><strong>Types: </strong>{{ getTypes(pokemon?.types) }}</span
              >
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <BaseButton :text="'Share to my friends'" @click="handleShareButton" />
          <FavoriteButton
            :isFavorite="pokemon?.isFavorite"
            @clicked="toggleFavorite(pokemon?.id)"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.close {
  display: none;
  visibility: hidden;
}

.modal-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: rgba(94, 94, 94, 0.5);

  @include vertical-center-flex;

  position: fixed;
  z-index: $z-index-large;
}

.close-icon {
  position: absolute;
  top: 12px;
  right: 10px;
  color: $whitest;

  & .icon {
    height: 26px;
    width: 26px;
  }
}

.modal-card {
  position: relative;
  background-color: $whitest;
  height: 506px;
  width: 315px;
  @include vertical-center-flex;
  align-items: stretch;
}

.pokemon-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  background-image: url(../../../assets/img/modal_bg.png);

  & > img {
    width: 180px;
    height: 180px;
  }
}

.pokemon-detail {
  flex: auto;

  & > ul {
    padding: 0 30px;
    list-style: none;
    height: 100%;
    margin: 0;
    @include vertical-center-flex;
    align-items: stretch;
    justify-content: space-around;
  }

  & li {
    height: 50px;
    text-align: left;
    display: flex;
    align-items: center;
  }
}
</style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { PokemonDetail } from "@/types/PokemonDetails.interface";

import BaseButton from "@/commons/components/BaseButton.vue";
import FavoriteButton from "@/commons/components/BaseFavoriteButton.vue";

import { MUTATION_TYPES } from "@/modules/pokedex/store";

class Props {
  isOpen!: boolean;
}

@Options({
  components: {
    BaseButton,
    FavoriteButton,
  },
  computed: {
    pokemon() {
      return this.$store.state.pokedex.modal.data;
    },
  },
})
export default class PokemonDetailsModal extends Vue.with(Props) {
  $store!: any;
  pokemon!: any;
  getTypes(types: string[]): string | undefined {
    if (!types) return;
    return types.join(", ");
  }

  closeModal(): void {
    this.$store.commit(MUTATION_TYPES.TOGGLE_MODAL);
  }

  toggleFavorite(number: number): void {
    this.$store.commit(MUTATION_TYPES.TOGGLE_FAVORITE, number);
    this.$forceUpdate();
  }

  async handleShareButton(): Promise<void> {
    const information = `${this.pokemon.name}, Height: ${this.pokemon.height}, Weight: ${this.pokemon.weight}, Types: ${this.pokemon.types}  `;
    console.log(information)
    await navigator.clipboard.writeText(information);
  }
}
</script>
