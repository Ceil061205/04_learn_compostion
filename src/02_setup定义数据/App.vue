<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="changeMsg">修改msg</button>

    <div>{{ account.name }}</div>
    <button @click="changeAct">修改name</button>

    <!-- 默认情况下在template中自动解包,直接取出value -->
    <div>{{ counter }}</div>
    <button @click="counter++">修改counter</button>

    <div>info:{{ info.counter }}</div>
    <!-- ref是浅层解包: 使用时不用解包,修改时需要 -->
    <button @click="info.counter.value++">++</button>
  </div>
</template> 
  
<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    // 定义响应式数据
    let msg = ref("hello");
    function changeMsg() {
      msg.value = "world";
    }

    // reactive和ref的区别：
    // ref定义的是基本数据类型，reactive定义的是对象（数组、对象,如果传入的是基本数据类型，会报错）
    let account = reactive({ name: "why", age: 18 });
    // 定义修改msg的方法
    function changeAct() {
      account.name = "kobe";
    }

    // ref函数,返回的是一个响应式数据对象，里面有一个value属性
    const counter = ref(0);

    // ref是浅层解包
    const info = {
      counter
    };

    // 返回需要在模板中使用的数据
    return {
      msg,
      changeMsg,
      account,
      changeAct,
      counter,
      info, 
    };
  },
};
</script>
  
<style scoped></style>
  