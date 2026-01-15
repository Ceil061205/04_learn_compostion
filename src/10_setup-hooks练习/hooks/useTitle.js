import { ref, watch } from 'vue'
export default function useTitle(title) {
  // document.title = title

  const titleRef = ref(title)
  watch(titleRef, (newTitle) => {
    document.title = newTitle
  }, { immediate: true })
  return titleRef
}