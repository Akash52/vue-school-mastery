import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);

const requireComponent = require.context(
  './components',
  true,
  /App[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '');
  app.component(baseComponentName, baseComponentConfig);
});

app.mount('#app');
