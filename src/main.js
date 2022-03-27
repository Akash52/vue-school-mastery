import { createApp } from 'vue';
import App from './App.vue';
import PageHomeVue from './components/PageHome';
import PageThreadShow from './components/PageThreadShow';

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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
