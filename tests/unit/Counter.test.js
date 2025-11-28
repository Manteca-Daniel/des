import { mount } from '@vue/test-utils'
import Counter from '../../src/components/Counter.vue'

describe('Counter.vue', () => {
  it('incrementa al hacer click', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})
