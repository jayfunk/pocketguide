var React = require('react-native');
var eventData = require('../data/eventData.json');
var Event = require('./Event');
var EventsList = require('./EventsList');

var {
  StyleSheet,
  View,
  Text,
} = React;

module.exports = EventsView = React.createClass({

  //At this layer we should be performing the IO or fetching to get the data from the server instead of using static data from the disk.
  //Following a fetch we need to store that data locally and perform checks with the server.
  getInitialState: function(){
    return {
      events: this._convertToEvents(eventData)
    };
  },

  _convertToEvents: function(rawEventData) {
    return rawEventData.map(function(rawEvent){
      return new Event(rawEvent);
    });
  },

  render: function(){
    return (
      <View style={styles.view}>
        <EventsList
          events={this.state.events}
        />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  view: {
    flex: 1
  }
});

