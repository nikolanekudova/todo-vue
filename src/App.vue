<script setup>
import MyHeader from './components/MyHeader.vue'
import ToDoItem from './components/ToDoItem.vue'
import NewTodo from './components/NewTodo.vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from "./stores/store"

const store = useTodoListStore()
const { getRelevantTodos, displayOnlyUnfinished } = storeToRefs(store)

</script>

<template>
  <div id="page-wrapper">
    <MyHeader />

    <div v-if="store.displayBtnNewTask">
      <button @click="store.displayDivNewTask">Nový úkol</button>
    </div>

    <NewTodo v-if="store.displayNewTask" />

    <div id="todo-list">
      <ToDoItem 
        v-for="ToDo in getRelevantTodos"
        :key="ToDo.id"
        :id="ToDo.id"
        :title="ToDo.title"
        :priority="ToDo.priority"
        :finished="ToDo.finished"
      />
    </div>

    <div id="unfinished-wrapper">
      <input type="checkbox" name="unfinished" v-model="displayOnlyUnfinished"/>
      <label for="unfinished">Pouze nedokončené</label>
    </div>
  </div>
</template>

<style>
#page-wrapper {
  min-width: 500px;
  background-color: white;
  padding: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
