import React, {PropTypes} from 'react-native'
import {connect} from 'react-redux'
import EventsView from './EventsView'
import EventView from './EventView'

const EventsContainerView = React.createClass({
  propTypes: {
    navigator: PropTypes.object,
    events: PropTypes.array.isRequired,
    filter: PropTypes.string,
    sort: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    selectedEvent: PropTypes.object,
    errorMessage: PropTypes.string,
    handleEventPress: PropTypes.func.isRequired
  },

  render () {
    if (this.props.selectedEvent) {
      return <EventView
        navigator={this.props.navigator}
        event={this.props.selectedEvent}
      />
    }
    return <EventsView
      events = {this.props.events}
      onEventPress = {this.props.handleEventPress}
    />
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

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleEventPress: (selectedEvent) => {
      dispatch({
        type: 'event:selected',
        selectedEvent
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainerView)
