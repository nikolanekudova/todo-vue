import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    toDoList: [
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

      this.toDoList.push({
        title: todo.title,
        id: this.id++,
        priority: todo.priority,
        finished: false
      })
      this.hideDivNewTask()
    },
    deleteTodo(todoID) {
      this.toDoList = this.toDoList.filter((todo) => {
        return todo.id != todoID
      })
    },
    finishTodo(todoID) {
      for (let i = 0; i < this.toDoList.length; i++) {
        if (this.toDoList[i].id == todoID) {
          return { ...(this.toDoList[i].finished = true) }
        }
      }
      console.log(this.toDoList)
      return this.toDoList
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
      this.toDoList = this.toDoList.filter((todo) => {
        return todo.finished == false
      })
    }
  },
  getters: {
    getRelevantTodos() {
      const store = this

      this.sortTodos

      if (store.displayOnlyUnfinished) {
        return this.toDoList.filter((todo) => {
          return !todo.finished
        })
      } else {
        return this.toDoList
      }
    },
    sortTodos() {
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

      return (this.toDoList = this.toDoList.sort((secondElement, firstElement) => {
        firstElement.sortNumber = assignSortNumber(firstElement);
        secondElement.sortNumber = assignSortNumber(secondElement);

        return firstElement.sortNumber - secondElement.sortNumber
      }))
    }
  }
})
