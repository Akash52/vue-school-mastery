<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="container">
    <page-home-vue />
  </div>
</template>

<script>
import PageHomeVue from './components/PageHome.vue';

export default {
  name: 'App',
  components: {
    PageHomeVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
