<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <!-- <todo /> -->
    <!-- <router-link to="/app">
      app
    </router-link>
    <router-link to="/login">
      login
    </router-link> -->
    <!-- <p> {{ fullName }} </p><p> {{ count }} </p> -->
    <!-- <p>{{textA}}</p><p>{{textPlus}}</p><p>{{textC}}</p> -->
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <notification content="test notify"></notification> -->
    <Footer />
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Vidy\'s Todo app'
  },
  name: 'App',
  components: {
    Header,
    Footer
    // Todo
  },
  data () {
    return {

    }
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // ...mapState({
    //   count: 'count'
    //   // textC: (state) => state.c.text
    // }),
    // ...mapGetters({
    //   fullName: 'fullName'
    //   // textPlus: 'a/textPlus'
    // })
  },
  mounted () {
    // console.log(this.$store.state)
    // let i = 0
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this['a/add']()
    // this.addText()
  },
  methods: {
    // ...mapActions([
    //   'updateCountAsync'
    //   // 'a/add',
    //   // 'addText'
    // ]),
    // ...mapMutations([
    //   'updateCount'
    //   // 'a/updateText'
    // ])
  }
}
</script>

<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  #cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    z-index -1
    opacity .2
</style>
