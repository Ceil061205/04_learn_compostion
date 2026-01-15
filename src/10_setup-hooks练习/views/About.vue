<template>
  <div>
    <h1>A</h1>
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { useCounter } from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
export default {
  name: 'About',
  setup() {
    useTitle('About页面')
    return {
      ...useCounter()
    }
  }
}
</script>

<style>

</style>