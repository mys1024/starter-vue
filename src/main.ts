import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import 'virtual:uno.css';
import './assets/main.scss';

// vue app
const app = createApp(App);
installVueModules(app);
app.mount('#app');
