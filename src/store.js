import {createStore} from 'vuex'

export default createStore ({
  state() {
    return {
      taskList: []
    }
  },

  mutations: {
    readTaskList (state) {
      if (localStorage.getItem('tasks')) JSON.parse(localStorage.getItem('tasks')).forEach (el => state.taskList.push(el))
    },

    addNewTask(state, task) {
      state.taskList.push(task)
      localStorage.setItem('tasks', JSON.stringify( state.taskList ))
    },

    changeTaskState(state, newInfo) {
      state.taskList[newInfo[0]].state = newInfo[1]
      localStorage.setItem('tasks', JSON.stringify( state.taskList ))
    },

  },

  getters: {
    activeTaskCounter (state){
      return state.taskList.filter( (el) => el.state === 'active' ).length
    }
  }
})