import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {
    const toDoList = ref([
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
    const id = ref(3)
    const displayNewTask = ref(false)
    const displayOnlyUnfinished = ref(false)

    function addTodo(todo) {
        if (todo.title.value == '') {
            alert('Doplň prosím název úkolu. 🥲')
            return
        }

        const newTodo = {
            title: todo.title.value,
            id: id.value++,
            priority: todo.priority.value,
            finished: false
        }

        toDoList.value = [...toDoList.value, newTodo]

        displayDivNewTask()
    }

    function deleteTodo(todo) {
        toDoList.value = toDoList.value.filter((toDo) => {
            return toDo.id != todo.id
        })
    }

    function finishTodo(todo) {
        const todoListToMutate = toDoList.value

        for (let i = 0; i < todoListToMutate.length; i++) {
            if (todoListToMutate[i].id == todo.id) {
                return { ...(todoListToMutate[i].finished = true) }
            }
        }
        toDoList.value = todoListToMutate
    }

    function displayDivNewTask() {
        if (displayNewTask.value == false) {
            displayNewTask.value = true
        } else {
            displayNewTask.value = false
        }
    }

    const getRelevantTodos = computed(() => {
        let toDoListToDisplay = toDoList.value

        if (displayOnlyUnfinished.value) {
            return sortTodos(toDoListToDisplay.filter((todo) => {
                return !todo.finished
            }))
        } 

        return sortTodos(toDoListToDisplay)
    }) 

    function sortTodos(todolist) {
        function assignSortNumber(todo) {
            if (todo.finished) {
                switch (todo.priority) {
                    case 'low':
                        return 1
                    case 'normal':
                        return 2
                    case 'high':
                        return 3
                }
            }

            //unfinished
            switch (todo.priority) {
                case 'low':
                    return 4
                case 'normal':
                    return 5
                case 'high':
                    return 6
            }
        }

        let toDoListToMutate = todolist

        toDoListToMutate.sort((secondElement, firstElement) => {
            firstElement.sortNumber = assignSortNumber(firstElement)
            secondElement.sortNumber = assignSortNumber(secondElement)

            return firstElement.sortNumber - secondElement.sortNumber
        })

        return toDoListToMutate
    }

    return {
        toDoList,
        id,
        displayNewTask,
        displayOnlyUnfinished,
        addTodo,
        deleteTodo,
        finishTodo,
        displayDivNewTask,
        getRelevantTodos
    }
})