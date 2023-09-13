<template>
    <div class="page-wrapper">
        <MyHeader />

        <div v-if="store.displayNewTask == false">
            <button @click="displayDivNewTask">Nový úkol</button>
        </div>

        <NewTodo v-if="store.displayNewTask" @add="addNew" @display="displayNewTask" />

        <div class="todo-list">
            <ToDoItem
                v-for="ToDo in getRelevantTodos"
                :key="ToDo.id"
                :id="ToDo.id"
                :title="ToDo.title"
                :priority="ToDo.priority"
                :finished="ToDo.finished"
                @finish="finish"
                @delete="deleted"
            />
        </div>

        <div class="unfinished-wrapper">
            <input type="checkbox" name="unfinished" v-model="displayOnlyUnfinished" />
            <label for="unfinished">Pouze nedokončené</label>
        </div>
    </div>
</template>

<script setup>
import MyHeader from './components/MyHeader.vue'
import ToDoItem from './components/ToDoItem.vue'
import NewTodo from './components/NewTodo.vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from './stores/store'

const store = useTodoListStore()
const { getRelevantTodos, displayOnlyUnfinished } = storeToRefs(store)
const { displayDivNewTask, addTodo, finishTodo, deleteTodo } = store

function addNew(todo) {
    addTodo(todo)
}

function displayNewTask() {
    displayDivNewTask()
}

function finish(todo) {
    finishTodo(todo)
}

function deleted(todo) {
    deleteTodo(todo)
}
</script>

<style scoped>
.page-wrapper {
    min-width: 500px;
    background-color: white;
    padding: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
