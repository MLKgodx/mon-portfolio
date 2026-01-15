import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Navigation from '../Navigation.vue'

describe('Navigation', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div>Home</div>' } },
      { path: '/about', component: { template: '<div>About</div>' } },
      { path: '/projects', component: { template: '<div>Projects</div>' } },
      { path: '/contact', component: { template: '<div>Contact</div>' } },
    ],
  })

  it('renders navigation links', () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Mon Portfolio')
    expect(wrapper.text()).toContain('Accueil')
    expect(wrapper.text()).toContain('À propos')
    expect(wrapper.text()).toContain('Projets')
    expect(wrapper.text()).toContain('Contact')
  })

  it('has correct number of navigation links', () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    })

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(5) // Logo + 4 nav links
  })

  it('toggles mobile menu when button is clicked', async () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    })

    const mobileToggle = wrapper.find('.mobile-toggle')
    const navLinks = wrapper.find('.nav-links')

    expect(navLinks.classes()).not.toContain('active')

    await mobileToggle.trigger('click')
    expect(navLinks.classes()).toContain('active')

    await mobileToggle.trigger('click')
    expect(navLinks.classes()).not.toContain('active')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    })

    const mobileToggle = wrapper.find('.mobile-toggle')
    await mobileToggle.trigger('click')

    const navLinks = wrapper.find('.nav-links')
    expect(navLinks.classes()).toContain('active')

    const links = wrapper.findAll('.nav-links a')
    const link = links[1]
    if (link) {
      await link.trigger('click')
    }

    expect(navLinks.classes()).not.toContain('active')
  })
})
