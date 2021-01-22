<template>
  <span :class="['badge', view]">{{ text }}</span>
</template>

<script>
import {computed} from 'vue'

export default {
  props: ['type'],
  
  setup (props) {
    const view = computed ( ()=> {
      if (props.type === 'active') return 'primary'
      if (props.type === 'done') return 'primary'
      if (props.type === 'cancelled') return 'danger'
      if (props.type === 'pending') return 'warning'
      return ''
    })

    const text = computed ( ()=> {
      if (props.type === 'active') return 'Активен'
      if (props.type === 'done') return 'Завершен'
      if (props.type === 'cancelled') return 'Отменён'
      if (props.type === 'pending') return 'Выполняется'
      return 'неизвестное состояние'
    })

    return {
      view, text
    }
  }
}
</script>
