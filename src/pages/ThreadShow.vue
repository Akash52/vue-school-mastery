<template>
  <div class="col-large push-top">
    <button class="btn-home">
      <router-link to="/"> Home </router-link>
    </button>
    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts" />

    <div class="col-full">
      <form @submit.prevent="addPost">
        <textarea
          v-model="newPostText"
          placeholder="What's on your mind?"
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
        ></textarea>
        <div class="form-actions">
          <button class="btn-blue">Submit Post</button>
        </div>
      </form>
    </div>
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
      newPostText: '',
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
  methods: {
    addPost() {
      const newPost = {
        id: this.posts.length + 1,
        threadId: this.id,
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
        text: this.newPostText,
        publishedAt: new Date().toLocaleString(),
      };
      this.posts.push(newPost);
      this.newPostText = '';
    },
  },
};
</script>
