import App from './App.vue'
import './assets/main.css'

// vue app
const app = createApp(App)
installVueModules(app)
app.mount('#app')
