import PageHomeVue from '@/components/PageHome.vue';
import PageThreadShow from '@/components/PageThreadShow.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHomeVue,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
