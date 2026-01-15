<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div id="app">
    <Navigation />
    <main>
      <RouterView />
    </main>
    <footer class="footer">
      <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 2rem 4rem;
  width: 100%;
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}

.footer {
  background-color: var(--color-background-soft);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--color-border);
}

.footer p {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
