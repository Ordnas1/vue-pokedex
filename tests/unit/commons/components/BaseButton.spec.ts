import { mount } from "@vue/test-utils";

import BaseButton from "@/commons/components/BaseButton.vue";

describe("Base Button", () => {
  test("renders props.text when passed", () => {
    const testText = "Test Button";

    const wrapper = mount(BaseButton, {
      props: {
        text: testText,
      },
    });
    const clickable = wrapper.find('[data-test="clickable"]');

    expect(clickable.text()).toBe(testText);
  });
  test("emits 'clicked event'", async () => {
    const testText = "Test Button";

    const wrapper = mount(BaseButton, {
      props: {
        text: testText,
      },
    });

    const clickable = wrapper.find('[data-test="clickable"]');
    await clickable.trigger("click");
    expect(wrapper.emitted().clicked.length).toBe(1);
  });
  test("properly places icon", async () => {
    const testText = "Test Button";

    const wrapper = mount(BaseButton, {
      props: {
        text: testText,
        icon: "star",
      },
    });

    let icon = wrapper.find('[data-test="icon"]');
    expect(icon.attributes("icon")).toBe("star");

    await wrapper.setProps({ icon: "list" });

    icon = wrapper.find('[data-test="icon"]');
    expect(icon.attributes("icon")).toBe("list");

    await wrapper.setProps({ icon: null });

    expect(wrapper.find('[data-test="icon"]').exists()).toBe(false);
  });
});
