export default function eventsReducer (state = defaultState(), action = {}) {
  switch (action.type) {
    case 'data:load:complete': return handleDataLoadComplete(state, action)
    case 'data:load:error': return handleDataLoadError(state, action)
    case 'events:filter': return handleEventsFilter(state, action)
    case 'events:sort': return handleEventsSort(state, action)
    case 'event:set:show-event-detail': return handleSetShowEventDetail(state, action)
    default: return state
  }
}

function defaultState () {
  return {
    sort: 'ASC',
    events: [],
    filter: null,
    isLoading: false,
    showEventDetail: false,
    errorMessage: null
  }
}

function handleDataLoadComplete (state, {events}) {
  return Object.assign({}, state, {
    events,
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

function handleSetShowEventDetail (state, action) {
  return Object.assign({}, state, {
    showEventDetail: action.showEventDetail
  })
}
