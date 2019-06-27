import "./index.css";
import Vue from "vue";
import Hello from "./components/hello.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { Hello }
});
