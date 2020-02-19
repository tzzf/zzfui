import Vue from "vue";
import App from "./App";
import router from "./router.config";
import zzfui from "src/index.js";
import "packages/zzf-css/src/index.css";
// 完整引用
Vue.use(zzfui);
// console.log(zzfui);
// 独立引用
// const { Hello } = zzfui
// Vue.component(Hello.name, Hello)
const { Button } = zzfui;
Vue.component(Button.name, Button);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app-container",
  router,
  components: { App },
  template: "<App/>"
});
