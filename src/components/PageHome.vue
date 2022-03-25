<template>
  <div v-for="thread in threads" :key="thread.id">
    <div>
      <h3>{{ thread.title }}</h3>
      <div v-for="postId in thread.posts" :key="postId">
        <p>
          {{ getUser(getPost(postId).userId).name }}
        </p>
        <p>
          {{ getPost(postId).text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';
export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  methods: {
    getPost(postId) {
      return this.posts.find((post) => post.id === postId);
    },
    getUser(userId) {
      return this.users.find((user) => user.id === userId);
    },
  },
};
</script>

<style></style>
