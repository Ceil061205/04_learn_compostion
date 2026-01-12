import { ref } from 'vue'
export default function useCounter() {
  const counter = ref(0)
  const Increment = () => {
    counter.value++;
  }
  const Decrement = () => {
    counter.value--;
  }
  return {
    counter,
    Increment,
    Decrement
  }
}