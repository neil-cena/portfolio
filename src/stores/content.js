import { defineStore } from 'pinia'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { fallbackContent } from '../content/fallbackContent'

function orderByField(items = []) {
  return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export const useContentStore = defineStore('content', {
  state: () => ({
    isLoading: false,
    hasLoaded: false,
    error: '',
    source: 'fallback',
    siteConfig: fallbackContent.siteConfig,
    profile: fallbackContent.profile,
    experiences: fallbackContent.experiences,
    skills: fallbackContent.skills,
    projects: fallbackContent.projects,
    education: fallbackContent.education,
  }),
  actions: {
    async fetchAll() {
      if (this.hasLoaded) return

      if (!db) {
        this.hasLoaded = true
        this.source = 'fallback'
        return
      }

      this.isLoading = true
      this.error = ''

      try {
        const [
          siteConfigDoc,
          profileDoc,
          experiencesSnap,
          skillsSnap,
          projectsSnap,
          educationSnap,
        ] = await Promise.all([
          getDoc(doc(db, 'siteConfig', 'main')),
          getDoc(doc(db, 'profile', 'main')),
          getDocs(collection(db, 'experiences')),
          getDocs(collection(db, 'skills')),
          getDocs(collection(db, 'projects')),
          getDocs(collection(db, 'education')),
        ])

        this.siteConfig = siteConfigDoc.exists() ? siteConfigDoc.data() : fallbackContent.siteConfig
        this.profile = profileDoc.exists() ? profileDoc.data() : fallbackContent.profile
        this.experiences = experiencesSnap.empty
          ? fallbackContent.experiences
          : orderByField(experiencesSnap.docs.map((item) => ({ id: item.id, ...item.data() })))
        this.skills = skillsSnap.empty
          ? fallbackContent.skills
          : orderByField(skillsSnap.docs.map((item) => ({ id: item.id, ...item.data() })))
        this.projects = projectsSnap.empty
          ? fallbackContent.projects
          : orderByField(projectsSnap.docs.map((item) => ({ id: item.id, ...item.data() })))
        this.education = educationSnap.empty
          ? fallbackContent.education
          : orderByField(educationSnap.docs.map((item) => ({ id: item.id, ...item.data() })))
        this.source = 'firebase'
      } catch (error) {
        this.error = 'Failed to fetch Firestore content. Showing local fallback data.'
        this.source = 'fallback'
      } finally {
        this.isLoading = false
        this.hasLoaded = true
      }
    },
  },
})
