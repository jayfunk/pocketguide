import reducer from '../mapReducer'

describe('mapReducer', () => {
  it('should set its initial state', () => {
    const actual = reducer()

    expect(actual).to.eql({
      filter: {
        showAnnotations: true,
        showStaticAnnotations: true
      },
      errorMessage: null,
      annotations: [],
      staticAnnotations: [],
      center: {
        latitude: 33.378917,
        longitude: -83.337274
      },
      zoomLevel: 15
    })
  })

  it('should handle map:filter:update', () => {
    const state = {
      filter: {
        showAnnotations: true,
        showStaticAnnotations: true
      },
      errorMessage: null,
      annotations: [],
      staticAnnotations: [],
      center: {
        latitude: 33.378917,
        longitude: -83.337274
      },
      zoomLevel: 15
    }

    const actual = reducer(state, {
      type: 'map:filter:update',
      showAnnotations: false,
      showStaticAnnotations: true
    })

    expect(actual.filter).to.eql({
      showAnnotations: false,
      showStaticAnnotations: true
    })

    const actual2 = reducer(state, {
      type: 'map:filter:update',
      showAnnotations: true,
      showStaticAnnotations: false
    })

    expect(actual2.filter).to.eql({
      showAnnotations: true,
      showStaticAnnotations: false
    })
  })

  it('should handle data:load:complete', () => {
    const state = {
      filter: {
        showAnnotations: true,
        showStaticAnnotations: true
      },
      errorMessage: null,
      annotations: [],
      staticAnnotations: [],
      center: {
        latitude: 33.378917,
        longitude: -83.337274
      },
      zoomLevel: 15
    }

    const actual = reducer(state, {
      type: 'data:load:complete',
      events: [{
        id: 1,
        name: 'test',
        coordinates: ['lat', 'long']
      }]
    })

    expect(actual.events).to.eql([{
      id: 1,
      type: 'point',
      title: 'test',
      coordinates: ['lat', 'long'],
      annotationImage: {
        url: 'image!pin',
        width: 30,
        height: 70
      }
    }])
  })

  it('should handle data:load:error', () => {
    const state = {
      filter: {
        showAnnotations: true,
        showStaticAnnotations: true
      },
      errorMessage: null,
      annotations: [],
      staticAnnotations: [],
      center: {
        latitude: 33.378917,
        longitude: -83.337274
      },
      zoomLevel: 15
    }

    const actual = reducer(state, {
      type: 'data:load:error',
      errorMessage: 'test'
    })

    expect(actual.errorMessage).to.eql('test')
  })
})
