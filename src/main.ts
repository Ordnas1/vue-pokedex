import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Import global styles
import "./assets/styles/main.scss";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faList);

createApp(App)
  .component("fa-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
