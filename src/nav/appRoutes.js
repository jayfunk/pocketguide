import EventsContainerView from '../events/components/EventsContainerView'
import EventView from '../events/components/EventView'
import MapView from '../map/MapView'

const routes = {
  events: {
    name: 'Events',
    component: EventsContainerView
  },
  event: {
    name: 'Event',
    component: EventView
  },
  map: {
    name: 'Map',
    component: MapView
  },
  volunteer: {
    name: 'Volunteer',
    component: null
  }
}

export const createRoute = (eventName, props) => {
  return Object.assign({}, routes[eventName], { props })
}

export default routes
