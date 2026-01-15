<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Git', level: 85 }
])
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Bonjour, je suis <span class="highlight">Développeur Web</span></h1>
        <p class="hero-subtitle">
          Passionné par la création d'applications web modernes et performantes
        </p>
        <div class="hero-buttons">
          <RouterLink to="/projects" class="btn btn-primary">Voir mes projets</RouterLink>
          <RouterLink to="/contact" class="btn btn-secondary">Me contacter</RouterLink>
        </div>
      </div>
    </section>

    <section class="skills">
      <h2>Mes compétences</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percentage">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: var(--color-heading);
  background: linear-gradient(90deg, #42b883 0%, #35495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-primary:hover {
  background-color: #35a372;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

.btn-secondary:hover {
  border-color: #42b883;
  color: #42b883;
  transform: translateY(-2px);
}

.skills {
  margin-bottom: 4rem;
}

.skills h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.skill-item {
  background-color: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: var(--color-heading);
}

.skill-percentage {
  color: var(--color-text);
  font-size: 0.9rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background-color: var(--color-background-mute);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #42b883 0%, #35495e 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
