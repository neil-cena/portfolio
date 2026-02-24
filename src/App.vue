<script setup>
import { useScrollSpy } from './composables/useScrollSpy'
import NavBar from './components/NavBar.vue'

const sections = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const { activeSection } = useScrollSpy(sections.map((item) => item.id))
</script>

<template>
  <NavBar :sections="sections" :active-section="activeSection" />
  <RouterView />
</template>
