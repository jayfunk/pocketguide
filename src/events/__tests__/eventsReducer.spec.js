import reducer from '../eventsReducer'

describe('eventsReducer', () => {
  it('should set initial state', () => {
    const actual = reducer()

    expect(actual).to.eql({
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      showEventDetail: false,
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
      showEventDetail: false,
      errorMessage: null
    }

    const event = {
      id: 1,
      eventName: 'D20 Adventuring ',
      startTime: '5:11:00 PM ',
      endTime: '7:11:00 PM ',
      whoAreYou: 'Wagon Drunk',
      location: 'Margaritaville: D20 ',
      dateOfEvent: '4/29/2016',
      intendedAges: 'All Ages',
      themeCampName: 'Margaritaville:D20',
      whatsYourEmail: 'redacted@gmail.com',
      eventDescription: 'Come for a silly adventure as our fates are controlled by a giant inflatable D20 as master minded by a Wagon Drunk Christine. ',
      locationLatitude: '33.376888 ',
      locationLongitude: '-83.336285',
      whatTypeOfEventIsThis: 'Adventure',
      timestamp: '4/8/2016 17:28:11'
    }

    const actual = reducer(state, {
      type: 'data:load:complete',
      events: [event]
    })

    expect(actual).to.eql({
      events: [{
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
      }],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      showEventDetail: false,
      errorMessage: null
    })
  })

  it('should handle data:load:error', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      showEventDetail: false,
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
      showEventDetail: false,
      errorMessage: 'Thing didnt load'
    })
  })

  it('should handle events:filter', () => {
    const state = {
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      showEventDetail: false,
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
      showEventDetail: false,
      errorMessage: null
    })
  })

  it('should handle events:sort', () => {
    const state = {
      events: [],
      isLoading: false,
      filter: null,
      sort: 'ASC',
      showEventDetail: false,
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
      showEventDetail: false,
      errorMessage: null
    })
  })

  it('should handle event:set:show-event-detail', () => {
    const state = {
      events: [],
      isLoading: true,
      filter: null,
      sort: 'ASC',
      showEventDetail: false,
      errorMessage: null
    }

    const actual = reducer(state, {
      type: 'event:set:show-event-detail',
      showEventDetail: true
    })

    expect(actual.showEventDetail).to.be.true

    const actual2 = reducer(actual, {
      type: 'event:set:show-event-detail',
      showEventDetail: false
    })

    expect(actual2.showEventDetail).to.be.false
  })
})
