<template>
  <div class="">
    <h2>Full Name: {{ fullName }}</h2>
    <h2>Full Name2: {{ fullName2 }}</h2>
    <button @click="changeName2">修改姓名</button>
    <h2>Result: {{ result }}</h2>
  </div>
</template>

<script  setup>
  import { ref, computed } from 'vue'
  const firstName = ref('why')
  const lastName = ref('coder')
  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
  })

  const score = ref(59)
  const result = computed(() => {
    return score.value >= 60 ? '及格' : '不及格'
  })

// 完整写法
  const fullName2 = computed({
    get() {
      return firstName.value + ' ' + lastName.value
    },
    set(newValue) {
      const names = newValue.split(' ')
      if (names.length === 2) {
        firstName.value = names[0]
        lastName.value = names[1]
      }
    }
  })
// computed返回的是一个ref
  function changeName2() {
    fullName2.value = 'kobe bryant'
  }
  
</script>

<style scoped lang="scss">
</style>