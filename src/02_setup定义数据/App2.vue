<template>
  <div>
    <form action="">
      账号:<input type="text"  v-model="account.name">
      密码:<input type="password" v-model="account.pwd">
    </form>
    <ShowInfo name="xyz" :age="11"/>
  </div>
</template> 
  
<script>
import ShowInfo from './ShowInfo.vue'
import { onMounted, reactive, ref } from "vue";
export default {
  components: { ShowInfo },
  setup() {
    // 定义响应式数据:reactive和ref

    // ref也可以定义复杂数据
    const info = ref({
      name: "张三",
      age: 18,
    });

    // 1.reactive的应用场景
    // 1.1 条件一:reactive应用于本地的数据
    // 1.2 条件二:多个数据之间是有联系的(聚合的数据,组织在一起会有特定的作用,收集表单数据)
    const account = reactive({
      name: "张三",
      pwd: 18,
    });

    // 2.ref的应用场景:其他场景基本上都用ref
    // 2.1定义本地的一些简单数据
    // 2.2定义从网络中获取的数据也是使用ref
    const music = ref([])
    onMounted(() => {
      const service = ["周杰伦", "11"]
      music.value = service
    })

    return {
      info,
      account,
    };

  }
};
</script>
  
<style scoped></style>
  