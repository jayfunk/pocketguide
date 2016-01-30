import React from 'react-native'
const {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  activeTab: {
    backgroundColor: 'blue'
  }
})

export default TabButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    onPress: React.PropTypes.func,
    isActiveTab: React.PropTypes.bool
  },

  render () {
    const style = [styles.tab]

    if (this.props.isActiveTab) {
      style.push(styles.activeTab)
    }

    return <View style={style}>
      <TouchableHighlight onPress = {this.props.onPress}>
        <Text>{this.props.title}</Text>
      </TouchableHighlight>
    </View>
  }
})
