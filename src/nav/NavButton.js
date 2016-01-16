import React from 'react-native'
const {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'black'
  }
})

export default NavButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    onPress: React.PropTypes.func,
    isSelected: React.PropTypes.bool
  },

  render: function () {
    return <View style = {this.props.isSelected === true ? styles.selected : undefined}>
      <TouchableHighlight onPress = {this.props.onPress}>
        <Text>{this.props.title}</Text>
      </TouchableHighlight>
    </View>
  }
})
