export let todos = (state) => {
  return state.todos;
}
export let filter = (state) => {
  return state.filter
}
export let todosCount = (state) => {
  return state.todos.length;
}

export let filterTodos = (state) => {
  let filtedTodos = this.todos.filter(data => {
    if (state.filter == "all") {
      return data;
    } else if (state.filter == "active") {
      return !data.completed;
    } else if (state.filter == "completed") {
      return data.completed;
    }
  });
  return filtedTodos;
}
export let allCompleted = (state) => {
  return state.todos;
}
export let hasCompleted = (state) => {
  return state.todos.filter((todo) => {
    return todo.completed;
  });
}