import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: HomeView },
      { path: '/projects', component: { template: '<div>Projects</div>' } },
      { path: '/contact', component: { template: '<div>Contact</div>' } },
    ],
  })

  it('renders hero section with title', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('.hero-title').exists()).toBe(true)
    expect(wrapper.text()).toContain('Développeur Web')
  })

  it('renders skills section', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('.skills').exists()).toBe(true)
    expect(wrapper.text()).toContain('Mes compétences')
  })

  it('displays all skills with progress bars', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    const skillItems = wrapper.findAll('.skill-item')
    expect(skillItems.length).toBeGreaterThan(0)

    const progressBars = wrapper.findAll('.skill-progress')
    expect(progressBars.length).toBeGreaterThan(0)
  })

  it('renders call-to-action buttons', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    const buttons = wrapper.findAll('.btn')
    expect(buttons.length).toBe(2)
    expect(buttons[0]?.text()).toContain('Voir mes projets')
    expect(buttons[1]?.text()).toContain('Me contacter')
  })

  it('displays Vue.js as a skill', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Vue.js')
  })

  it('skill progress bars have correct width style', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    })

    const firstProgressBar = wrapper.find('.skill-progress')
    expect(firstProgressBar.attributes('style')).toContain('width:')
  })
})
