<template>
  <div id="app">
    <TheNavigation />
    <Shopping />
      <transition name="fade" mode="out-in">
      <router-view :key="$route.path"  />
      </transition>
       <TheFooter />
    </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
import Shopping from "./components/Shopping.vue";
export default {
  name: "app",
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  components: {
    TheNavigation,
    TheFooter,
    Shopping,
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
}
</style>
