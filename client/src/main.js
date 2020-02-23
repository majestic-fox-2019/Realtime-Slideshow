import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    idxSlide: localStorage.idxSlide
  },
  mutations: {
    updateSlide (state, newValue) {
      state.idxSlide  = newValue;
      localStorage.setItem("idxSlide", newValue);
    }
  }
});

new Vue({
  el: '#app',
  components: { App },
  template: `
    <div class="app">
      <app></app>
    </div>
  `,
  store
});