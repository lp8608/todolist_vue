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
    ...mapGetters('todos', 'filter')
  },
  methods: {
    ...mapActions('addTodo', 'setAllCompleted', 'changeFilter')
  },
  beforeRouteUpdate (to, from, next) {
    // this.filter = to.params.filter;
    this.changeFilter(to.params.filter)
    next();
  },



}
</script>

<style>
</style>
