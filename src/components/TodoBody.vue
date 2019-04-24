<!-- todolist component -->
<template>
  <section class="main">
    <input id="toggle-all"
           class="toggle-all"
           type="checkbox"
           v-model="allDone">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li class="todo "
          v-for="(todo, index) in showTodos"
          :key="index"
          v-bind:class="{completed: todo.completed,editing: todo == editTodo}">
        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 v-model="todo.completed">
          <label @dblclick="editTodoHandler(todo)">{{todo.title}}</label>
          <button class="destroy"
                  @click="deleteSingalTodo(todo)"></button>
        </div>
        <input class="edit"
               type="text"
               v-model="todo.title"
               v-todo-focus="editTodo"
               @blur="editInputBlurHandler"
               @keyup.enter="editInputBlurHandler"
               @keyup.esc="cancelEdit">
      </li>
    </ul>

  </section>
</template>

<script>
import '@/assets/base.css'
import '@/assets/index.css'
export default {
  name: "TodoBody",
  props: {
    todos: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    },
    filter: {
      type: String,
      default: 'all'
    }
  },
  data () {
    return {
      newTodo: '',
      beforeEditCache: null,
      editTodo: null
    }
  },
  computed: {
    showTodos () {
      let filter = this.filter;
      let filtedTodos = this.todos.filter(data => {
        if (filter == "all") {
          return data;
        } else if (filter == "active") {
          return !data.completed;
        } else if (filter == "completed") {
          return data.completed;
        }

      });
      return filtedTodos;
    },
    allDone: {
      get: function () {
        return this.todos.every(data => data.completed);
      },
      set: function (value) {
        this.todos.forEach(data => data.completed = value);
      }

    }
  },
  methods: {
    //编辑任务
    editTodoHandler (todo) {
      console.log("editTodoHandler");
      this.beforeEditCache = todo.title;
      this.editTodo = todo;
    },
    //编辑框失去焦点事件
    editInputBlurHandler () {
      console.log("editInputBlurHandler");
      this.editTodo = null;
    },
    //取消编辑
    cancelEdit () {
      console.log("cancelEdit");
      this.editTodo.title = this.beforeEditCache
    },
    //删除单条todo
    deleteSingalTodo (todo) {
      var index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },


  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        console.log(binding.value);
        el.focus();
      }
    }
  }
}

</script>
<style scoped>
</style>