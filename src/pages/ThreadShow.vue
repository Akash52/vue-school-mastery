<template>
  <div class="col-large push-top">
    <button class="btn-home">
      <router-link to="/"> Home </router-link>
    </button>
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />
  </div>
</template>

<script>
import sourceData from '@/data.json';
import PostList from '@/components/PostList.vue';

export default {
  name: 'ThreadShow',
  components: {
    PostList,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
    };
  },

  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
      // also available under this.$route.params.id
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
};
</script>
