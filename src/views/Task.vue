<template>
  <div class="card" v-if="isLinkCorrect">
    <h2>{{ task.header }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.state" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <button class="btn" @click="onPressButton('pending')">Взять в работу</button>
      <button class="btn primary" @click="onPressButton('done')">Завершить</button>
      <button class="btn danger" @click="onPressButton('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
  components: { AppStatus },

  setup () {

    const route = useRoute()
    const store = useStore()

    const task = computed ( () => {
     return store.state.taskList.find ( el => el.id == route.params.taskId)
    })

    const isLinkCorrect = ref(true)
    if (!task.value) isLinkCorrect.value = false

    function onPressButton (state) {
      store.commit('changeTaskState', [store.state.taskList.findIndex ( el => el.id == task.value.id), state])
    }

    return {
      task, isLinkCorrect, onPressButton
    }

  }
}
</script>
