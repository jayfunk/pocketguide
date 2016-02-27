import NavSearchButton from './NavSearchButton'
import React from 'react-native'
const {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} = React

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 44, // Default iOS navbar height
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5589B7'
  },
  navbarText: {
    color: 'white',
    fontSize: 17,
    margin: 10,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center'
  },
  corner: {
    flex: 1,
    justifyContent: 'center'
  },

  alignLeft: {
    alignItems: 'flex-start'
  },
  alignRight: {
    alignItems: 'flex-end'
  }
})

export default NavBar = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    navState: React.PropTypes.object
  },

  render () {
    return (
      <View
        style={styles.navbar}
      >
        {this._renderLeftControls()}
        {this._renderRightControls()}
      </View>
    )
  },

  _renderLeftControls () {
    if (this._isEventDetail()) {
      return this._renderBackButton()
    }
  },

  _renderRightControls () {
    if (this._isEvents() && !this._isEventDetail()) {
      return this._renderSearchButton()
    }
  },

  _isEventDetail () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return this._isEvents() && currentRoutes.length === 2
  },

  _renderBackButton () {
    return (
      <TouchableOpacity
        style={[styles.corner, styles.alignLeft]}
        onPress={() => this.props.navigator.pop()}
      >
        <Text style={styles.navbarText}>
          Back
        </Text>
      </TouchableOpacity>
    )
  },

  _isEvents () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[0].name === 'Events'
  },

  _renderSearchButton () {
    return (
      <NavSearchButton
        styles={[styles.corner, styles.alignRight]}
      />
    )
  }
})
