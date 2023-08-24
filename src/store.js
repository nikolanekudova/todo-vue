import { reactive, readonly } from "vue"

const state = reactive([
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

export default {
    state: readonly(state)
}