<template>
  <!-- <div :class="$style.hello"> -->
  <div :class="style.hello">
    Hello World!
  </div>
</template>

<script>
import style from "./hello.vue.json";

export default {
  name: "hello",
  // computed: {
  //   style() {
  //     return style;
  //   }
  // },
  beforeCreate() {
    this.style = style;
    // this.style = require("./hello.vue.json");
  },
  created() {
    console.log("$style", this.$style);
    console.log(" style", this.style);
  }
};
</script>

<style module>
.hello {
  background: lime;
}
</style>
