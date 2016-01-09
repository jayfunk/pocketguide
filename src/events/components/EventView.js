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
    </View>
  }
})
