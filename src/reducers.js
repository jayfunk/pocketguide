import {combineReducers} from 'redux'
import eventsReducer from './events/eventsReducer'
import mapReducer from './map/mapReducer'
import tabsReducer from './tabs/tabsReducer'

export default combineReducers({
  events: eventsReducer,
  map: mapReducer,
  tabs: tabsReducer
})
