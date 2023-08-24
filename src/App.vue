<script setup>
import { ref } from 'vue'
import MyHeader from './components/MyHeader.vue'
import ToDoItem from './components/ToDoItem.vue'
import NewTodo from './components/NewTodo.vue'

const ToDoList = ref([
  {
    title: 'Lorem ipsum dolor sit amet',
    id: 0,
    priority: 'normal',
    finished: true
  },
  {
    title: 'Proin at dictum augue, at ornare diam',
    id: 1,
    priority: 'low',
    finished: false
  },
  {
    title: 'Praesent quis tincidunt nulla',
    id: 2,
    priority: 'high',
    finished: false
  }
])

const displayNewTask = ref(false)
const displayBtnNewTask = ref(true)

function displayDivNewTask() {
  displayNewTask.value = true
  displayBtnNewTask.value = false
}

</script>

<template>
  <div id="page-wrapper">
    <MyHeader />

    <div v-if="displayBtnNewTask">
      <button @click="displayDivNewTask">Nový úkol</button>
    </div>

    <NewTodo v-if="displayNewTask" />

    <div id="todo-list">
      <ToDoItem 
        v-for="ToDo in ToDoList"
        :key="ToDo.id"
        :title="ToDo.title"
        :priority="ToDo.priority"
        :finished="ToDo.finished"
      />
    </div>

    <div id="unfinished-wrapper">
      <input type="checkbox" name="unfinished" />
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
