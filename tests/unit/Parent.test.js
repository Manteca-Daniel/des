import { mount } from '@vue/test-utils'
import Parent from '../../src/components/Parent.vue'
import Hello from '../../src/components/Hello.vue'

describe('Parent.vue', () => {
  it('renderiza el componente hijo Hello', () => {
    const wrapper = mount(Parent)
    expect(wrapper.findComponent(Hello).exists()).toBe(true)
  })
})
