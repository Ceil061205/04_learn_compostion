<template>
  <div class="">
    <h2>{{ msg }}</h2>
    <button @click="changeMsg">修改msg内容</button>
    <h1>script-setup语法</h1>
    <!-- 核心修改点1：父组件定义响应式的name，传给子组件 -->
     <!-- 1. 父传子：把name作为props传给子组件 -->
    <!-- 2. 父传子：把【修改name的方法changeName】作为自定义事件绑定，子组件调用这个方法 -->
    <showInfo :name="name" @updateName="changeName" ref="showRef"></showInfo>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import showInfo from './showInfo.vue';

const msg = ref('hello script-setup')
// ✅ 核心：父组件声明【响应式的name】，这是唯一的数据源
const name = ref('xyz')

function changeMsg() {
  msg.value = 'script-setup新内容'
}

// ✅ 核心：父组件定义【修改name的方法】
// 这个方法会被子组件调用，参数newName由子组件传递过来
function changeName(newName) {
  console.log('接收到子组件的参数，修改父组件name:', newName);
  // 父组件自己修改自己的响应式数据，页面会自动同步更新
  name.value = newName
}

const showRef = ref(null)
onMounted(() => {
  console.log('showRef:', showRef.value);
  showRef.value.sayHello()
})
</script>

<style scoped lang="scss">
</style>