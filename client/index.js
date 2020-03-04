import Vue from 'vue'
import VueRoute from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router.js'
import createStore from './store/store.js'

Vue.use(Vuex)
Vue.use(VueRoute)

const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: '3'
  }
})

store.unregisterModule('c')

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count is:', newCount)
// })
// store.subscribe((mutations, state) => {
//   console.log(mutations.type)
//   console.log(mutations.payload)
// })

// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })

router.beforeEach((to, from, next) => {
  next()
  console.log('befor eEach invoke')
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('befor Resolve invoke')
  next()
})

router.afterEach((to, from) => {
  console.log('after Each invoke')
})
// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
