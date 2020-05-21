import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueComposition from "@vue/composition-api";

Vue.config.productionTip = false;

Vue.use(VueComposition);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
