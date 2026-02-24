<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="flex h-full flex-col rounded-xl border border-surface-border bg-surface-card p-5 shadow-card">
    <div class="h-40 rounded-lg bg-surface-muted">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="h-full w-full rounded-lg object-cover"
      />
    </div>

    <h3 class="mt-4 text-lg font-semibold text-text-heading">{{ project.title }}</h3>
    <p class="mt-2 text-sm leading-relaxed">{{ project.description }}</p>

    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="tag in project.tags"
        :key="`${project.id}-${tag}`"
        class="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-primary-800"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-auto flex gap-3 pt-5 text-sm font-semibold">
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noreferrer" class="text-primary-700">
        Live
      </a>
      <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noreferrer" class="text-primary-700">
        Repo
      </a>
    </div>
  </article>
</template>
