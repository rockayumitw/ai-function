import { createApp } from 'vue';

// import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/app.scss';

const app = createApp(App);

app.use(store)
  .use(router)
  // .use(axios)
  .mount('#app');
