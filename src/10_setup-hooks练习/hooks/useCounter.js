import { ref, onMounted } from 'vue'

export function useCounter() {
  const counter = ref(0)
  function increment() {
    counter.value++
  }
  onMounted(() => {
    console.log('Counter mounted')
  })
  return { 
    counter,
    increment
  }
}