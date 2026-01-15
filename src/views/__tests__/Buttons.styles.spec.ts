import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../HomeView.vue'
import ContactView from '../ContactView.vue'

describe('Button Styles and Visual Properties', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: HomeView },
      { path: '/projects', component: { template: '<div>Projects</div>' } },
      { path: '/contact', component: { template: '<div>Contact</div>' } },
    ],
  })

  describe('HomeView Buttons - CSS Classes', () => {
    it('primary button has btn and btn-primary classes', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryBtn = wrapper.find('.btn-primary')
      const classes = primaryBtn.classes()

      expect(classes).toContain('btn')
      expect(classes).toContain('btn-primary')
    })

    it('secondary button has btn and btn-secondary classes', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryBtn = wrapper.find('.btn-secondary')
      const classes = secondaryBtn.classes()

      expect(classes).toContain('btn')
      expect(classes).toContain('btn-secondary')
    })

    it('both buttons share the common btn class for consistent styling', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const allButtons = wrapper.findAll('.btn')

      expect(allButtons.length).toBe(2)
      allButtons.forEach(button => {
        expect(button.classes()).toContain('btn')
      })
    })

    it('buttons have distinct variant classes', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryBtn = wrapper.find('.btn-primary')
      const secondaryBtn = wrapper.find('.btn-secondary')

      expect(primaryBtn.classes()).toContain('btn-primary')
      expect(primaryBtn.classes()).not.toContain('btn-secondary')

      expect(secondaryBtn.classes()).toContain('btn-secondary')
      expect(secondaryBtn.classes()).not.toContain('btn-primary')
    })
  })

  describe('ContactView Submit Button - CSS Classes', () => {
    it('submit button has submit-btn class', () => {
      const wrapper = mount(ContactView)

      const submitBtn = wrapper.find('button[type="submit"]')
      expect(submitBtn.classes()).toContain('submit-btn')
    })

    it('submit button is rendered as a button element', () => {
      const wrapper = mount(ContactView)

      const submitBtn = wrapper.find('.submit-btn')
      expect(submitBtn.element.tagName.toLowerCase()).toBe('button')
    })
  })

  describe('Button Text Content', () => {
    it('primary button displays correct text', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryBtn = wrapper.find('.btn-primary')
      expect(primaryBtn.text()).toBe('Voir mes projets')
    })

    it('secondary button displays correct text', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryBtn = wrapper.find('.btn-secondary')
      expect(secondaryBtn.text()).toBe('Me contacter')
    })

    it('submit button displays correct text', () => {
      const wrapper = mount(ContactView)

      const submitBtn = wrapper.find('.submit-btn')
      expect(submitBtn.text()).toBe('Envoyer')
    })
  })

  describe('Button Attributes and Properties', () => {
    it('primary and secondary buttons are links (RouterLink)', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryBtn = wrapper.find('.btn-primary')
      const secondaryBtn = wrapper.find('.btn-secondary')

      expect(primaryBtn.element.tagName.toLowerCase()).toBe('a')
      expect(secondaryBtn.element.tagName.toLowerCase()).toBe('a')
    })

    it('submit button has type="submit"', () => {
      const wrapper = mount(ContactView)

      const submitBtn = wrapper.find('.submit-btn')
      expect(submitBtn.attributes('type')).toBe('submit')
    })

    it('primary button has href attribute', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryBtn = wrapper.find('.btn-primary')
      expect(primaryBtn.attributes('href')).toBeDefined()
      expect(primaryBtn.attributes('href')).toBe('/projects')
    })

    it('secondary button has href attribute', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryBtn = wrapper.find('.btn-secondary')
      expect(secondaryBtn.attributes('href')).toBeDefined()
      expect(secondaryBtn.attributes('href')).toBe('/contact')
    })
  })

  describe('Button Container Structure', () => {
    it('buttons are wrapped in hero-buttons container', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const heroButtons = wrapper.find('.hero-buttons')
      expect(heroButtons.exists()).toBe(true)

      const buttonsInContainer = heroButtons.findAll('.btn')
      expect(buttonsInContainer.length).toBe(2)
    })

    it('submit button is inside a form', () => {
      const wrapper = mount(ContactView)

      const form = wrapper.find('form')
      const submitBtn = form.find('.submit-btn')

      expect(submitBtn.exists()).toBe(true)
    })
  })

  describe('Button Existence and Count', () => {
    it('HomeView has exactly 2 buttons', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const buttons = wrapper.findAll('.btn')
      expect(buttons.length).toBe(2)
    })

    it('HomeView has exactly 1 primary button', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryButtons = wrapper.findAll('.btn-primary')
      expect(primaryButtons.length).toBe(1)
    })

    it('HomeView has exactly 1 secondary button', () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryButtons = wrapper.findAll('.btn-secondary')
      expect(secondaryButtons.length).toBe(1)
    })

    it('ContactView has exactly 1 submit button', () => {
      const wrapper = mount(ContactView)

      const submitButtons = wrapper.findAll('.submit-btn')
      expect(submitButtons.length).toBe(1)
    })
  })

  describe('Button Functionality', () => {
    it('submit button can be clicked and triggers validation', async () => {
      const wrapper = mount(ContactView)

      const form = wrapper.find('form')
      await form.trigger('submit')

      // Form submission should trigger validation
      expect(wrapper.text()).toContain('Le nom est requis')
    })

    it('primary button is clickable', async () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const primaryBtn = wrapper.find('.btn-primary')

      // Should be able to trigger click event
      await primaryBtn.trigger('click')
      // RouterLink should handle navigation
      expect(primaryBtn.exists()).toBe(true)
    })

    it('secondary button is clickable', async () => {
      const wrapper = mount(HomeView, {
        global: {
          plugins: [router],
        },
      })

      const secondaryBtn = wrapper.find('.btn-secondary')

      // Should be able to trigger click event
      await secondaryBtn.trigger('click')
      // RouterLink should handle navigation
      expect(secondaryBtn.exists()).toBe(true)
    })
  })
})
