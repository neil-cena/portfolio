<script setup>
import { computed, onMounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SectionWrapper from '../components/SectionWrapper.vue'
import { useContentStore } from '../stores/content'

const contentStore = useContentStore()

const profile = computed(() => contentStore.profile)
const experiences = computed(() => contentStore.experiences)
const skills = computed(() => contentStore.skills)
const projects = computed(() => contentStore.projects)
const education = computed(() => contentStore.education)

onMounted(() => {
  contentStore.fetchAll()
})
</script>

<template>
  <main>
    <SectionWrapper id="hero" title="Profile" subtitle="Introduction">
      <HeroSection :profile="profile" />
    </SectionWrapper>

    <SectionWrapper id="experience" title="Experience" subtitle="Work History">
      <ExperienceSection :experiences="experiences" />
    </SectionWrapper>

    <SectionWrapper id="skills" title="Technical Skills" subtitle="Toolbox">
      <SkillsSection :skills="skills" />
    </SectionWrapper>

    <SectionWrapper id="projects" title="Projects" subtitle="Portfolio">
      <ProjectsSection :projects="projects" />
    </SectionWrapper>

    <SectionWrapper id="education" title="Education and Certifications" subtitle="Credentials">
      <EducationSection :education="education" />
    </SectionWrapper>

    <SectionWrapper id="contact" title="Contact" subtitle="Next Step">
      <ContactSection :profile="profile" />
    </SectionWrapper>

    <div
      v-if="contentStore.error"
      class="mx-auto mb-8 mt-4 max-w-5xl rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900"
    >
      {{ contentStore.error }}
    </div>
  </main>
</template>
