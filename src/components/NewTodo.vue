<script setup>
import { useTodoListStore } from "../stores/store"

const store = useTodoListStore()

let todoName = ""
let priority = "normal"

function addNewTodo() {
  console.log(todoName)
  console.log(priority)
}

</script>

<template>
  <div id="new-todo-wrapper">
    <div id="todo-name-wrapper">
      <p>Název</p>
      <input type="input" name="todo-name" id="input-name"  v-model="todoName"/>
    </div>
    <div id="todo-priority-wrapper">
      <p>Priorita</p>
      <div id="form">
        <div>
          <input type="radio" id="priority-1" name="priority" value="low" v-model="priority"/>
          <label for="priority-1">Nízká</label>
        </div>

        <div>
          <input type="radio" id="priority-2" name="priority" value="normal" checked v-model="priority" />
          <label for="priority-2">Normální</label>
        </div>

        <div>
          <input type="radio" id="priority-3" name="priority" value="high" v-model="priority"/>
          <label for="priority-3">Vysoká</label>
        </div>
      </div>
    </div>
    <div id="btns-wrapper">
      <button id="btn-add" @click="addNewTodo">Přidat</button>
      <button id="btn-cancel" @click="store.hideDisplayDivNewTask">Zrušit</button>
    </div>
  </div>
</template>

<style scoped>
p {
  font-weight: 600;
  padding-bottom: 5px;
}

#new-todo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#todo-name-wrapper {
  display: flex;
  flex-direction: column;
}

#form {
  display: flex;
  flex-direction: column;
}

#input-name {
  max-width: 60%;
  padding: 5px 10px;
}

#btns-wrapper {
  display: flex;
  gap: 10px;
}

#btn-add {
  background-color: rgb(150, 227, 150);
}

#btn-add:hover {
  background-color: rgb(93, 191, 93);
}

#btn-cancel {
  background-color: rgb(227, 150, 150);
}

#btn-cancel:hover {
  background-color: rgb(191, 93, 93);
}
</style>
