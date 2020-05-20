import { shallowMount } from '@vue/test-utils'
import DataTableRow from '../Row.vue'

const mockSampleItem = {
  name: 'Luke Skywalker',
  height: '172',
  gender: 'male',
  homeworld: 'Tatooine',
}

const wrapper = shallowMount(DataTableRow, {
  stubs: ['md-table-row', 'md-table-cell'],
  propsData: {
    item: mockSampleItem,
  },
})

describe('Module: DataTableRow', () => {
  it('correctly sets the item prop', () => {
    expect(wrapper.props('item')).toStrictEqual(mockSampleItem)
  })

  it('should correctly render a table body', done => {
    wrapper.vm.$nextTick(() => {
      const elements = wrapper.findAll('.table-cell')

      expect(elements.length).toEqual(Object.keys(mockSampleItem).length)
      expect(elements.at(0).text()).toEqual(mockSampleItem.name)
      expect(elements.at(1).text()).toEqual(mockSampleItem.height)
      expect(elements.at(2).text()).toEqual(mockSampleItem.gender)
      expect(elements.at(3).text()).toEqual(mockSampleItem.homeworld)

      done()
    })
  })
})
