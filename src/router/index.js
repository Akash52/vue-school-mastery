import HomePage from '@/pages/HomePage';
import NotFound from '@/pages/NotFound';
import ThreadShow from '@/pages/ThreadShow.vue';
import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json';
import FroumPageVue from '@/pages/FroumPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/forum/:id',
    name: 'FroumPage',
    component: FroumPageVue,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      //check if the thread exists
      //if exists continue
      //if not redirect to 404
      if (sourceData.threads.find((thread) => thread.id === to.params.id)) {
        next();
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
