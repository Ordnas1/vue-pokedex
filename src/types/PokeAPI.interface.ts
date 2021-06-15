export interface AllPokemonEndpointResult {
  name: string;
  url: string;
  isFavorite?: boolean;
  id?: string;
}

export interface AllPokemonEndpoint {
  count: string;
  next: string;
  previous: string;
  results: AllPokemonEndpointResult[];
}
