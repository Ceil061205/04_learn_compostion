<template>
  <div>
    <h2>ShowInfo: {{ info.name }} - Age: {{ info.age }}</h2>
    <!-- 可以在子组件中修改父组件传过来的的props,但是不规范 -->
    <!-- 单项数据流,如果需要修改props,需要通过事件传递 -->
    <button @click="info.age++">年龄加1</button>
    <!-- 正确规范 -->
    <button @click="changeName">修改姓名</button>

    <!-- 使用readonly数据,在子组件本身无法进行修改 -->
    <div>只读信息: {{ roInfo.name }} - Age: {{ roInfo.age }}</div>
    <button @click="roInfo.name = '123'">改变</button>
    <button @click="roInfoClick">正确修改</button>

  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["changeName", "roInfoClick"],
  setup(props, context) {
    function changeName() {
      // 通过事件传递给父组件
      context.emit("changeName", 'xyz')
    }
    function roInfoClick() {
      context.emit("roInfoClick", 'xyz123')
    }
    return { changeName, roInfoClick }
  }
}
</script>

<style>

</style>