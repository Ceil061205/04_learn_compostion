<template>
  <div class="">
    <h1>showInfo组件</h1>
    <h2>接收到的name属性是: {{ name }}</h2>
    <button @click="changeName">修改name</button>
  </div>
</template>

<script setup>
// 定义组件接收的属性,默认是不能修改的
defineProps({
  name: String
})
defineExpose({
  sayHello
})

const emit = defineEmits(['updateName'])
function changeName() {
  // 通过自定义事件的方式,通知父组件修改name属性
  emit('updateName', 'new-xyz')
}
function sayHello() {
  console.log('Hello from showInfo component!');
}
</script>

<style scoped lang="scss">
</style>