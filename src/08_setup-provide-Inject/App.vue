<template>
  <div>
    <h1>{{ name }}</h1>
    <showInfo></showInfo>
    <button @click="name = 'xuz'">修改姓名</button>
  </div>
</template>

<script>
import showInfo from './showInfo.vue';
import { provide, ref } from 'vue'
export default {
  components: { showInfo },
  setup() {
    const count = ref(100)
    const name = ref('张三')
    provide('count', count)
    provide('name', name)
    return {
      name
    }
  }
}
</script>

<style>

</style>