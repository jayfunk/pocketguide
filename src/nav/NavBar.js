import MapNavBar from './MapNavBar'
import EventsNavBar from './EventsNavBar'
import React from 'react-native'
const {
  StyleSheet,
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

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    navState: React.PropTypes.object
  },

  render () {
    return (
      <View
        style={styles.navbar}
      >
        {this._renderBar()}
      </View>
    )
  },

  _renderBar () {
    if (this._isMap()) {
      return <MapNavBar styles={styles}/>
    }
    return <EventsNavBar
      styles={styles}
      navigator={this.props.navigator}
    />
  },

  _isMap () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[0].name === 'Map' || currentRoutes[currentRoutes.length - 1].name === 'Map'
  }
})
