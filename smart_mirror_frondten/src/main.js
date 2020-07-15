/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import vuetify from './plugins/vuetify'
import store from './store/store.js'
import createPersistedState from 'vuex-persistedstate'
import Glitch from 'vue-glitch'

Vue.component('glitch', Glitch)
Vue.config.productionTip = false

export default function ({ store, app: { router } }) {
  sync(store, router)
  // [... some custom logic (watchers, etc.) omitted ...]
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
