import HttpService from "@/commons/services/HttpService";
import { PokemonDetail } from "@/types/PokemonDetails.interface";
import {
  AllPokemonEndpointResult,
  AllPokemonEndpoint,
} from "@/types/PokeAPI.interface";

export default class PokeAPIAdapter {
  private rootUrl = "https://pokeapi.co/api/v2/pokemon/";
  private nextListUrl: string;

  constructor(private http: HttpService) {
    this.nextListUrl = "";
  }

  get nextList(): string {
    return this.nextListUrl;
  }

  async getInitialPokemonList(): Promise<any> {
    return await this.fetchPokemon(this.rootUrl);
  }
  async getNextPokemonList() {
    return await this.fetchPokemon(this.nextListUrl);
  }
  //getSinglePokemon() {}

  private async fetchPokemon(resourse: string): Promise<any> {
    const data = await this.http.get<AllPokemonEndpoint>(resourse);
    this.nextListUrl = data.next;

    const fetchedList = await this.fetchPokemonFromResultsList(data.results);
    const shapedList = this.shapePokemonList(fetchedList);

    return shapedList;
  }

  private async fetchPokemonFromResultsList(
    results: AllPokemonEndpointResult[]
  ): Promise<any[]> {
    const promiseList = results.map(
      async (pokemon) => await this.http.get(pokemon.url)
    );

    return Promise.all(promiseList);
  }

  private shapePokemonList(fetchedList: any[]): PokemonDetail[] {
    return fetchedList.map(
      (pokemon: any): PokemonDetail => ({
        id: pokemon.id,
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        types: pokemon.types.map((item: any) => item.type.name),
        spriteUrl: pokemon.sprites.other["official-artwork"].front_default,
        isFavorite: false,
      })
    );
  }
}
