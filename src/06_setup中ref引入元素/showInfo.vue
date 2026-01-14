<template>
  <div class="">
    <h1>Hello Vue 3</h1>
  </div>
</template>

<script>
export default {
  setup() {
    function ShowInfo() {
      console.log('show info invoked');
    }
    return {
      ShowInfo
    }
  }
}
</script>

<style scoped lang="scss">
</style>