<template>
  <form class="card" @submit.prevent="addTaskToList">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.header">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.text"></textarea>
    </div>

    <button class="btn primary" :disabled=!isAddButtonActive type="submit">Создать</button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {

    const store = useStore()
    const router = useRouter()

    const task = reactive( {
      header: '',
      date: '',
      text: '',
      id: '',
      state: ''
    })

    const isAddButtonActive = computed( () => task.header.length && task.date.length && task.text.length )

    function addTaskToList() {
      task.id = new Date().getTime()
      new Date(task.date).getTime() < new Date().setUTCHours(0,0,0,0) ? task.state = 'cancelled' : task.state = 'active'
      store.commit('addNewTask', Object.assign({}, task))
      router.push('/week3/')
    }

    return {
      task,
      addTaskToList, isAddButtonActive
    }
  }
}
</script>
