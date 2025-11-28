import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import router from '../../src/router/index.js' // 👈 IMPORTANTE

describe('App.vue Integration', () => {
  it('renderiza el componente principal con router', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    expect(wrapper.exists()).toBe(true)
  })
})
