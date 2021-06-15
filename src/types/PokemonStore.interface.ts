import { PokemonDetail } from "./PokemonDetails.interface";

interface modalData {
  display: boolean;
  data: null | PokemonDetail;
}

export interface PokemonStore {
  pokemonList: null | PokemonDetail[];
  nextPokemonListURL: null | string;
  modal: modalData;
}
