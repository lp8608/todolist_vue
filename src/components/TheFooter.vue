<!-- todo footer -->
<template>
  <section class="main">
    <footer class="footer">
      <span class="todo-count">
        <strong>{{todos.length}}</strong> todo
      </span>
      <ul class="filters">
        <li><a href="#/all"
             :class="{selected: filter === 'all'}"
             @click="changeFilterHandler('all')">All</a></li>
        <li><a href="#/active"
             :class="{selected: filter === 'active'}"
             @click="changeFilterHandler('active')">Active</a></li>
        <li><a href="#/completed"
             :class="{selected: filter === 'completed'}"
             @click="changeFilterHandler('completed')">Completed</a></li>
      </ul>
      <button class="clear-completed"
              @click="cleanCompletedHandler">Clear completed</button>
    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: {
    filter: String,
    todos: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  components: {},

  computed: {},

  methods: {
    changeFilterHandler: function (filter) {
      this.$emit('changeFilterHandler', filter)
    },
    cleanCompletedHandler: function () {
      this.$emit('cleanCompletedHandler')
    }
  }
}

</script>
<style scoped>
</style>