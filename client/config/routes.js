export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    props: true,
    // props: (route) => ({ id: route.params.id })||true,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'aadasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before Enter')
      next()
    },
    // children: [
    //   {
    //     path: 'test',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
    //   }
    // ],
    component: () => import(/* webpackChunkName: "about" */ '../views/todo/todo.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  }
]
