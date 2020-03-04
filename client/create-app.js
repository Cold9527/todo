import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import Notification from './components/notification'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'
import Tabs from './components/tabs'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Meta)
Vue.use(Notification)
Vue.use(Tabs)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })

  return { app, router, store }
}
