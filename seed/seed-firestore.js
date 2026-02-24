import 'dotenv/config'
import admin from 'firebase-admin'

const required = ['FIREBASE_PROJECT_ID', 'FIREBASE_CLIENT_EMAIL', 'FIREBASE_PRIVATE_KEY']
const missing = required.filter((key) => !process.env[key])

if (missing.length) {
  console.error(`Missing environment variables: ${missing.join(', ')}`)
  process.exit(1)
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
})

const db = admin.firestore()

const seedData = {
  siteConfig: {
    main: {
      title: 'Neil Allen T. Cena | Senior Full-Stack Developer',
      tagline: 'Clean, scalable, and recruiter-friendly web experiences',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/neilallencena',
        email: 'mailto:neilallencena@gmail.com',
        phone: 'tel:+639499565745',
      },
    },
  },
  profile: {
    main: {
      name: 'Neil Allen T. Cena',
      title: 'Senior Full-Stack Developer',
      summary:
        'Senior Full-Stack Developer and Licensed ECE with 5+ years modernizing legacy PHP systems with Vue.js interfaces. Strong in backend automation, scalable architecture, and practical product delivery.',
      location: 'Tayabas City, Quezon',
      email: 'neilallencena@gmail.com',
      phone: '09499565745',
      linkedin: 'https://linkedin.com/in/neilallencena',
      photoURL: '',
    },
  },
  experiences: {
    rarejobSenior: {
      company: 'RareJob Philippines, Inc.',
      location: 'Quezon City',
      role: 'Senior Full-Stack Web Developer',
      period: '2024 - Present',
      order: 1,
      bullets: [
        'Engineered a recommendation system for tutor-student pairings and schedule windows.',
        'Led AI-driven evaluation architecture using Gemini API across Flask, Yii, and Laravel codebases.',
        'Built performance metrics engine for tutor scoring and quality assurance automation.',
        'Implemented real-time lesson lifecycle notifications for tutors and students.',
      ],
    },
    rarejobFullstack: {
      company: 'RareJob Philippines, Inc.',
      location: 'Quezon City',
      role: 'Full-Stack Web Developer',
      period: '2021 - 2024',
      order: 2,
      bullets: [
        'Contributed to monolith-to-services migration with SSO integration.',
        'Refactored and stabilized legacy systems while integrating new features.',
        'Led department-wide modernization initiatives for older PHP applications.',
        'Standardized developer workflows, coding standards, and onboarding documentation.',
      ],
    },
    cafe24: {
      company: 'Cafe24 Philippines, Inc.',
      location: 'Pasig City',
      role: 'L1 Web Developer',
      period: '2020 - 2021',
      order: 3,
      bullets: [
        'Developed web applications focused on customer engagement and operations.',
        'Integrated i18next localization into existing products for global readiness.',
      ],
    },
  },
  skills: {
    languages: {
      category: 'Programming Languages',
      order: 1,
      items: ['JavaScript', 'PHP', 'Python', 'SQL', 'Java'],
    },
    frameworks: {
      category: 'Frameworks and Libraries',
      order: 2,
      items: ['Vue.js', 'React.js', 'Laravel', 'Yii', 'Flask', 'Nest.js', 'Express.js'],
    },
    tools: {
      category: 'Tools and Platforms',
      order: 3,
      items: ['Git', 'Docker', 'AWS Services', 'Firebase'],
    },
  },
  projects: {},
  education: {
    slsu: {
      institution: 'Southern Luzon State University',
      degree: 'BS in Electronics Engineering',
      location: 'Lucban, Quezon',
      date: 'May 2019',
      order: 1,
      highlights: ['Registered Electronics Engineer (October 2019)'],
    },
    googleCyber: {
      institution: 'Google',
      degree: 'Cybersecurity Certificate',
      location: 'Online',
      date: 'February 2024',
      order: 2,
      highlights: [],
    },
  },
}

async function seedCollection(collectionName, docsById) {
  const batch = db.batch()

  Object.entries(docsById).forEach(([id, payload]) => {
    batch.set(db.collection(collectionName).doc(id), payload)
  })

  await batch.commit()
}

async function main() {
  await Promise.all([
    seedCollection('siteConfig', seedData.siteConfig),
    seedCollection('profile', seedData.profile),
    seedCollection('experiences', seedData.experiences),
    seedCollection('skills', seedData.skills),
    seedCollection('projects', seedData.projects),
    seedCollection('education', seedData.education),
  ])

  console.log('Firestore seed completed.')
  process.exit(0)
}

main().catch((error) => {
  console.error('Firestore seed failed:', error)
  process.exit(1)
})
