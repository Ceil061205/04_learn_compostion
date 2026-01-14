<template>
  <div class="">
    <h2 ref="titleRef">title</h2>
    <button @click="getElements">获取元素</button>
    <showInfo ref="showRef"></showInfo>
  </div>
</template>

<script  setup>
import { ref, onMounted } from 'vue'
import showInfo from './showInfo.vue';

  const titleRef = ref('')
  function getElements() {
    console.log(titleRef.value);
}

const showRef = ref(null)
  onMounted(() => {
    console.log(titleRef.value);
    console.log(showRef.value);
    showRef.value.ShowInfo()
  })
</script>

<style scoped lang="scss">
</style>