import { shallowMount } from '@vue/test-utils'
import DataTableHead from '../Head.vue'

const mockColumns = ['Name', 'Height', 'Gender', 'Homeworld']
const stubs = ['md-table-row', 'md-table-head']

describe('Module: DataTableHead', () => {
  it('correctly sets the columns prop', () => {
    const wrapper = shallowMount(DataTableHead, { stubs })
    wrapper.setProps({ columns: mockColumns })

    expect(wrapper.props('columns')).toStrictEqual(mockColumns)
  })

  it('should correctly render a table head', done => {
    const wrapper = shallowMount(DataTableHead, { stubs })
    wrapper.setProps({ columns: mockColumns })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('.table-head-item').length).toEqual(
        mockColumns.length
      )

      done()
    })
  })
})
