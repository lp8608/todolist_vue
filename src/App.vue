<template>

  <div>
    <div>
      <router-link to="/">首页 \</router-link>
      <router-link to="/all">新闻 \</router-link>
    </div>
    <!-- <Todo ></Todo> -->
    <router-view ></router-view>
  </div>

</template>

<script>
// import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    // Todo
  },
  data () {
    return { }
  },
  computed: {},
  methods: {}
}
</script>

<style>
</style>
