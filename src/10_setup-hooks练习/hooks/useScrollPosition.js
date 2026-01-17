import { reactive } from 'vue'
export function useScrollPosition() {
  const ScrollPosition = reactive({
    x: 0,
    y: 0
  })
  document.addEventListener('scroll', () => {
    ScrollPosition.x = window.scrollX
    ScrollPosition.y = window.scrollY
  })
  return { ScrollPosition }
}