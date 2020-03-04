import Vue from 'vue'

const app = new Vue({
//   el: '#root',
  template: "<div>{{isActive ? 'active' : 'notActive'}} {{arr.join(' ')}}{{Date.now()}}<p v-html = 'html'></p></div>",
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>1 1 1</span>'
  }
})

app.$mount('#root')
