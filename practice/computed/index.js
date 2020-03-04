import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    firstName: 'Vidy',
    lastName: 'Liu',
    number: 0,
    fullName: ''
  },
  template: `
    <div>
        <p>Name:{{name}}</p>
        <p>Name:{{getName()}}</p>
        <p>Number:{{number}}</p>
        <p>Number:{{fullName}}</p>
        <p><input type='text' v-model='number'></p>
        <p>FirstName:<input type='text' v-model='firstName'></p>
        <p>LastName:<input type='text' v-model='lastName'></p>
        <p>name:<input type='text' v-model='name'></p>
    </div>
  `,
  computed: {
    // name () {
    //   console.log('new name')
    //   get () {
    //   }
    //   return `${this.firstName} ${this.lastName}`
    //
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName (newName, oldName) {
      this.fullName = newName + '' + this.lastName
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
