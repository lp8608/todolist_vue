import {
  CHANGEFILTER,
  ADDTODO,
  REMOVETODO,
  REMOVECOMPLETED,
  SETALLTODOS,
  COMPLETETODO,
} from './mutation-types'

export const changeFilter = ({
  commit
}, filter) => {
  commit(CHANGEFILTER, filter)
}

export const addTodo = ({
  commit
}, todo) => {
  commit(ADDTODO, todo);
}


export const removeTodo = ({
  commit
}, todo) => {
  commit(REMOVETODO, todo)
}
export const setAllTodos = ({
  commit
}, isSelected) => {
  commit(SETALLTODOS, isSelected)
}

export const removeCompleted = ({
  commit
}) => {
  commit(REMOVECOMPLETED)
}

export const completedTodo = ({
  commit
}, todo) => {
  commit(COMPLETETODO, todo)
}