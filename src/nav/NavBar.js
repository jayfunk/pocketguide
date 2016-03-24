import MapNavBar from './MapNavBar'
import EventsNavBar from './EventsNavBar'
import React from 'react-native'

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    navState: React.PropTypes.object
  },

  render () {
    if (this._isMap()) {
      return <MapNavBar/>
    }
    return <EventsNavBar
      navigator={this.props.navigator}
    />
  },

  _isMap () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[0].name === 'Map' || currentRoutes[currentRoutes.length - 1].name === 'Map'
  }
})
