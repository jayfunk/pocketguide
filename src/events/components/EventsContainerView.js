import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import EventsView from './EventsView'
import EventView from './EventView'
import {ActivityIndicator, View, Text} from 'react-native'
import styles from '../../styles/EventViewStyles'

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
    if (this.props.errorMessage) {
      return (
        <View>
          <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator
          style={styles.loadingIndicator}
          animating={this.props.isLoading}
        />
        <EventsView
          events={this.props.events}
          onEventPress={this.props.handleEventPress}
        />
      </View>
    )
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
