import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { Foo } from "./components/Foo";
import { Bar } from "./components/Bar";

const routes = [
  { path: "/", component: Foo },
  { path: "/bar", component: Bar }
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount("#app");
