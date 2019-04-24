<template>
  <Todo :todos.sync="todos"></Todo>
</template>

<script>
import Todo from './components/Todo.vue'
export default {
  name: 'app',
  components: {
    Todo
  },
  data () {
    return {
      todos: [{
        title: '代办一',
        completed: true,
        editing: false
      }, {
        title: '代办二',
        completed: false,
        editing: false
      }, {
        title: '代办三',
        completed: false,
        editing: false
      }, {
        title: '代办4',
        completed: false,
        editing: false
      }]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style>
</style>
