import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// Import the components
import InputText from './components/InputText.vue'
import DarkModeButton from './components/DarkModeButton.vue'

const app = createApp(App)

// Register the components globally
app.component('InputText', InputText)
app.component('DarkModeButton', DarkModeButton)

app.mount('#app')