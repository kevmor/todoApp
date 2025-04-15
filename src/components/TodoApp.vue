<script setup lang="ts">
import { computed } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import { useTodoListStore } from '../stores/todoList.js'

// Use Pinia Store for state management
const todoStore = useTodoListStore()

// computed
const completedTodosCount = computed(() => todoStore.completedTodosCount)
const todosCount = computed(() => todoStore.todosCount)

// some random crap
function bleh(fn: () => number): number {
  // fn is a parameter but expected to be a function
  //console.log(fn()) // log the result of the function
  return fn() + 1
}
const blah = bleh(() => 10)
console.log(`blah is set to: ${blah}`)
</script>

<template>
  <div class="todo-app">
    <h4>Let's do Pinia state management!</h4>
    <h1>Kevin's To Do List</h1>

    <p>How many completed: {{ completedTodosCount }}/{{ todosCount }}</p>
    <todo-form />
    <todo-list />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>
