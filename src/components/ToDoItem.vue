<template>
    <div class="todo-overlay" :class="{ overlay: finished }">
        <div class="todo" :class="`priority-${priority}`">
            <div class="todo-first-row">
                <p class="todo-name" :class="{ finished: finished }">{{ title }}</p>
                <div class="alert-icons" v-if="finished == false">
                    <img src="/alert.png" class="alert-icon" v-if="priority == `high`" />
                    <img src="/alert.png" class="alert-icon" v-if="priority == `high`" />
                    <img src="/alert.png" class="alert-icon" v-if="priority != `low`" />
                </div>
            </div>
            <div class="todo-btns-wrapper">
                <button class="btn-finish" @click="finishTodo(id)" v-if="finished === false">Dokončit</button>
                <div class="div-icon-delete" @click="deleteTodo(id)">
                    <img src="/bin.png" class="icon-delete" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['finish', 'delete'])

defineProps({
    title: String,
    priority: String,
    finished: Boolean,
    id: Number
})

function finishTodo(id) {
    emit('finish', { id })
}

function deleteTodo(id) {
    emit('delete', { id })
}
</script>

<style scoped>
.overlay {
    opacity: 50%;
}

.todo {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.todo-first-row {
    display: flex;
    gap: 10px;
}

/* BUTTONS */
.todo-btns-wrapper {
    display: flex;
    gap: 10px;
}

.btn-finish {
    background-color: rgb(150, 194, 227);
    height: 30px;
    display: flex;
    align-items: center;
}

.div-icon-delete {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(227, 150, 150);
}

.icon-delete {
    max-width: 20px;
    object-fit: contain;
}

/* BUTTONS HOVER */
.btn-finish:hover {
    background-color: rgb(127, 183, 226);
}

.div-icon-delete:hover {
    background-color: rgb(227, 131, 131);
    cursor: pointer;
}

/* FORMATING TODOs */
.priority-low {
    background-color: rgb(178, 255, 182);
}

.priority-normal {
    background-color: rgb(255, 255, 178);
}

.priority-high {
    background-color: rgb(255, 191, 178);
}

.finished {
    text-decoration: line-through;
}

.alert-icon {
    max-height: 20px;
}
</style>
