export default function eventsReducer (state = defaultState(), action = {}) {
  switch (action.type) {
    case 'map:filter:update': return handleMapFilterUpdate(state, action)
    case 'data:load:complete': return handleDataLoadComplete(state, action)
    case 'data:load:error': return handleDataLoadError(state, action)
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
    staticAnnotations: [],
    center: {
      latitude: 33.378917,
      longitude: -83.337274
    },
    zoomLevel: 15
  }
}

function handleMapFilterUpdate (state, {showAnnotations, showStaticAnnotations}) {
  return Object.assign({}, state, {
    filter: {
      showAnnotations,
      showStaticAnnotations
    }
  })
}

function handleDataLoadComplete (state, {events}) {
  return Object.assign({}, state, {
    events: buildEventAnnotations(events)
  })
}

function buildEventAnnotations (events) {
  return events
    .filter(event => event && event.coordinates)
    .map(event => {
      return {
        id: event.id,
        type: 'point',
        title: event.name,
        coordinates: event.coordinates,
        annotationImage: {
          url: 'image!pin',
          width: 30,
          height: 70
        }
      }
    })
}

function handleDataLoadError (state, {errorMessage}) {
  return Object.assign({}, state, {
    errorMessage
  })
}
