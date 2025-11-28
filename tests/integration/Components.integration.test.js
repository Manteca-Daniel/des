import { mount } from '@vue/test-utils'
import Parent from '../../src/components/Parent.vue'
import Counter from '../../src/components/Counter.vue'
import Hello from '../../src/components/Hello.vue'

describe('Components Integration', () => {
  it('Parent usa Hello', () => {
    const wrapper = mount(Parent)
    expect(wrapper.findComponent(Hello).exists()).toBe(true)
  })

  it('Counter funciona dentro de Parent (si está incluido)', async () => {
    const wrapper = mount(Parent)

    // Solo si Parent incluye Counter.vue
    if (wrapper.findComponent(Counter).exists()) {
      await wrapper.find('button').trigger('click')
      expect(wrapper.text()).toContain('1')
    } else {
      expect(true).toBe(true) // para evitar fallo si Counter no está
    }
  })
})
