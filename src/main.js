import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import firebase from 'firebase';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { firebaseConfig } from "./config/firebaseConfig";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ElementUI);

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
