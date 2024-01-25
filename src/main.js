import router from './router/index.js';
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import  'bootstrap/dist/css/bootstrap-utilities.min.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap.rtl.css';

// import '../public/font/KaushanScript-Regular.ttf';
import App from './App.vue'

import './assets/css/main.css';
import './assets/css/style.css';
import './assets/js/style.js';
import './assets/js/style02.js';

const app = createApp(App);
app.use(router);

app.mount('#app')

