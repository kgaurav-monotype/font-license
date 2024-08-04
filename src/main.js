import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { ComponentLibrary } from '@antiqua-design-system/vue-components';


createApp(App).use(ComponentLibrary).mount('#app');
