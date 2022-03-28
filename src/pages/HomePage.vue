<template>
  <h1 class="text-center">Welcome to the Vue 3 Forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
import sourceData from '@/data.json';
import ThreadList from '@/components/ThreadList';

export default {
  components: { ThreadList },
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>
