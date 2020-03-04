import Vue from 'vue'

const app = new Vue({
//   el: '#root',
  data: {
    text: 0
  },
  //  watch: {
  //    text (newText, oldText) {
  //      console.log(`${newText} : ${oldText}`)
  //    }
  //  },
  template: "<div ref='div'>{{text}}</div>"
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)

// console.log(app.$data)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
// const unwatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText}:${oldText}`)
// })
// setTimeout(() => {
//   unwatch()
// }, 2000)
// app.$on('test', (a, b) => {
//   console.log(`test in ${a} and ${b}`)
// })
// app.$emit('test', 1, 2)
app.$forceUpdate()
