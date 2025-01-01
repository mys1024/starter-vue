import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
import 'virtual:uno.css'
import './assets/main.less'

// vue app
const app = createApp(App)
installVueModules(app)
app.mount('#app')
