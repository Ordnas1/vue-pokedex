import { mount } from "@vue/test-utils";

import BaseList from "@/commons/components/BaseList.vue";

import { PokemonListElement } from "@/types/PokemonDetails.interface";

const testPokemonData: PokemonListElement[] = [
  {
    name: "Testmon",
    isFavorite: false,
  },
  {
    name: "pikachu",
    isFavorite: true,
  },
  {
    name: "Amoonguss",
    isFavorite: true,
  },
];

describe("Base List", () => {
  test("should show a message if the list is empty", () => {
    const wrapper = mount(BaseList);
    const messageWhenEmpty = wrapper.find('[data-test="messageWhenEmpty"]');

    expect(messageWhenEmpty).toBeTruthy();
  });
  test("should render elements properly", () => {
    const wrapper = mount(BaseList, {
      props: { pokemonData: testPokemonData, onlyFavorites: false },
    });

    const elements = wrapper.findAll('[data-test="element"]');

    expect(elements.length).toBe(3);
  });
  test("should only render favorites when 'onlyFavorite' prop is passed", () => {
    const wrapper = mount(BaseList, {
      props: { pokemonData: testPokemonData, onlyFavorites: true },
    });

    const elements = wrapper.findAll('[data-test="element"]');

    expect(elements.length).toBe(2);
  });
});
