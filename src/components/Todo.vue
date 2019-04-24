<template>
  <div>
    <div class="todoapp">
      <TheHeader @addTodoHandler="addTodo"></TheHeader>
      <TodoBody :todos='todos'
                :filter='filter'></TodoBody>
      <TheFooter :todos='todos'
                 :filter='filter'
                 @changeFilterHandler='changeFilterHandler'
                 @cleanCompletedHandler='cleanCompletedHandler'></TheFooter>
    </div>
    <TheInfo></TheInfo>
  </div>

</template>

<script>
import '@/assets/base.css'
import '@/assets/index.css'
import TheHeader from './TheHeader.vue'
import TodoBody from './TodoBody.vue'
import TheFooter from './TheFooter.vue'
import TheInfo from './TheInfo.vue'
export default {
  name: 'Todo',
  components: {
    TheHeader,
    TodoBody,
    TheFooter,
    TheInfo
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      filter: 'all',
    }
  },
  computed: {
  },
  methods: {
    //删除已完成的
    cleanCompletedHandler () {
      console.log("删除已完成的");
      this.todos = this.todos.filter(todo => {
        return !todo.completed
      });
    },
    //修改filter
    changeFilterHandler (filter) {
      this.filter = filter;
    },
    //添加任务
    addTodo (todo) {
      console.log("from children component <TheHeader> data: " + todo);
      this.todos.push(todo);
    }

  },
}
</script>

<style>
</style>
