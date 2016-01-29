import React from 'react-native'
import EventsStore from '../EventsStore'
import EventsView from './EventsView'
import { createRoute } from '../../nav/appRoutes'

export default EventsContainerView = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      eventsStore: new EventsStore()
    }
  },

  render: function () {
    return <EventsView
      events = {this.state.eventsStore.getAll()}
      onEventPress = {this._handleEventPress}
    />
  },

  _handleEventPress: function (selectedEvent) {
    const eventRoute = createRoute('event', { event: selectedEvent })
    this.props.navigator.push(eventRoute)
  }
})
