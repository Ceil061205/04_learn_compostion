<template>
  <div>
      <ShowInfo :info="info" @changeName="changeName" :roInfo="roInfo" @roInfoClick="roInfoClick"/>
  </div>
</template>

<script>
import ShowInfo from './ShowInfo.vue'
import { readonly } from 'vue';
import { reactive } from 'vue';
export default {
  components: { ShowInfo },
  setup() {
    // 本地定义的多个数据都需要传递给子组件
    const info = reactive({
      name: 'why',
      age: 18
    });
    function changeName(payload) {
      info.name = payload
    }

    // 使用readOnly包裹一下info
    const roInfo = readonly(info);
    function roInfoClick(payload) {
      info.name = payload;
    }
     
    return {
      info,
      changeName,
      roInfo,
      roInfoClick
    };
  }
}
</script>

<style>

</style>