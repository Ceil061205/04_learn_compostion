<template>
  <div>
    <h2>Show Info: {{ name }} - Count: {{ count }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  // 如果是通过inject api进行获取数据，展示的时候需要解包
  setup() {
    const count = inject('count')
    const name = inject('name', '默认名字')
    return {
      count,
      name
    }
  }
}
</script>

<style>

</style>>