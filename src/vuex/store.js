import Vue from 'vue'
import Vuex from 'vuex'
import {
  todos,
  filter,
  todosCount,
  filterTodos,
  allCompleted,
  hasCompleted
} from './getter'
import mutations from './mutations'
import lodash from 'lodash'
import {
  changeFilter,
  addTodo,
  removeTodo,
  removeCompleted,
  setAllTodos,
  completedTodo
} from './actions'
Vue.use(Vuex)

const showLog = (store) => {
  let preState = lodash.cloneDeep(store.state);
  store.subscribe((mutations, state) => {
    console.log("pre state" + preState + "current state:" + state);
  });
}

const store = new Vuex.Store({
  state: {
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
    }],
    filter: 'all',
  },
  getters: {
    todos,
    filter,
    todosCount,
    filterTodos,
    allCompleted,
    hasCompleted
  },
  mutations,
  actions: {
    changeFilter,
    addTodo,
    removeTodo,
    removeCompleted,
    setAllTodos,
    completedTodo
  },
  strict: true,
  plugins: [showLog]
})
export default store