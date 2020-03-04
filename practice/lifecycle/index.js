import Vue from 'vue'

const app = new Vue({
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
  },
  mounted () {
    console.log(this, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  }
  // render (h) {
  //   return h('div', {}, this.text)
  // },
  // renderError (h, err) {
  //   return h('div', {}, err.stack)
  // },
  // errorCaptured () {
  //   //会向上冒泡，并且正式环境可以使用
  // }
})

app.$mount('#root')
// setInterval(() => {
//   app.text += 1
// }, 5000)
// setTimeout(() => {
//   app.$destroy()
// }, 1000)
