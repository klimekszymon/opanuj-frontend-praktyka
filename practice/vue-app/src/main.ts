import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import vClickOutside from "click-outside-vue3";

import { Icon } from "@iconify/vue";

import './index.css'

// composables
import { useConfetti } from "./composables/useConfetti";
const { init } = useConfetti();
init();

// Import the components
import InputText from './components/InputText.vue'
import DarkModeButton from './components/DarkModeButton.vue'

const app = createApp(App)

// use cases
app.use(router)
app.use(vClickOutside);

app.config.errorHandler = (err) =>{
    // add sentry integration here
    console.error(err)
}

// Register the components globally
app.component('InputText', InputText)
app.component('DarkModeButton', DarkModeButton)
app.component('Icon', Icon)
app.mount('#app')