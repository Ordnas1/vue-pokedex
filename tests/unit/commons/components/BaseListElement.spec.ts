import { mount } from "@vue/test-utils";

import BaseListElement from "@/commons/components/BaseListElement.vue";

describe("Base List Element", () => {
  test("should render with proper content", () => {
    const testText = "Testmon";
    const wrapper = mount(BaseListElement, { props: { text: testText } });

    const text = wrapper.find('[data-test="textContent"]');

    expect(text.text()).toBe(testText);
  });
});
