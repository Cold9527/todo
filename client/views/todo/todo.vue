<template>
  <section class="real-app">
    <tabs :value = 'filter' @change="handleChangeTab">
      <tab :label='tab' :index='tab' v-for="tab in states" :key="tab"></tab>
    </tabs>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="handleAdd"
    >
    <item
      v-for="todo of filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
      @toggle="toggleTodoState"
    />
    <Helper
      :filter="filter"
      :todos="todos"
      @clearAllCompleted="clearAllCompleted"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Item from './item.vue'
import Helper from './help.vue'

// let id = 0
export default {
  // beforeRouteEnter (to, from, next) {
  //   console.log('todo route enter')
  //   next(vm => {
  //     console.log('this vm is', vm.id)
  //   })
  // },
  // beforeRouteUpdate (to, from, next) {
  //   console.log('todo route update')
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log('todo route leave')
  //   if (global.confirm('are you sure?')) {
  //     next()
  //   }
  // },
  metaInfo: {
    title: 'The todo App'
  },
  name: '',
  // props: ['id'],
  components: {
    Item,
    Helper
  },
  data () {
    return {
      filter: 'all',
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'addTodo',
      'deleteTodo',
      'updateTodo',
      'deleteAllCompleted'
    ]),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      const todo = {
        content,
        completed: false
      }
      this.addTodo(todo)
      // this.todos.unshift({
      //   id: id++,
      //   content: e.target.value.trim(),
      //   completed: false
      // })
      e.target.value = ''
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    },
    clearAllCompleted () {
      // this.todos = this.todos.filter(todo => !todo.completed)
      this.deleteAllCompleted()
    },
    handleChangeTab (value) {
      this.filter = value
    }
  },
  mounted () {
    this.fetchTodos()
  }

}
</script>

<style lang='stylus' scoped>
   .real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit
    line-height 1.4em
    border none
    outline none
    color inherit
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>
