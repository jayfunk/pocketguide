import React, {PropTypes} from 'react'
import {Image, TouchableHighlight, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default React.createClass({
  propTypes: {
    onPress: PropTypes.func,
    isActiveTab: PropTypes.bool,
    activeTabColor: PropTypes.string
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
