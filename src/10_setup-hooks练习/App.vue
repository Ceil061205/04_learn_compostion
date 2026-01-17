<template>
  <div>
    <button @click="changeTitle">修改title</button>
    <!-- 计数器 -->
    <!-- <home></home>
    <about></about> -->

    <!-- 2个页面切换 -->
    <button @click="currentPage = 'Home'">home</button>
    <button @click="currentPage = 'About'">about</button>

    <component :is="currentPage"></component>
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br> <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br> <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br> <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br> <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br> <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <div class="content"></div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import useTitle from './hooks/useTitle';
import { ref } from 'vue';
export default {
  components: {
    Home,
    About
  },
  setup() {
    // document.title = '自定义Hooks'
    function changeTitle() {
      useTitle('自定义Hooks')
    }
    const currentPage = ref('Home')
    return {
      changeTitle,
      currentPage
    }
  }
}
</script>

<style>
  .content {
    height: 2000px;
    width: 20000px;
  }
</style>