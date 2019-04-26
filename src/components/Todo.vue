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
  },
  data () {
    return {
      filter: "all",
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
  computed: {
  },
  methods: {
    //删除已完成的
    cleanCompletedHandler () {
      console.log("删除已完成的np");
      this.todos = this.todos.filter(todo => {
        return !todo.completed
      });
    },
    //修改filter
    changeFilterHandler (filter) {
      console.log("change filter:" + filter);
      this.filter = filter;
    },
    //添加任务
    addTodo (todo) {
      console.log("from children component <TheHeader> data: " + todo);
      this.todos.push(todo);
    }

  },
  
  beforeRouteUpdate(to, from, next) {
    //在当前路由改变，但是该组件被复用时调用
    //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
    // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log(this, 'beforeRouteUpdate'); //当前组件实例
    console.log(to.params.filter);
    // console.log(from, '组件独享守beforeRouteUpdate卫第二个参数');
    // console.log(next, '组件独享守beforeRouteUpdate卫第三个参数');
    this.filter = to.params.filter;
    next();
  },
 
}
</script>

<style>
</style>
