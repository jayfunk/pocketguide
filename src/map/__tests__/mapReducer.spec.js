import reducer from '../mapReducer'
import staticAnnotations from '../../data/staticData/staticMapAnnotations'

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
      staticAnnotations,
      center: {
        latitude: 33.378917,
        longitude: -83.337274
      },
      zoomLevel: 15,
      selectedEvent: null,
      selectedAnnotation: null
    })
  })

  it('should handle map:toggle:show-annotations', () => {
    const actual = reducer(reducer(), {
      type: 'map:toggle:show-annotations'
    })

    expect(actual.filter).to.eql({
      showAnnotations: false,
      showStaticAnnotations: true
    })

    const actual2 = reducer(actual, {
      type: 'map:toggle:show-static-annotations'
    })

    expect(actual2.filter).to.eql({
      showAnnotations: false,
      showStaticAnnotations: false
    })

    const actual3 = reducer(actual2, {
      type: 'map:toggle:show-annotations'
    })

    expect(actual3.filter).to.eql({
      showAnnotations: true,
      showStaticAnnotations: false
    })
  })

  it('should handle clear selectedEvent when filters are changed', () => {
    const state = {
      filter: {
        showAnnotations: false,
        showStaticAnnotations: false
      },
      selectedEvent: {}
    }

    const actual = reducer(state, {
      type: 'map:toggle:show-annotations'
    })

    expect(actual.selectedEvent).to.not.exist

    const actual2 = reducer(state, {
      type: 'map:toggle:show-static-annotations'
    })

    expect(actual2.selectedEvent).to.not.exist
  })

  it('should handle data:load:complete', () => {
    const actual = reducer(reducer(), {
      type: 'data:load:complete',
      events: [{
        id: 1,
        name: 'test',
        coordinates: ['lat', 'long']
      }]
    })

    expect(actual.annotations).to.eql([{
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
    const actual = reducer(reducer(), {
      type: 'data:load:error',
      errorMessage: 'test'
    })

    expect(actual.errorMessage).to.eql('test')
  })

  it('should handle map:event:selected', () => {
    const actual = reducer(reducer(), {
      type: 'map:event:selected',
      selectedEvent: {
        id: 1
      }
    })

    expect(actual.selectedEvent).to.eql({
      id: 1
    })
    expect(actual.filter.showAnnotations).to.be.false
    expect(actual.filter.showStaticAnnotations).to.be.false
  })

  it('should handle map:annotation:selected', () => {
    const actual = reducer(reducer(), {
      type: 'map:annotation:selected',
      selectedAnnotation: {
        id: 1
      }
    })

    expect(actual.selectedAnnotation).to.eql({
      id: 1
    })
  })
})
