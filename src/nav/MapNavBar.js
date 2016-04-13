import styles from '../styles/NavBarStyles'
import {MAP_THEME} from '../styles/ColorConstants'
import React from 'react-native'
const {
  View,
  Text,
  TouchableOpacity,
  Image
} = React

const background = {
  backgroundColor: MAP_THEME
}

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object
  },

  contextTypes: {
    eventChannel: React.PropTypes.object
  },

  getInitialState () {
    return {
      isEventsActive: true,
      isOpsActive: true
    }
  },

  render () {
    return (
      <View
        style={[styles.navbar, background]}
      >
        <View style={[styles.corner, styles.alignLeft]}>
          <Text style={styles.navbarText}>Map</Text>
        </View>
        <View style={[styles.corner, styles.alignRight]}>
          <TouchableOpacity
            onPress={this._toggleEvents}
          >
            {this._renderEventsIcon()}
          </TouchableOpacity>
        </View>
        <View style={[styles.corner, styles.alignRight]}>
          <TouchableOpacity
            onPress={this._toggleOps}
          >
            {this._renderOpsIcon()}
          </TouchableOpacity>
        </View>
      </View>
    )
  },

  _toggleEvents () {
    this._updateState({
      isOpsActive: this.state.isOpsActive,
      isEventsActive: !this.state.isEventsActive
    })
  },

  _updateState (updatedState) {
    this.context.eventChannel.emit('maps:toggle:filters', updatedState)
    this.setState(updatedState)
  },

  _renderEventsIcon () {
    if (this.state.isEventsActive) {
      return <Image resizeMode='contain' source={require('../../images/map/Events_Button_Active.png')}/>
    }
    return <Image resizeMode='contain' source={require('../../images/map/Events_Button_Inactive.png')}/>
  },

  _toggleOps () {
    this._updateState({
      isOpsActive: !this.state.isOpsActive,
      isEventsActive: this.state.isEventsActive
    })
  },

  _renderOpsIcon () {
    if (this.state.isOpsActive) {
      return <Image resizeMode='contain' source={require('../../images/map/Ops_Button_Active.png')}/>
    }
    return <Image resizeMode='contain' source={require('../../images/map/Ops_Button_Inactive.png')}/>
  }
})
