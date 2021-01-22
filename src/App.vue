<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup (){
    const store = useStore()
    onMounted ( () => store.commit('readTaskList') )
  },

  components: { TheNavbar }

}
</script>
