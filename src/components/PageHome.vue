<template>
  <h1>Welcome to the Vue 3 Forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
import sourceData from '@/data.json';
import ThreadList from './ThreadList.vue';

export default {
  components: { ThreadList },
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>
