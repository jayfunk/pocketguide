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
    justifyContent: 'center',
    paddingBottom: 10
  }
})

export default TabButton = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func,
    isActiveTab: React.PropTypes.bool,
    activeTabColor: React.PropTypes.string
  },

  render () {
    const style = [styles.tab]
    const image = this.props.isActiveTab ? this.props.activeImage : this.props.inactiveImage

    return (
      <TouchableHighlight style={[style, this.props.borderStyle]} onPress = {this.props.onPress}>
        <Image resizeMode='contain' source={image}/>
      </TouchableHighlight>
    )
  }
})
