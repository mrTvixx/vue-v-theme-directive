import Vue from "vue";
import App from "./App.vue";

import store from "./store";
import themeDirective from "./vThemeDirective";

Vue.directive("theme", {
  bind: themeDirective(store)
});

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
