import React from 'react-native'

const {
  View,
  Text
} = React

export default EventView = React.createClass({
  propTypes: {
    event: React.PropTypes.object
  },

  render: function () {
    return <View>
      <Text>
        {this.props.event.name}
      </Text>
      <Text>
        {this.props.event.startTime}
      </Text>
      <Text>
        {this.props.event.endTime}
      </Text>
      <Text>
        {this.props.event.location}
      </Text>
      <Text>
        {this.props.event.description}
      </Text>
      <Text>
        {this.props.event.isAllDay}
      </Text>
      <Text>
        {this.props.event.days}
      </Text>
    </View>
  }
})
