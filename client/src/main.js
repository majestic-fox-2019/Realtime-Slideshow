import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

Vue.use(VueSocketIOExt, socket);

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

Vue.prototype.$http = instance
Vue.prototype.$socket = socket

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
