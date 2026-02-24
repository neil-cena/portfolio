<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section :id="id" class="scroll-mt-24 border-b border-surface-border py-14">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <p v-if="subtitle" class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
        {{ subtitle }}
      </p>
      <h2 class="text-2xl font-bold text-text-heading sm:text-3xl">
        {{ title }}
      </h2>
      <div class="mt-6">
        <slot />
      </div>
    </div>
  </section>
</template>
