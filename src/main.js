import router from '@/router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(createPinia()).use(router).mount('#app');
