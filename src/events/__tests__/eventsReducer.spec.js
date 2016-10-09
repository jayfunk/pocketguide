import reducer from '../eventsReducer'

describe('eventsReducer', () => {
  it('should set initial state', () => {
    const actual = reducer()

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
      errorMessage: null
    })
  })

  it('should handle data:load', () => {
    const actual = reducer(reducer(), {
      type: 'data:load'
    })

    expect(actual.isLoading).to.be.true
  })

  it('should handle data:load:complete', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
      errorMessage: null
    }

    const event = {
      id: 1,
      name: 'D20 Adventuring',
      startTime: '5:11:00 PM',
      endTime: '7:11:00 PM',
      dateOfEvent: '4/29/2016',
      location: 'Margaritaville: D20',
      description: 'Come for a silly adventure as our fates are controlled by a giant inflatable D20 as master minded by a Wagon Drunk Christine.',
      shortDescription: 'Come for a silly adventure as our fates are controlled by a giant infl...',
      coordinates: [33.376888, -83.336285],
      latitude: 33.376888,
      longitude: -83.336285,
      hasCoordinates: true,
      intendedAges: 'All Ages',
      themeCampName: 'Margaritaville:D20'
    }

    const actual = reducer(state, {
      type: 'data:load:complete',
      events: [event]
    })

    expect(actual).to.eql({
      events: [event],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
      errorMessage: null
    })
  })

  it('should handle data:load:error', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
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
      selectedEvent: null,
      errorMessage: 'Thing didnt load'
    })
  })

  it('should remove the error message if a data:load:complete occurrs after an error', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
      errorMessage: 'error message'
    }

    const actual = reducer(state, {
      type: 'data:load:complete',
      events: []
    })

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
      errorMessage: null
    })
  })

  it('should handle events:filter', () => {
    const state = {
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
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
      selectedEvent: null,
      errorMessage: null
    })
  })

  it('should handle events:sort', () => {
    const state = {
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      selectedEvent: null,
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
      selectedEvent: null,
      errorMessage: null
    })
  })

  it('should handle event:selected', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: 'something',
      sort: 'ASC',
      selectedEvent: null,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'event:selected',
      selectedEvent: {}
    })

    expect(actual.selectedEvent).to.eql({})
    expect(actual.filter).to.not.exist
  })
})
