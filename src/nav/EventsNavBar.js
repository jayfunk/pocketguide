import NavSearchButton from './NavSearchButton'
import {EVENTS_THEME} from '../styles/ColorConstants'
import styles from '../styles/NavBar'
import React from 'react-native'
const {
  View,
  Text,
  TouchableOpacity
} = React

const background = {
  backgroundColor: EVENTS_THEME
}

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object
  },

  render () {
    return (
      <View
        style={[styles.navbar, background]}
      >
        <View style={[styles.corner, styles.alignLeft]}>
          {this._renderLeftSide()}
        </View>
        <View style={[styles.corner, styles.alignRight]}>
          {this._renderSearchButton()}
        </View>
      </View>
    )
  },

  _isEventDetail () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return this._isEvents() && currentRoutes.length === 2
  },

  _renderLeftSide () {
    if (!this._isEventDetail()) {
      return (
        <Text style={styles.navbarText}>
          Events
        </Text>
      )
    }

    return (
      <TouchableOpacity
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
    if (!this._isEvents()) return <View/>

    return (
      <NavSearchButton/>
    )
  }
})
