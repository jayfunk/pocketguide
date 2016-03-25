import EventsContainerView from '../events/components/EventsContainerView'
import EventView from '../events/components/EventView'
import MapView from '../map/MapView'
import PrinciplesView from '../principles/PrinciplesView'

const routes = {
  events: {
    name: 'Events',
    activeImage: require('../../images/tab/Event_Button_Active.png'),
    inactiveImage: require('../../images/tab/Event_Button_Inactive.png'),
    component: EventsContainerView
  },
  event: {
    name: 'Event',
    activeImage: require('../../images/tab/Event_Button_Active.png'),
    inactiveImage: require('../../images/tab/Event_Button_Inactive.png'),
    component: EventView
  },
  map: {
    name: 'Map',
    activeImage: require('../../images/tab/Map_Button_Active.png'),
    inactiveImage: require('../../images/tab/Map_Button_Inactive.png'),
    component: MapView
  },
  principles: {
    name: 'Principles',
    activeImage: require('../../images/tab/Principle_Button_Active.png'),
    inactiveImage: require('../../images/tab/Principle_Button_Inactive.png'),
    component: PrinciplesView
  }
}

export const createRoute = (eventName, props) => {
  return Object.assign({}, routes[eventName], { props })
}

export default routes
