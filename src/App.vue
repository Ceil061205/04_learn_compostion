<template>
  <div>
    <!-- 对于template的数据会自动解包 -->
    <h1>{{ counter }}</h1>
    <button @click="Increment">Increment</button>
    <button @click="Decrement">Decrement</button>
  </div>
</template>

<script>
import useCounter from './hooks/useCounter'
export default {
  setup() {
    return {
      ...useCounter()
    }
  }
}
</script>

<style>

</style>
