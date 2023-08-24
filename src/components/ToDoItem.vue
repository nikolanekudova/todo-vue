<script setup>
defineProps(['title', 'priority', 'finished'])
</script>

<template>
  <div id="todo-overlay" :class="{ overlay: finished }">
    <div id="todo" :class="`priority-${priority}`">
      <p id="todo-name">{{ title }}</p>
      <div id="todo-btns-wrapper">
        <button id="btn-finish" v-if="finished == false">Dokončit</button>
        <button id="btn-delete">Odstranit</button>
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
}

#btn-finish:hover {
  background-color: rgb(93, 150, 191);
}

#btn-delete {
  background-color: rgb(227, 150, 150);
}

#btn-delete:hover {
  background-color: rgb(191, 93, 93);
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
</style>
