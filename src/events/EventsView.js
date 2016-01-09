import eventData from '../data/eventData';
import Event from './Event';
import EventsList from './EventsList';
import React from 'react-native';

const {
  StyleSheet,
  View,
  Text,
} = React;

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});

export default EventsView = React.createClass({

  //At this layer we should be performing the IO or fetching to get the data from the server instead of using static data from the disk.
  //Following a fetch we need to store that data locally and perform checks with the server.
  getInitialState(){
    return {
      events: this._convertToEvents(eventData)
    };
  },

  _convertToEvents(rawEventData) {
    return rawEventData.map(rawEvent => {
      return new Event(rawEvent);
    });
  },

  render(){
    return (
      <View style={styles.view}>
        <EventsList
          events={this.state.events}
        />
      </View>
    );
  }

});