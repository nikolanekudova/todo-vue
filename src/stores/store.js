import { defineStore } from 'pinia'

/* export const useTodoStore = defineStore('todoList', () => {
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

  return { ToDoList, displayNewTask, displayBtnNewTask, displayDivNewTask }
}) */

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    ToDoList: [
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
    ],
    id: 3,
    displayNewTask: false,
    displayBtnNewTask: true
  }),
  actions: {
    addTodo(item) {
        this.ToDoList.push({ item, id: this.id++, priority: this.priority, completed: false })
    },
    displayDivNewTask() {
        this.displayNewTask = true
        this.displayBtnNewTask = false
    },
    hideDisplayDivNewTask() {
        this.displayNewTask = false
        this.displayBtnNewTask = true
    }
  }
})
