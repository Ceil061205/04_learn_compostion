<template>
  <div>
    <h1>{{ info.name }}</h1>
    <h2>{{ info.age }}</h2>

    <!-- toRefs的使用 -->
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
    <!-- toRef的使用 -->
    <h3>{{ height }}</h3>
    <button @click="height++">anniu</button>
  </div>
</template>

<script setup>
import { reactive, toRefs, toRef } from 'vue'

const info = reactive({
  name: 'why',
  age: 18,
  height: 1.88
});
// reactive数据被解构后,会失去响应式
// const { name, age } = (info);
// 解决方式: toRefs
const { name, age } = toRefs(info);
// 解决方式: toRef
const height = toRef(info, 'height');

</script>

<style>

</style>