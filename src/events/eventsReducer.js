export default function eventsReducer (state = defaultState(), action = {}) {
  switch (action.type) {
    case 'data:load': return handleDataLoad(state, action)
    case 'data:load:complete': return handleDataLoadComplete(state, action)
    case 'data:load:error': return handleDataLoadError(state, action)
    case 'events:filter': return handleEventsFilter(state, action)
    case 'events:sort': return handleEventsSort(state, action)
    case 'event:selected': return handleEventSelected(state, action)
    default: return state
  }
}

function defaultState () {
  return {
    sort: 'ASC',
    events: [],
    filter: null,
    isLoading: false,
    selectedEvent: null,
    errorMessage: null
  }
}

function handleDataLoad (state) {
  return {
    ...state,
    isLoading: true
  }
}

function handleDataLoadComplete (state, {events}) {
  return Object.assign({}, state, {
    events,
    errorMessage: null,
    isLoading: false
  })
}

function handleDataLoadError (state, {errorMessage}) {
  return Object.assign({}, state, {
    errorMessage,
    isLoading: false
  })
}

function handleEventsFilter (state, {filter}) {
  return Object.assign({}, state, {
    filter: filter ? filter.trim().toLowerCase() : null
  })
}

function handleEventsSort (state, {sort}) {
  return Object.assign({}, state, {
    sort
  })
}

function handleEventSelected (state, action) {
  return Object.assign({}, state, {
    filter: null,
    selectedEvent: action.selectedEvent
  })
}
