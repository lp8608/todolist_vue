<!-- todolist project header component -->
<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
           autofocus
           autocomplete="off"
           placeholder="What needs to be done?"
           @keyup.enter="addTodoHandler"
           v-model="newTodo">
  </header>
</template>

<script>
import '@/assets/base.css'
import '@/assets/index.css'
import { mapActions } from 'vuex';
export default {
  name: "TheHeader",

  data () {
    return {
      newTodo: ''
    };
  },

  components: {},

  computed: {},

  methods: {
    ...mapActions('addTodo'),
    //新增todo
    addTodoHandler () {
      if (this.newTodo.trim()) {
        // this.$emit('addTodoHandler', { title: this.newTodo.trim(), completed: false });
        this.addTodo({ title: this.newTodo.trim(), completed: false });
      }
      this.newTodo = "";
    },

  }
}

</script>
<style scoped>
</style>