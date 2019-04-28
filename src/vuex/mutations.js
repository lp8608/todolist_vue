import {
  CHANGEFILTER,
  ADDTODO,
  REMOVETODO,
  REMOVECOMPLETED,
  SETALLTODOS,
  COMPLETETODO,
} from './mutation-types'

export default {
  [CHANGEFILTER](state, filter) {
    state.filter = filter
  },
  [ADDTODO](state, todo) {
    state.todos.push(todo)
  },
  [REMOVETODO](state, todo) {
    var index = state.todos.indexOf(todo);
    if (index > -1) {
      state.todos.splice(index, 1);
    }
  },
  [REMOVECOMPLETED](state) {
    state.todos = state.todos.filter(data => !data.completed)
  },

  [SETALLTODOS](state, isSelected) {
    state.todos.forEach((todo) => {
      todo.completed = isSelected;
    });
  },

  [COMPLETETODO](state, todo) {
    todo.completed = true;
  }
}