<template>
  <div>
    <h1>H</h1>
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="title1">title1</button>
    <button @click="title2">title2</button>
    <button @click="title3">title3</button>
  </div>
</template>

<script>
import { useCounter } from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
export default {
  name: 'Home',
  setup() {
    const { counter, increment } = useCounter()

    // hooks在一个组件中最好只使用一次,这种方法才是最优的
    const title = useTitle('Home页面')
    function title1() {
      // useTitle('首页-标题1')
      title.value = '首页-标题1'
    }
    function title2() {
      // useTitle('首页-标题2')
      title.value = '首页-标题2'
    }
    function title3() {
      // useTitle('首页-标题3')
      title.value = '首页-标题3'
    }
    return {
      counter,
      increment,
      title1,
      title2,
      title3
    }
  }
}
</script>

<style>

</style>