<template>
  <div class="new-todo-wrapper">
    <div class="todo-name-wrapper">
      <p>Název</p>
      <input type="input" name="title" class="input-name" v-model="title" />
    </div>
    <div class="todo-priority-wrapper">
      <p>Priorita</p>
      <div class="form">
        <div>
          <input type="radio" id="priority-1" name="priority" value="low" v-model="priority" />
          <label for="priority-1">Nízká</label>
        </div>

        <div>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            value="normal"
            checked
            v-model="priority"
          />
          <label for="priority-2">Normální</label>
        </div>

        <div>
          <input type="radio" id="priority-3" name="priority" value="high" v-model="priority" />
          <label for="priority-3">Vysoká</label>
        </div>
      </div>
    </div>
    <div class="btns-wrapper">
      <button class="btn-add" @click="addNewTodo">Přidat</button>
      <button class="btn-cancel" @click="displayNewTask">Zrušit</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add', 'display'])

const title = ref('')
const priority = ref('normal')

function addNewTodo() {
  emit('add', { title, priority })
}

function displayNewTask() {
  emit('display')
}
</script>

<style scoped>
p {
  font-weight: 600;
  padding-bottom: 5px;
}

.new-todo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.todo-name-wrapper {
  display: flex;
  flex-direction: column;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-name {
  max-width: 60%;
  padding: 5px 10px;
}

/* BUTTONS */
.btns-wrapper {
  display: flex;
  gap: 10px;
}

.btn-add {
  background-color: rgb(150, 194, 227);
}

.btn-cancel {
  background-color: rgb(227, 150, 150);
}

/* BUTTONS HOVER */
.btn-add:hover {
  background-color: rgb(93, 150, 191);
}

.btn-cancel:hover {
  background-color: rgb(191, 93, 93);
}
</style>
