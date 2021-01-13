import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faBorderAll,
  faDesktop,
  faMobileAlt,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
library.add(faAngleDown, faMobileAlt, faTabletAlt, faDesktop, faBorderAll);
app.component("font-awesome-icon", FontAwesomeIcon);
