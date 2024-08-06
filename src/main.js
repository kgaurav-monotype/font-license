import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { ComponentLibrary } from '@antiqua-design-system/vue-components';
import router from './router';




createApp(App).use(router).use(ComponentLibrary).mount('#app');

router.isReady().then(() => {
    router.push('/font-license/');
  });