export default function tabsReducer (state = defaultState(), action = {}) {
  switch (action.type) {
    case 'tabs:active:update': return handleActiveTabUpdate(state, action)
    default: return state
  }
}

function defaultState () {
  return {
    activeTab: 'Events'
  }
}

function handleActiveTabUpdate (state, {activeTab}) {
  return Object.assign({}, state, {
    activeTab
  })
}
