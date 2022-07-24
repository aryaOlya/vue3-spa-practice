import { createApp } from 'vue'
import App from './App.vue'
import route from "./router/index"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App)
app.use(route)
app.mount('#app')
