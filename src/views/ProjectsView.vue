<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Portfolio Personnel',
    description: 'Site portfolio moderne développé avec Vue.js et TypeScript, avec CI/CD via GitHub Actions.',
    technologies: ['Vue.js', 'TypeScript', 'Vite', 'GitHub Actions'],
    github: 'https://github.com/username/portfolio'
  },
  {
    id: 2,
    title: 'Application E-commerce',
    description: 'Application de commerce électronique complète avec gestion de panier et paiement.',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/username/ecommerce',
    demo: 'https://demo.example.com'
  },
  {
    id: 3,
    title: 'Blog Technique',
    description: 'Blog personnel pour partager des articles techniques et des tutoriels.',
    technologies: ['Vue.js', 'Markdown', 'Tailwind CSS'],
    github: 'https://github.com/username/blog'
  }
])
</script>

<template>
  <div class="projects">
    <h1>Mes Projets</h1>
    <p class="subtitle">Découvrez mes réalisations récentes</p>

    <div class="projects-grid">
      <article v-for="project in projects" :key="project.id" class="project-card">
        <h2>{{ project.title }}</h2>
        <p class="description">{{ project.description }}</p>

        <div class="technologies">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>

        <div class="project-links">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="link-btn">
            GitHub
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="link-btn demo">
            Démo
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.projects {
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle {
  text-align: center;
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.project-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.description {
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: var(--color-background-mute);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid var(--color-border);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.link-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  background-color: #42b883;
  color: white;
  text-align: center;
}

.link-btn:hover {
  background-color: #35a372;
}

.link-btn.demo {
  background-color: transparent;
  border: 2px solid #42b883;
  color: #42b883;
}

.link-btn.demo:hover {
  background-color: #42b883;
  color: white;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
