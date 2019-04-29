<!-- todo footer -->
<template>
  <section class="main">
    <footer class="footer">
      <span class="todo-count">
        <strong>{{todosCount}}</strong> todo
      </span>
      <ul class="filters">
        <!-- <li><a href="#/all"
             :class="{selected: filter === 'all'}"
             @click="changeFilterHandler('all')">All</a></li>
        <li><a href="#/active"
             :class="{selected: filter === 'active'}"
             @click="changeFilterHandler('active')">Active</a></li>
        <li><a href="#/completed"
             :class="{selected: filter === 'completed'}"
             @click="changeFilterHandler('completed')">Completed</a></li> -->
        <li>
          <router-link to="/all">All</router-link>
        </li>
        <li>
          <router-link to="/active">Active</router-link>
        </li>
        <li>
          <router-link to="/completed">Completed</router-link>
        </li>

      </ul>
      <button class="clear-completed"
              @click="removeCompleted">Clear completed</button>
    </footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data () {
    return {};
  },

  // props: {
  //   filter: String,
  //   todos: {
  //     type: Array,
  //     default: function () {
  //       return [];
  //     }
  //   }
  // },
  components: {},

  computed: {
    ...mapGetters(['todosCount'])
  },

  methods: {
    // changeFilterHandler: function (filter) {
    //   this.$emit('changeFilterHandler', filter)
    // },
    // cleanCompletedHandler: function () {
    //   this.$emit('cleanCompletedHandler')
    // }
    ...mapActions(['removeCompleted'])
  }
}

</script>
<style scoped>
</style>