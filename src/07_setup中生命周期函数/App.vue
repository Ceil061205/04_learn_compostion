<template>
  
</template>

<script>
import { onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'

export default {
  // vue2 生命周期: created, mounted, updated, unmounted, beforeMount, beforeUpdate, beforeUnmount, beforeCreate, beforeDestroy, destroyed, activated, deactivated
  setup() {
    // vue3 没有 created,beforeCreate 生命周期钩子,可以在setup中直接书写created,beforeCreate中需要执行的逻辑
    // vue3 生命周期: onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onActivated, onDeactivated
    // 可以写多个相同的生命周期钩子
    onMounted(() => {
      console.log('onMounted 组件挂载完成');
    })
    onUpdated(() => {
      console.log('onUpdated 组件更新完成');
    })
    onUnmounted(() => {
      console.log('onUnmounted 组件卸载完成');
    })
    onBeforeMount(() => {
      console.log('onBeforeMount 组件即将挂载');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate 组件即将更新');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount 组件即将卸载');
    })
    return {}
  }
}
</script>

<style>

</style>