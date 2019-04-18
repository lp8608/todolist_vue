<template>
     <div id="app">
       <header class="header">
        <h2>todos</h2>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo " v-for="todo in todos" :key="todo.title" 
          v-bind:class="{completed: todo.completed,editing: todo == editTodo}">
            <div class="view">
              <input class="toggle" type="checkbox">
              <label @click="editTodoHandler(todo)">{{todo.title}}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" v-model="todo.title" v-todo-focus="editTodo"
            @blur="editInputBlurHandler" @keyup.enter="editInputBlurHandler" @keyup.esc="cancelEdit">
          </li>
        </ul>
    
        <footer class="footer">
          <span class="todo-count">
            <strong>{{todos.length}}</strong> todo
          </span>
          <ul class="filters">
            <li><a href="#/all" class="selected">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
          </ul>
          <button class="clear-completed">Clear completed</button>
        </footer>
      </section> 
      <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="http://evanyou.me">Evan You</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer> 
     </div>
</template>

<script>
import '@/assets/base.css'
import '@/assets/index.css'
// import Todo from './components/Todo.vue'
export default {
  name: 'app',
  components: {
    // Todo
  },
  data(){
      return { 
        filter: 'all',
        newTodo: '',
        beforeEditCache:null,
        editTodo:null,
        todos:[{
            title: '代办一',
            completed: true,
            editing: false
        },{
            title: '代办二',
            completed: false,
            editing: false
        },{
            title: '代办三',
            completed: false,
            editing: false
        },{
            title: '代办4',
            completed: false,
            editing: false
        }]
      } 
    },
    computed: {
      show() {
        let filter = this.filter;
        let todos = this.todos.filter(data => {
          if(filter == "all") {
            return data;
          }else if(filter == "active") {
            return !data.completed ;
          }else if(filter == "completed") {
            return !data.completed ;
          }

        });
        
        return todos;
        
      }
      
    },
    methods:{
      //编辑任务
      editTodoHandler(todo){
        console.log("editTodoHandler");
        this.beforeEditCache = todo.title;
        this.editTodo = todo;

      },
      //编辑框失去焦点事件
      editInputBlurHandler(){
        console.log("editInputBlurHandler");
        this.editTodo = null;
      },
      //取消编辑
      cancelEdit(){
        console.log("cancelEdit");
        this.editTodo.title = this.beforeEditCache
      }

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
