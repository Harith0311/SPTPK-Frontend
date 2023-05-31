import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router";

// import toast from 'vue-toast'
// import 'vue-toast/dist/index.css'

const app = createApp(App);

app.use(router);

app.mount("#app");


      