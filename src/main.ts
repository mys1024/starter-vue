import App from './App.vue'
import './assets/main.less'

// vue app
const app = createApp(App)
installVueModules(app)
app.mount('#app')
