import { ActionContext } from "vuex";

import PokeAPIAdapter from "../adapters/PokeAPIAdapter";
import HttpService from "../../../commons/services/HttpService";

import { PokemonStore } from "@/types/PokemonStore.interface";
import { PokemonDetail } from "@/types/PokemonDetails.interface";
import { ref } from "vue";

const pokemonAdapter = new PokeAPIAdapter(new HttpService());

export enum MUTATION_TYPES {
  INIT = "INITIALIZE",
  APPEND = "APPEND",
  UPDATE_LIST = "UPDATE_NEXT_POKEMON_LIST_URL",
  TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
  TOGGLE_MODAL = "TOGGLE_MODAL",
  LOAD_MODAL_DATA = "LOAD_MODAL_DATA",
}

export enum ACTION_TYPES {
  INIT = "INITIALIZE",
  LOAD_NEXT = "LOAD_NEXTI",
  UPDATE_LIST = "UPDATE_NEXT_POKEMON_LIST_URL",
  DISPLAY_MODAL = "DISPLAY_MODAL",
}

const modulePokedex = {
  state: (): PokemonStore => ({
    pokemonList: null,
    nextPokemonListURL: null,
    modal: {
      display: false,
      data: null,
    },
  }),
  mutations: {
    [MUTATION_TYPES.INIT](
      state: PokemonStore,
      payload: { pokemonList: PokemonDetail[]; nextPokemonListURL: string }
    ) {
      state.pokemonList = payload.pokemonList;
      state.nextPokemonListURL = payload.nextPokemonListURL;
    },
    [MUTATION_TYPES.APPEND](state: PokemonStore, payload: PokemonDetail[]) {
      state.pokemonList =
        // does not append if concat results in null
        state.pokemonList?.concat(payload) ?? state.pokemonList;
    },
    [MUTATION_TYPES.UPDATE_LIST](state: PokemonStore, payload: string) {
      state.nextPokemonListURL = payload;
    },
    [MUTATION_TYPES.TOGGLE_FAVORITE](state: PokemonStore, payload: number) {
      if (state.pokemonList) {
        console.log("current state", state.pokemonList[payload - 1].isFavorite);
        const newList = [...state.pokemonList];

        newList[payload - 1].isFavorite = !newList[payload - 1].isFavorite;
        state.pokemonList = newList.concat([]);
      }
    },
    [MUTATION_TYPES.TOGGLE_MODAL](state: PokemonStore) {
      state.modal.display = !state.modal.display;
    },
    [MUTATION_TYPES.LOAD_MODAL_DATA](
      state: PokemonStore,
      payload: PokemonDetail
    ) {
      state.modal.data = payload;
    },
  },
  actions: {
    async [ACTION_TYPES.INIT]({ commit }: ActionContext<PokemonStore, any>) {
      commit("loading");
      const pokemonList = await pokemonAdapter.getInitialPokemonList();
      const nextPokemonListURL = pokemonAdapter.nextList;
      console.log(await pokemonAdapter.getSinglePokemon(1));
      commit(MUTATION_TYPES.INIT, { pokemonList, nextPokemonListURL });
      commit("notLoading");
    },
    async [ACTION_TYPES.DISPLAY_MODAL](
      { commit, state }: any,
      payload: number
    ) {
      const pokemonData = await pokemonAdapter.getSinglePokemon(payload);
      pokemonData.isFavorite =
        state.pokemonList[Number(pokemonData.id) - 1].isFavorite;
      commit(MUTATION_TYPES.LOAD_MODAL_DATA, pokemonData);
      commit(MUTATION_TYPES.TOGGLE_MODAL);
    },
  },
  getters: {},
};

export default modulePokedex;
