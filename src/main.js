import { createApp } from 'vue';
import App from './App.vue';
import PageHomeVue from './components/PageHome.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHomeVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
