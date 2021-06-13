import { mount } from "@vue/test-utils";

import BaseSearchBar from "@/commons/components/BaseSearchBar.vue";

describe("Base search bar", () => {
  test("should emit event with proper value", async () => {
    const testValue = "Some test value";
    const wrapper = mount(BaseSearchBar);
    const input = wrapper.find('[data-test="text"]');

    await input.setValue(testValue);
    await input.trigger("input");

    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
  });
});
