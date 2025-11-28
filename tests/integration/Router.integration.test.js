import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from '../../src/App.vue'
import routerConfig from '../../src/router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: routerConfig.options.routes
})

describe('Router Integration', () => {
  it('carga una ruta correctamente', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: { plugins: [router] }
    })

    expect(wrapper.html()).toBeTruthy()
  })
})
