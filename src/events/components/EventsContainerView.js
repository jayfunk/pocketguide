import React from 'react-native'
import {connect} from 'react-redux'
import EventsView from './EventsView'
import {createRoute} from '../../nav/appRoutes'

const EventsContainerView = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    events: React.PropTypes.array.isRequired,
    isLoading: React.PropTypes.bool.isRequired,
    filter: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    resetFilterAndEventSetVisible: React.PropTypes.func.isRequired
  },

  render () {
    return <EventsView
      events = {this.props.events}
      onEventPress = {this._handleEventPress}
    />
  },

  _handleEventPress (selectedEvent) {
    this.props.resetFilterAndEventSetVisible()
    const eventRoute = createRoute('event', {event: selectedEvent})
    this.props.navigator.push(eventRoute)
  }
})

function mapStateToProps (state) {
  // TODO: Sort the events
  return Object.assign({}, state.events, {
    events: filterEvents(state.events)
  })
}

function filterEvents ({events, filter}) {
  if (!filter) return events

  if (filter.length === 0) return events

  return events.filter(event => {
    return event.name.toLowerCase().indexOf(filter) > -1
  })
}

function mapDispatchToProps (dispatch) {
  return {
    resetFilterAndEventSetVisible: () => {
      dispatch({
        type: 'events:filter',
        filter: null
      })
      dispatch({
        type: 'event:toggle:visible'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainerView)
