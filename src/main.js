import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/plugins/router';
import '@/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(router).mount('#app');
