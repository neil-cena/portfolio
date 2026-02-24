<script setup>
defineProps({
  skills: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <article
      v-for="group in skills"
      :key="group.id"
      class="rounded-xl border border-surface-border bg-surface-card p-5 shadow-card"
    >
      <h3 class="text-base font-semibold text-text-heading">{{ group.category }}</h3>
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="item in group.items"
          :key="`${group.id}-${item}`"
          class="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-800"
        >
          {{ item }}
        </span>
      </div>
    </article>
  </div>
</template>
