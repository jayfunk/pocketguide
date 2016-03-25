import React from 'react-native'
const {
  Image,
  TouchableHighlight,
  StyleSheet
} = React

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default React.createClass({
  propTypes: {
    onPress: React.PropTypes.func,
    isActiveTab: React.PropTypes.bool,
    activeTabColor: React.PropTypes.string
  },

  render () {
    const image = this.props.isActiveTab ? this.props.activeImage : this.props.inactiveImage

    return (
      <TouchableHighlight style={[styles.tab, this.props.borderStyle]} onPress = {this.props.onPress}>
        <Image source={image}/>
      </TouchableHighlight>
    )
  }
})
