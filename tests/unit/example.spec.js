import { shallowMount } from '@vue/test-utils'
import SvgCard from '@/components/SvgCard.vue'

describe('SvgCard.vue', () => {
  it('renders props. when passed', () => {
    const svg = { name: 'test', path: 'test' }
    const viewBox = ''
    const callback = function () {}
    const wrapper = shallowMount(SvgCard, {
      propsData: { svg, viewBox, callback }
    })
    expect(wrapper.text()).toMatch(svg.name)
  })
})
