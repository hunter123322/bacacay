import { ref, computed } from 'vue'

export function useShowMoreCards<T>(cards: Array<T>) {
  const visibleCount = ref(3)

  const visibleUpdates = computed(() => cards.slice(0, visibleCount.value))

  const hasMore = computed(() => visibleCount.value < cards.length)

  const showMore = () => {
    visibleCount.value += 3
  }

  const showLess = () => {
    visibleCount.value = 3
  }

  return {
    visibleUpdates,
    hasMore,
    showMore,
    showLess,
  }
}
