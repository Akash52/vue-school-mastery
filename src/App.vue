<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="container">
    <page-home-vue />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import './assets/styles.css';
</style>
