import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../HomeView.vue'

describe('HomeView - Buttons Behavior and Styling', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: HomeView },
      { path: '/projects', component: { template: '<div>Projects</div>' } },
      { path: '/contact', component: { template: '<div>Contact</div>' } },
    ],
  })

  describe('Button Structure', () => {
    it('renders exactly 2 buttons in hero section', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const heroButtons = wrapper.find('.hero-buttons')
      expect(heroButtons.exists()).toBe(true)

      const buttons = heroButtons.findAll('.btn')
      expect(buttons.length).toBe(2)
    })

    it('buttons are rendered in correct order', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const buttons = wrapper.findAll('.btn')
      expect(buttons[0]?.text()).toBe('Voir mes projets')
      expect(buttons[1]?.text()).toBe('Me contacter')
    })
  })

  describe('Primary Button (Voir mes projets)', () => {
    it('has correct text content', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      expect(primaryButton.text()).toBe('Voir mes projets')
    })

    it('has both btn and btn-primary classes', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      expect(primaryButton.classes()).toContain('btn')
      expect(primaryButton.classes()).toContain('btn-primary')
    })

    it('navigates to /projects', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      expect(primaryButton.attributes('href')).toBe('/projects')
    })

    it('is a link element (anchor tag)', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      expect(primaryButton.element.tagName.toLowerCase()).toBe('a')
    })

    it('has inline-block display style applied via class', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      // Le bouton doit avoir la classe .btn qui applique display: inline-block
      expect(primaryButton.classes()).toContain('btn')
    })
  })

  describe('Secondary Button (Me contacter)', () => {
    it('has correct text content', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.text()).toBe('Me contacter')
    })

    it('has both btn and btn-secondary classes', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.classes()).toContain('btn')
      expect(secondaryButton.classes()).toContain('btn-secondary')
    })

    it('navigates to /contact', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.attributes('href')).toBe('/contact')
    })

    it('is a link element (anchor tag)', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.element.tagName.toLowerCase()).toBe('a')
    })

    it('does not have btn-primary class', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.classes()).not.toContain('btn-primary')
    })
  })

  describe('Button Container', () => {
    it('hero-buttons container exists', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const heroButtons = wrapper.find('.hero-buttons')
      expect(heroButtons.exists()).toBe(true)
    })

    it('hero-buttons contains both buttons', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const heroButtons = wrapper.find('.hero-buttons')
      const buttons = heroButtons.findAll('.btn')
      expect(buttons.length).toBe(2)
    })
  })

  describe('Accessibility', () => {
    it('primary button is keyboard accessible', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      // Les liens sont naturellement accessibles au clavier
      expect(primaryButton.element.tagName.toLowerCase()).toBe('a')
      expect(primaryButton.attributes('href')).toBeTruthy()
    })

    it('secondary button is keyboard accessible', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.element.tagName.toLowerCase()).toBe('a')
      expect(secondaryButton.attributes('href')).toBeTruthy()
    })

    it('buttons have meaningful text', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const buttons = wrapper.findAll('.btn')
      buttons.forEach(button => {
        expect(button.text().length).toBeGreaterThan(0)
      })
    })
  })

  describe('Router Navigation', () => {
    it('primary button should have RouterLink to attribute pointing to /projects', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButton = wrapper.find('.btn-primary')
      expect(primaryButton.attributes('href')).toBe('/projects')
    })

    it('secondary button should have RouterLink to attribute pointing to /contact', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButton = wrapper.find('.btn-secondary')
      expect(secondaryButton.attributes('href')).toBe('/contact')
    })

    it('both buttons use RouterLink for client-side navigation', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const buttons = wrapper.findAll('.btn')
      // RouterLink renders as an <a> tag
      buttons.forEach(button => {
        expect(button.element.tagName.toLowerCase()).toBe('a')
        expect(button.attributes('href')).toBeTruthy()
      })
    })
  })
})
