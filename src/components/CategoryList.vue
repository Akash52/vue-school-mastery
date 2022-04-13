<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :category-name="category.name"
  />
</template>

<script>
import ForumList from './ForumList.vue';
import sourceData from '@/data.json';

export default {
  components: {
    ForumList,
  },
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  methods: {
    getForumsForCategory(category) {
      return sourceData.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style></style>
