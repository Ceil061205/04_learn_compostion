<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="counter++">增加</button>
    <h1>{{ counter2 }}</h1>
    <button @click="counter2++">增加</button>
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const counter2 = ref(0);
    // 1.watchEffect传入的函数默认会立即执行一次
    // 2.在执行的过程中，会自动的收集依赖(依赖哪些响应式数据),当依赖发生变化时，会再次执行该函数
    const stopWatchEffect = watchEffect(() => {
      console.log('counter changed:', counter.value, counter2.value);
      if (counter.value >= 5) {
        // 停止监听
        stopWatchEffect();
      }
    });
    return {
      counter,
      counter2
    };
  }
}
</script>

<style>

</style>