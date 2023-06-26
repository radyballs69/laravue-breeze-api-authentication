import "@/style.css";

import { createApp, markRaw } from "vue";
// A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree.
import { createPinia } from "pinia";
import router from "@/router";
import axios from "axios";

import App from "@/App.vue";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
