import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  // state
  // getters
  // actions
  // ...
  state: () => ({
    todoList: [],
    id: 0,
  }),
  getters: {
    completedTodos(state) {
      return state.todoList.filter((todo) => todo.completed)
    },
    completedTodosCount(state) {
      return state.todoList.filter((todo) => todo.completed).length
    },
    remainingTodosCount(state) {
      return state.todoList.filter((todo) => !todo.completed).length
    },
    todosCount(state) {
      return state.todoList.length
    },
  },
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
      // item is shorthand for item: item
    },
    deleteTodo(itemId) {
      // remove itemId from todoList by filtering through object
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId
      })
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})
