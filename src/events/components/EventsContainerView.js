import React from 'react-native'
import EventsStore from '../EventsStore'
import EventsView from './EventsView'
import EventView from './EventView'

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
    this.props.navigator.push({
      name: 'Event',
      component: EventView,
      props: {
        event: selectedEvent
      }
    })
  }
})
