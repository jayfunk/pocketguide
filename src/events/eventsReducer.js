export default function eventsReducer (state = defaultState(), action = {}) {
  switch (action.type) {
    case 'data:load:complete': return handleDataLoadComplete(state, action)
    case 'data:load:error': return handleDataLoadError(state, action)
    case 'events:filter': return handleEventsFilter(state, action)
    case 'events:sort': return handleEventsSort(state, action)
    case 'event:toggle:visible': return handleToggleVisible(state, action)
    default: return state
  }
}

function defaultState () {
  return {
    events: [],
    isLoading: false,
    filter: null,
    sort: 'ASC',
    eventVisible: false,
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
    filter
  })
}

function handleEventsSort (state, {sort}) {
  return Object.assign({}, state, {
    sort
  })
}

function handleToggleVisible (state, action) {
  return Object.assign({}, state, {
    eventVisible: !state.eventVisible
  })
}
