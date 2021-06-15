import HttpService from "@/commons/services/HttpService";
import { PokemonDetail } from "@/types/PokemonDetails.interface";
import {
  AllPokemonEndpointResult,
  AllPokemonEndpoint,
} from "@/types/PokeAPI.interface";

import { capitalize } from "@/commons/helpers";

export default class PokeAPIAdapter {
  private elementsPerList = 151;
  private rootUrl = `https://pokeapi.co/api/v2/pokemon`;
  private nextListUrl: string;

  constructor(private http: HttpService) {
    this.nextListUrl = "";
  }

  get nextList(): string {
    return this.nextListUrl;
  }

  async getInitialPokemonList(): Promise<any> {
    return await this.fetchPokemon(
      `${this.rootUrl}?limit=${this.elementsPerList}`
    );
  }

  async getNextPokemonList() {
    return await this.fetchPokemon(this.nextListUrl);
  }

  async getSinglePokemon(id: number) {
    const data = await this.http.get<any>(`${this.rootUrl}/${id}`);
    console.log("[Adapter] data", data);
    const res = this.shapeSinglePokemonDetail(data);
    return res;
  }

  // Private methods
  private async fetchPokemon(resourse: string): Promise<any> {
    const data = await this.http.get<AllPokemonEndpoint>(resourse);
    const pokemonList = this.shapePokemonList(data.results);

    this.nextListUrl = data.next;

    return pokemonList;
  }

  private shapePokemonList(fetchedList: any[]): AllPokemonEndpointResult[] {
    return fetchedList.map(
      (pokemon: any): AllPokemonEndpointResult => ({
        name: capitalize(pokemon.name),
        url: pokemon.url,
        isFavorite: false,
        id: pokemon.url.split("/")[pokemon.url.split("/").length - 2],
      })
    );
  }

  private shapeSinglePokemonDetail(pokemon: any): PokemonDetail {
    return {
      weight: pokemon.weight,
      height: pokemon.height,
      types: pokemon.types
        .map((elem: any) => elem.type.name)
        .map((types: string) => capitalize(types)),
      id: pokemon.id,
      spriteUrl: pokemon.sprites.other["official-artwork"].front_default,
      name: capitalize(pokemon.name),
    };
  }
}
