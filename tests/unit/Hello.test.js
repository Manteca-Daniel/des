import { mount } from '@vue/test-utils'
import Hello from '../../src/components/Hello.vue'
import { describe, it, expect } from 'vitest'

describe('Hello.vue', () => {
  it('muestra el mensaje pasado por props', () => {
    const wrapper = mount(Hello, {
      props: { msg: 'Hola Test' }
    })

    expect(wrapper.text()).toContain('Hola Test')
  })
})
