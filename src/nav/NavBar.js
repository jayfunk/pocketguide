import MapNavBar from './MapNavBar'
import EventsNavBar from './EventsNavBar'
import {EVENTS_THEME, MAP_THEME, PRINCIPLES_THEME, NAV_BAR_FONT, BORDER} from '../styles/ColorConstants'
import {NAV_BAR_SIZE} from '../styles/StyleConstants'
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
    height: NAV_BAR_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: BORDER,
    borderBottomWidth: 5
  },
  navbarText: {
    color: NAV_BAR_FONT,
    fontSize: 17,
    margin: 10,
    fontWeight: '300',
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
    const background = {
      backgroundColor: this._isMap() ? MAP_THEME : EVENTS_THEME
    }

    return (
      <View
        style={[styles.navbar, background]}
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
