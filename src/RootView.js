import React from 'react-native'
import EventsView from './events/EventsView'
import EventsStore from './events/EventsStore'

export default RootView = React.createClass({
  getInitialState: () => {
    return {
      eventsStore: new EventsStore()
    }
  },

  render: function () {
    return <EventsView
      events = {this.state.eventsStore.getAll()}
    />
  }
})
