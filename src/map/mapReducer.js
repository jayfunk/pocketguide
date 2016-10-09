import staticAnnotations from '../data/staticData/staticMapAnnotations'

export default function mapReducer (state = defaultState(), action = {}) {
  switch (action.type) {
    case 'map:toggle:show-annotations': return handleToggleShowAnnotations(state, action)
    case 'map:toggle:show-static-annotations': return handleToggleStaticShowAnnotations(state, action)
    case 'data:load:complete': return handleDataLoadComplete(state, action)
    case 'data:load:error': return handleDataLoadError(state, action)
    case 'map:event:selected': return handleEventSelected(state, action)
    case 'map:annotation:selected': return handleAnnotationSelected(state, action)
    default: return state
  }
}

function defaultState () {
  return {
    filter: {
      showAnnotations: true,
      showStaticAnnotations: true
    },
    errorMessage: null,
    annotations: [],
    staticAnnotations: staticAnnotations,
    center: {
      latitude: 33.480632,
      longitude: -85.269295
    },
    zoomLevel: 15,
    selectedEvent: null,
    selectedAnnotation: null
  }
}

function handleToggleShowAnnotations (state) {
  return Object.assign({}, state, {
    filter: {
      showAnnotations: !state.filter.showAnnotations,
      showStaticAnnotations: state.filter.showStaticAnnotations
    },
    selectedEvent: null
  })
}

function handleToggleStaticShowAnnotations (state) {
  return Object.assign({}, state, {
    filter: {
      showAnnotations: state.filter.showAnnotations,
      showStaticAnnotations: !state.filter.showStaticAnnotations
    },
    selectedEvent: null
  })
}

function handleDataLoadComplete (state, {events}) {
  return Object.assign({}, state, {
    annotations: buildEventAnnotations(events)
  })
}

function buildEventAnnotations (events) {
  return events
    .filter(event => event && event.coordinates)
    .map(event => {
      return {
        id: `${event.id}`,
        type: 'point',
        title: event.name,
        coordinates: event.coordinates
      }
    })
}

function handleDataLoadError (state, {errorMessage}) {
  return Object.assign({}, state, {
    errorMessage
  })
}

function handleEventSelected (state, {selectedEvent}) {
  return Object.assign({}, state, {
    selectedEvent,
    filter: {
      showAnnotations: false,
      showStaticAnnotations: false
    }
  })
}

function handleAnnotationSelected (state, {selectedAnnotation}) {
  return Object.assign({}, state, {
    selectedAnnotation
  })
}
