<script setup>
defineProps({
  experiences: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="space-y-4">
    <article
      v-for="experience in experiences"
      :key="experience.id"
      class="rounded-xl border border-surface-border bg-surface-card p-5 shadow-card"
    >
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 class="text-lg font-semibold text-text-heading">{{ experience.role }}</h3>
          <p class="text-sm text-primary-700">{{ experience.company }} • {{ experience.location }}</p>
        </div>
        <p class="text-sm font-medium text-text-heading">{{ experience.period }}</p>
      </div>

      <details class="mt-4 rounded-md bg-surface-muted p-3">
        <summary class="cursor-pointer text-sm font-semibold text-text-heading">View key achievements</summary>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          <li v-for="(item, idx) in experience.bullets" :key="`${experience.id}-${idx}`">
            {{ item }}
          </li>
        </ul>
      </details>
    </article>
  </div>
</template>
