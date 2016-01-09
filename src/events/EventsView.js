import EventsList from './EventsList'
import React from 'react-native'

const {
  StyleSheet,
  View
} = React

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})

export default EventsView = React.createClass({
  propTypes: {
    events: React.PropTypes.array
  },

  render: function () {
    return (
      <View style={styles.view}>
        <EventsList
          events = {this.props.events}
        />
      </View>
    )
  }
})
