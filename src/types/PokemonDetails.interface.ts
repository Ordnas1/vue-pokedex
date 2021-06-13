export interface PokemonListElement {
  id: number;
  name: string;
  isFavorite: boolean;
}

export interface PokemonDetail extends PokemonListElement {
  weight: number;
  height: number;
  types: string[];
  spriteUrl: string;
}
