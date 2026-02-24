import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useScrollSpy(sectionIds = []) {
  const activeSection = ref(sectionIds[0] ?? '')

  let observer

  onMounted(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          activeSection.value = visibleEntry.target.id
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}
