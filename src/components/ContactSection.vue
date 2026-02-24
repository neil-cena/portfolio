<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="rounded-xl border border-surface-border bg-primary-700 p-6 text-text-inverted shadow-card">
    <h3 class="text-xl font-semibold">Let's connect</h3>
    <p class="mt-2 text-sm text-primary-100">
      Open to senior full-stack opportunities, product engineering roles, and impactful collaborations.
    </p>

    <div class="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
      <a class="rounded-md bg-surface-card px-3 py-2 text-primary-700" :href="`mailto:${profile.email}`">
        {{ profile.email }}
      </a>
      <a class="rounded-md bg-surface-card px-3 py-2 text-primary-700" :href="profile.linkedin" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a class="rounded-md bg-surface-card px-3 py-2 text-primary-700" :href="`tel:${profile.phone}`">
        {{ profile.phone }}
      </a>
    </div>
  </div>
</template>
