import React from 'react-native'
const {
  View,
  Text,
  TouchableHighlight
} = React

export default NavButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    onPress: React.PropTypes.func
  },

  render: function () {
    return <View>
      <TouchableHighlight
        onPress = {this.props.onPress}>
        <Text>{this.props.title}</Text>
      </TouchableHighlight>
    </View>
  }
})
