import React from 'react-native'
import {NAV_BAR_FONT} from '../styles/ColorConstants'
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
  }
})

export default TabButton = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    onPress: React.PropTypes.func,
    isActiveTab: React.PropTypes.bool,
    activeTabColor: React.PropTypes.string
  },

  render () {
    const style = [styles.tab]
    const textColor = {
      color: this.props.isActiveTab ? this.props.activeTabColor : NAV_BAR_FONT
    }

    return <TouchableHighlight style={[style, this.props.borderStyle]} onPress = {this.props.onPress}>
        <Text style={textColor}>{this.props.title}</Text>
    </TouchableHighlight>
  }
})
