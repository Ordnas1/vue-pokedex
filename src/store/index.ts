import Vuex, { createStore } from "vuex";
import pokedex from "@/modules/pokedex/store";

/* export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { pokedex },
}); */

const store = new Vuex.Store({
  modules: {
    pokedex: pokedex,
  },
  state: {
    loading: false,
  },
  mutations: {
    loading(state) {
      state.loading = true;
    },
    notLoading(state) {
      state.loading = false;
    },
  },
});

export default store;
