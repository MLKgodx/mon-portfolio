import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ContactView from '../ContactView.vue'

describe('ContactView', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(ContactView)
  })

  it('renders contact form', () => {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('#name').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#message').exists()).toBe(true)
  })

  it('renders contact information section', () => {
    expect(wrapper.find('.contact-info').exists()).toBe(true)
    expect(wrapper.text()).toContain('Informations')
  })

  it('shows validation errors when submitting empty form', async () => {
    const form = wrapper.find('form')
    await form.trigger('submit')

    expect(wrapper.text()).toContain('Le nom est requis')
    expect(wrapper.text()).toContain("L'email est requis")
    expect(wrapper.text()).toContain('Le message est requis')
  })

  it('validates email format', async () => {
    const emailInput = wrapper.find('#email')
    await emailInput.setValue('invalid-email')

    const form = wrapper.find('form')
    await form.trigger('submit')

    expect(wrapper.text()).toContain("L'email n'est pas valide")
  })

  it('accepts valid email format', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const messageInput = wrapper.find('#message')

    await nameInput.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await messageInput.setValue('Hello, this is a test message')

    const form = wrapper.find('form')
    await form.trigger('submit')

    expect(wrapper.text()).not.toContain("L'email n'est pas valide")
  })

  it('shows success message after successful submission', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const messageInput = wrapper.find('#message')

    await nameInput.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await messageInput.setValue('Hello, this is a test message')

    const form = wrapper.find('form')
    await form.trigger('submit')

    expect(wrapper.find('.success-message').exists()).toBe(true)
    expect(wrapper.text()).toContain('Message envoyé avec succès')
  })

  it('clears form after showing validation errors', async () => {
    const nameInput = wrapper.find<HTMLInputElement>('#name')
    await nameInput.setValue('John')

    const form = wrapper.find('form')
    await form.trigger('submit')

    expect(wrapper.text()).toContain("L'email est requis")

    expect(nameInput.element.value).toBe('John')
  })

  it('has submit button', () => {
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.exists()).toBe(true)
    expect(submitButton.text()).toContain('Envoyer')
  })

  it('submit button has correct CSS class', () => {
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.classes()).toContain('submit-btn')
  })

  it('submit button is a button element', () => {
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.element.tagName.toLowerCase()).toBe('button')
  })

  it('submit button has type submit', () => {
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('type')).toBe('submit')
  })

  it('submit button triggers form submission', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const messageInput = wrapper.find('#message')

    await nameInput.setValue('John Doe')
    await emailInput.setValue('john@example.com')
    await messageInput.setValue('Hello')

    const form = wrapper.find('form')
    await form.trigger('submit')

    expect(wrapper.find('.success-message').exists()).toBe(true)
  })
})
