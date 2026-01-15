<template>
  <div>
    监听数据变化
    <h2>{{ msg }}</h2>
    <button @click="msg = 'hello vue3'">修改msg</button>
    <h2>{{ info.name }}</h2>
    <button @click="info.name = 'xyz'">修改name</button>
    <h2>{{ info.friend.name }}</h2>
    <button @click="info.friend.name = 'wangwu'">修改friend.name</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup() {
    const msg = ref('hello world')
    const info = reactive({
      name: '张三',
      age: 18,
      friend: {
        name: '李四'
      }
    })

    watch(msg, (newVal, oldVal) => {
      console.log('msg changed:', newVal, oldVal)
    })
    // 这种默认深度监听,拿到的是一个proxxy对象
    // watch(info, (newVal, oldVal) => {
    //   console.log('info changed:', newVal, oldVal)
    // }, { immediate: true })// 立即执行一次

    // 监听reactive数据变化后,获取普通对象
    // 告诉返回的是一个对象所以,{...info}外层加括号
    // 这里不会默认深度监听,需要手动深度监听
      watch(() => ({...info}), (newVal, oldVal) => {
        console.log('info2 changed:', newVal, oldVal)
      }, { immediate: true, deep: true })

    return {
      msg,
      info
    }

  }

}
</script>

<style>

</style>