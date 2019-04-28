import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../components/Todo.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: "history",
  routes: [{
      path: '/',
      name: 'root',
      component: Todo
    },
    {
      path: '/:filter',
      name: 'filter',
      component: Todo
    }
  ]
})

export default router