import reducer from '../tabsReducer'

describe('tabsReducer', () => {
  it('should set its initial state', () => {
    const acutal = reducer()

    expect(acutal).to.eql({
      activeTab: 'Events'
    })
  })

  it('should handle tabs:active:update', () => {
    const acutal = reducer(reducer(), {
      type: 'tabs:active:update',
      activeTab: 'Map'
    })

    expect(acutal.activeTab).to.eql('Map')
  })
})
