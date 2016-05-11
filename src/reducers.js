import {combineReducers} from 'redux'
import eventsReducer from './events/eventsReducer'
import mapReducer from './map/mapReducer'
import tabBarReducer from './tabs/tabBarReducer'

export default combineReducers({
  events: eventsReducer,
  map: mapReducer,
  tabBar: tabBarReducer
})