import Vue from 'vue'

const component = {
  template: '<div> this is a component</div>'
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: '<comp-one></comp-one>'
})
