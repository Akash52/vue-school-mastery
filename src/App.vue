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
@import './assets/styles.css';
</style>
