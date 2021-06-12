import { mount } from "@vue/test-utils";

import BaseFavoriteButton from "@/commons/components/BaseFavoriteButton.vue";

describe("Base Favorite Button", () => {
  test("should properly emit 'clicked' event", async () => {
    const wrapper = mount(BaseFavoriteButton);
    const button = wrapper.find('[data-test="clickable"]');

    await button.trigger("click");

    expect(wrapper.emitted().clicked.length).toBe(1);
  });
  test('should properly change icon when recieving "favorite" prop', async () => {
    const wrapper = mount(BaseFavoriteButton, { props: { isFavorite: true } });
    const icon = wrapper.find('[data-test="icon"]');

    expect(icon.classes("favorite")).toBe(true);
  });
});
