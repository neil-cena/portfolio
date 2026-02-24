<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div v-if="projects.length" class="grid gap-4 md:grid-cols-2">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>

  <div v-else class="rounded-xl border border-dashed border-surface-border bg-surface-card p-8 text-center shadow-card">
    <h3 class="text-lg font-semibold text-text-heading">Projects Coming Soon</h3>
    <p class="mt-2 text-sm">
      Exciting case studies and engineering projects will be added here soon.
    </p>
  </div>
</template>
