import reducer from '../eventsReducer'

describe('eventsReducer', () => {
  it('should set initial state', () => {
    const actual = reducer()

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    })
  })

  it('should handle data:load:complete', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'data:load:complete',
      events: [{
        id: 1,
        name: 'eventName'
      }]
    })

    expect(actual).to.eql({
      events: [{
        id: 1,
        name: 'eventName'
      }],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    })
  })

  it('should handle data:load:error', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'data:load:error',
      errorMessage: 'Thing didnt load'
    })

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: 'Thing didnt load'
    })
  })

  it('should handle events:filter', () => {
    const state = {
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'events:filter',
      filter: ' Something '
    })

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      filter: 'something',
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    })
  })

  it('should handle events:sort', () => {
    const state = {
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'events:sort',
      sort: 'DESC'
    })

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      sort: 'DESC',
      filter: null,
      eventVisible: false,
      errorMessage: null
    })
  })

  it('should handle event:toggle:visible', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      eventVisible: false,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'event:toggle:visible'
    })

    expect(actual.eventVisible).to.be.true

    const actual2 = reducer(actual, {
      type: 'event:toggle:visible'
    })

    expect(actual2.eventVisible).to.be.false
  })
})
