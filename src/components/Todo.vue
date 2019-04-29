<template>
  <div>
    <div class="todoapp">
      <TheHeader></TheHeader>
      <TodoBody :todos='todos'
                :filter='filter'></TodoBody>
      <TheFooter :todos='todos'
                 :filter='filter'></TheFooter>
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
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todo',
  components: {
    TheHeader,
    TodoBody,
    TheFooter,
    TheInfo
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['todos', 'filter'])
  },
  methods: {
    ...mapActions(['addTodo', 'setAllCompleted', 'changeFilter'])
  },
  // 导航守卫，更新router时调用
  // beforeRouteUpdate (to, from, next) {
  //   // this.filter = to.params.filter;
  //   console.log(to.params.filter);
  //   this.changeFilter(to.params.filter)
  //   next();
  // },
  //创建组件时调用
  created () {
    // console.log(this.$route)
    this.changeFilter(this.$route.params.filter || 'all')
  },
  //观察$route的
  watch: {
    '$route': function () {
      // console.log(this.$route);
      this.changeFilter(this.$route.params.filter || 'all')
    }
  },


}
</script>

<style>
</style>
