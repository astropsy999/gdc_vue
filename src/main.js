import {
    createApp
} from 'vue'
import App from './App.vue'
import LoginPage from './components/LoginPage.vue'
import './theme.css'

const app = createApp(App)

//global 

app.component('login-page', LoginPage)

app.mount('#app')