import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BasicLayout from "./layout/BasicLayout";
import BlankLayout from "./layout/BlankLayout";

Vue.config.productionTip = false;

Vue.component("BasicLayout", BasicLayout);
Vue.component("BlankLayout", BlankLayout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
