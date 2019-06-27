<template>
  <div :class="$style.hello">
    Hello World!
  </div>
</template>

<script>
export default {
  name: "hello",
  created() {
    console.log(this.$style);
  }
};
</script>

<style module>
.hello {
  background: lime;
}
</style>
