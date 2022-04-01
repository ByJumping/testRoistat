import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/app.scss'
import Maska from "maska";


const app = createApp(App)
app.use(Maska)
app.mount('#app')