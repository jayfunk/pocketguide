import React, {PropTypes} from 'react-native'
import {connect} from 'react-redux'
import EventsView from './EventsView'
import {createRoute} from '../../appRoutes'

const EventsContainerView = React.createClass({
  propTypes: {
    navigator: PropTypes.object,
    events: PropTypes.array.isRequired,
    filter: PropTypes.string,
    sort: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    showEventDetail: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    resetFilterAndEventSetVisible: PropTypes.func.isRequired
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
  return {
    ...state.events,
    events: filterEvents(state.events)
  }
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
        type: 'event:set:show-event-detail',
        showEventDetail: true
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainerView)
