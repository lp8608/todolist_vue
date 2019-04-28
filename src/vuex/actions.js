import {
  CHANGEFILTER,
  ADDTODO,
  REMOVETODO,
  REMOVECOMPLETED,
  SETALLTODOS,
  COMPLETETODO,
} from './mutation-types'

export const changeFilter = ({
  dispatch
}, filter) => {
  dispatch(CHANGEFILTER, filter)
}

export const addTodo = ({
  dispatch
}, todo) => {
  dispatch(ADDTODO, todo);
}


export const removeTodo = ({
  dispatch
}, todo) => {
  dispatch(REMOVETODO, todo)
}
export const setAllTodos = ({
  dispatch
}, isSelected) => {
  dispatch(SETALLTODOS, isSelected)
}

export const removeCompleted = ({
  dispatch
}) => {
  dispatch(REMOVECOMPLETED)
}

export const completedTodo = ({
  dispatch
}, todo) => {
  dispatch(COMPLETETODO, todo)
}