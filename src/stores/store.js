import { defineStore } from 'pinia'

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
    displayBtnNewTask: true,
    displayOnlyUnfinished: false
  }),
  actions: {
    addTodo(todo) {
      if (todo.title == undefined || todo.title == '') {
        alert('Doplň prosím název úkolu. 🥲')
        return
      }

      this.ToDoList.push({
        title: todo.title,
        id: this.id++,
        priority: todo.priority,
        finished: false
      })
      this.hideDivNewTask()
    },
    deleteTodo(todoID) {
      this.ToDoList = this.ToDoList.filter((todo) => {
        return todo.id != todoID
      })
    },
    finishTodo(todoID) {
      for (let i = 0; i < this.ToDoList.length; i++) {
        if (this.ToDoList[i].id == todoID) {
          return { ...(this.ToDoList[i].finished = true) }
        }
      }
      console.log(this.ToDoList)
      return this.ToDoList
    },
    displayDivNewTask() {
      this.displayNewTask = true
      this.displayBtnNewTask = false
    },
    hideDivNewTask() {
      this.displayNewTask = false
      this.displayBtnNewTask = true
    },
    showFinishedTodos() {
      this.ToDoList = this.ToDoList.filter((todo) => {
        return todo.finished == false
      })
    }
  },
  getters: {
    getRelevantTodos() {
      const store = this
      console.log(this.ToDoList)
      this.sortTodos
      console.log(this.ToDoList)

      if (store.displayOnlyUnfinished) {
        return this.ToDoList.filter((todo) => {
          return !todo.finished
        })
      } else {
        return this.ToDoList
      }
    },
    sortTodos() {
      // adding numbers for sorting
      for (let i = 0; i < this.ToDoList.length; i++) {
        if (this.ToDoList[i].finished) {
          switch (this.ToDoList[i].priority) {
            case 'low':
              this.ToDoList[i].sortNumber = 1
              break
            case 'normal':
              this.ToDoList[i].sortNumber = 2
              break
            case 'high':
              this.ToDoList[i].sortNumber = 3
              break
          }
        } else {
          switch (this.ToDoList[i].priority) {
            case 'low':
              this.ToDoList[i].sortNumber = 4
              break
            case 'normal':
              this.ToDoList[i].sortNumber = 5
              break
            case 'high':
              this.ToDoList[i].sortNumber = 6
              break
          }
        }
      }
      return (this.ToDoList = this.ToDoList.sort((b, a) => a.sortNumber - b.sortNumber))
    }
  }
})
