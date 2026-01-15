<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="logo" @click="closeMobileMenu">
        <h1>Mon Portfolio</h1>
      </RouterLink>

      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ active: mobileMenuOpen }">
        <RouterLink to="/" @click="closeMobileMenu">Accueil</RouterLink>
        <RouterLink to="/about" @click="closeMobileMenu">À propos</RouterLink>
        <RouterLink to="/projects" @click="closeMobileMenu">Projets</RouterLink>
        <RouterLink to="/contact" @click="closeMobileMenu">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: var(--color-text);
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background-color: var(--color-text);
  margin: 3px 0;
  transition: 0.3s;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-links a:hover {
  color: var(--color-heading);
  background-color: var(--color-background-mute);
}

.nav-links a.router-link-active {
  color: var(--color-heading);
  background-color: var(--color-background-mute);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-background-soft);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links a {
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-radius: 0;
  }
}
</style>
