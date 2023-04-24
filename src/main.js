import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import '@fortawesome/fontawesome-free/js/all'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';


createApp(App)
.component('v-select', vSelect)
    .use(router)
    .mount('#app')