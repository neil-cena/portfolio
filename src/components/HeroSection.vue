<script setup>
const resumeUrl = new URL('../../Neil Allen T. Cena Resume.pdf', import.meta.url).href

defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
    <div>
      <h1 class="mt-3 text-3xl font-bold leading-tight text-text-heading sm:text-4xl">
        {{ profile.name }}
      </h1>
      <p class="mt-3 text-lg font-medium text-primary-700">{{ profile.title }}</p>
      <p class="mt-4 max-w-2xl text-base leading-relaxed">{{ profile.summary }}</p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          :href="`mailto:${profile.email}`"
          class="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-text-inverted transition hover:bg-primary-700"
        >
          Email Me
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noreferrer"
          class="rounded-md border border-surface-border bg-surface-card px-4 py-2 text-sm font-semibold text-text-heading transition hover:border-primary-300 hover:text-primary-700"
        >
          LinkedIn
        </a>
        <a
          :href="resumeUrl"
          download="Neil_Allen_T_Cena_Resume.pdf"
          class="rounded-md border border-primary-300 bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-800 transition hover:bg-primary-200"
        >
          Download Resume
        </a>
      </div>
    </div>

    <div class="rounded-xl border border-surface-border bg-surface-card p-6 shadow-card">
      <div class="mb-4 h-24 w-24 rounded-full bg-primary-100" />
      <dl class="space-y-3 text-sm">
        <div>
          <dt class="font-semibold text-text-heading">Location</dt>
          <dd>{{ profile.location }}</dd>
        </div>
        <div>
          <dt class="font-semibold text-text-heading">Email</dt>
          <dd>{{ profile.email }}</dd>
        </div>
        <div>
          <dt class="font-semibold text-text-heading">Phone</dt>
          <dd>{{ profile.phone }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
