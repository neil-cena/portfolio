<script setup>
defineProps({
  education: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <article
      v-for="item in education"
      :key="item.id"
      class="rounded-xl border border-surface-border bg-surface-card p-5 shadow-card"
    >
      <p class="text-sm font-semibold text-primary-700">{{ item.date }}</p>
      <h3 class="mt-1 text-lg font-semibold text-text-heading">{{ item.degree }}</h3>
      <p class="mt-1 text-sm">{{ item.institution }} • {{ item.location }}</p>

      <ul v-if="item.highlights?.length" class="mt-3 list-disc space-y-1 pl-5 text-sm">
        <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </article>
  </div>
</template>
