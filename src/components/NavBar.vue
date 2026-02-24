<script setup>
import { ref } from 'vue'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
  activeSection: {
    type: String,
    default: '',
  },
})

const mobileMenuOpen = ref(false)

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-surface-border bg-surface-card/95 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
      <a href="#hero" class="text-sm font-bold text-text-heading sm:text-base">Neil Cena</a>

      <button
        class="rounded-md border border-surface-border bg-surface-card px-3 py-1.5 text-sm text-text-body md:hidden"
        type="button"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        Menu
      </button>

      <nav class="hidden gap-5 md:flex">
        <a
          v-for="item in sections"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-sm transition"
          :class="
            activeSection === item.id
              ? 'font-semibold text-primary-700'
              : 'text-text-body hover:text-primary-700'
          "
        >
          {{ item.label }}
        </a>
      </nav>
    </div>

    <nav v-if="mobileMenuOpen" class="border-t border-surface-border bg-surface-card px-4 py-3 md:hidden">
      <a
        v-for="item in sections"
        :key="item.id"
        :href="`#${item.id}`"
        class="block rounded px-2 py-2 text-sm transition"
        :class="
          activeSection === item.id
            ? 'bg-primary-100 font-semibold text-primary-700'
            : 'text-text-body hover:bg-surface-muted'
        "
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
