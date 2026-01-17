<template>
  <div>
    <h1>H</h1>
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="title1">title1</button>
    <button @click="title2">title2</button>
    <button @click="title3">title3</button>

    <h3>ScrollPosition</h3>
    <div>X: {{ScrollPosition.x}}</div>
    <div>Y: {{ScrollPosition.y}}</div>
  </div>
</template>

<script>
import { useCounter } from '../hooks/useCounter'
import { useScrollPosition } from '../hooks/useScrollPosition';
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

    // 不能对reactive对象进行解构赋值，否则会失去响应式效果
    const { ScrollPosition } = useScrollPosition()

    return {
      counter,
      increment,
      title1,
      title2,
      title3,
      ScrollPosition
    }
  }
}
</script>

<style>

</style>