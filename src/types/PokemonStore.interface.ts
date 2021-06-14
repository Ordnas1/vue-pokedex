import { PokemonDetail } from "./PokemonDetails.interface";

export interface PokemonStore {
  pokemonList: null | PokemonDetail[];
  nextPokemonListURL: null | string;
}
