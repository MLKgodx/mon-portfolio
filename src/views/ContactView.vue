<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const errors = ref<{ [key: string]: string }>({})

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = () => {
  errors.value = {}

  if (!form.value.name) {
    errors.value.name = 'Le nom est requis'
  }

  if (!form.value.email) {
    errors.value.email = "L'email est requis"
  } else if (!validateEmail(form.value.email)) {
    errors.value.email = "L'email n'est pas valide"
  }

  if (!form.value.message) {
    errors.value.message = 'Le message est requis'
  }

  if (Object.keys(errors.value).length === 0) {
    submitted.value = true
    console.log('Formulaire soumis:', form.value)

    setTimeout(() => {
      form.value = { name: '', email: '', message: '' }
      submitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="contact">
    <h1>Contactez-moi</h1>
    <p class="subtitle">N'hésitez pas à me contacter pour toute question ou collaboration</p>

    <div class="contact-container">
      <div class="contact-info">
        <h2>Informations</h2>
        <div class="info-item">
          <strong>Email:</strong>
          <a href="mailto:contact@example.com">lucas.helloco@gmail.com</a>
        </div>
        <div class="info-item">
          <strong>LinkedIn:</strong>
          <a href="https://linkedin.com" target="_blank" rel="noopener">Mon profil</a>
        </div>
        <div class="info-item">
          <strong>GitHub:</strong>
          <a href="https://github.com" target="_blank" rel="noopener">Mon profil</a>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div v-if="submitted" class="success-message">
          Message envoyé avec succès ! Je vous répondrai bientôt.
        </div>

        <div class="form-group">
          <label for="name">Nom</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            :class="{ error: errors.name }"
            placeholder="Votre nom"
          />
          <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :class="{ error: errors.email }"
            placeholder="votre.email@example.com"
          />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            :class="{ error: errors.message }"
            rows="5"
            placeholder="Votre message..."
          ></textarea>
          <span v-if="errors.message" class="error-text">{{ errors.message }}</span>
        </div>

        <button type="submit" class="submit-btn">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

.contact-info {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  height: fit-content;
}

.contact-info h2 {
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.info-item {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item strong {
  color: var(--color-heading);
}

.info-item a {
  color: #42b883;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.contact-form {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.success-message {
  background-color: #42b883;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-heading);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b883;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ff4444;
}

.error-text {
  display: block;
  color: #ff4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem 2rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-btn:hover {
  background-color: #35a372;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
