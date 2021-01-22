<template>
  <h1 class="text-white center" v-if="$store.state.taskList.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ $store.getters.activeTaskCounter }}</h3>
    <div class="card" v-for="(task) in $store.state.taskList" :key="task.id">
      <h2 class="card-title">
        {{ task.header}}
        <AppStatus :type="task.state" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date(task.date).toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <router-link :to="'/week3/task/' + task.id"><button class="btn primary">Посмотреть</button></router-link>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus}
}
</script>
