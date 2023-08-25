<script setup>
import { useTodoListStore } from '../stores/store'

const store = useTodoListStore()

defineProps(['title', 'priority', 'finished', 'id'])
</script>

<template>
  <div id="todo-overlay" :class="{ overlay: finished }">
    <div id="todo" :class="`priority-${priority}`">
      <p id="todo-name" :class="{ finished: finished }">{{ title }}</p>
      <div id="todo-btns-wrapper">
        <button id="btn-finish" @click="store.finishTodo(id)" v-if="finished == false">Dokončit</button>
        <div id="div-icon-delete" @click="store.deleteTodo(id)">
          <img src="./icons/bin.png" id="icon-delete">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#todo {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#todo-btns-wrapper {
  display: flex;
  gap: 10px;
}

#btn-finish {
  background-color: rgb(150, 194, 227);
  height: 30px;
  display: flex;
  align-items: center;
}

#btn-finish:hover {
  background-color: rgb(127, 183, 226);
}

.priority-low {
  background-color: rgb(178, 255, 182);
}

.priority-normal {
  background-color: rgb(255, 255, 178);
}

.priority-high {
  background-color: rgb(255, 191, 178);
}

.overlay {
  opacity: 50%;
}

#icon-delete {
  max-width: 20px;
  object-fit: contain;
}

#div-icon-delete {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(227, 150, 150);
}

#div-icon-delete:hover {
  background-color: rgb(227, 131, 131);
  cursor: pointer;
}

.finished {
  text-decoration: line-through;
}
</style>
