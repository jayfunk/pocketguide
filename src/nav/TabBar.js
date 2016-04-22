import TabButton from './TabButton'
import appRoutes from './appRoutes'
import {TAB_BACKGROUND} from '../styles/ColorConstants'
import guid from 'guid'
import React from 'react-native'
const {
  StyleSheet,
  View
} = React

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: TAB_BACKGROUND
  }
})

export default React.createClass({
  propTypes: {
    onTabChange: React.PropTypes.func
  },

  getInitialState () {
    return {
      activeTabName: appRoutes.events.name
    }
  },

  render: function () {
    return <View style={[styles.tabs]}>
      {this._renderTabButtons()}
    </View>
  },

  _renderTabButtons: function () {
    return [appRoutes.events, appRoutes.map, appRoutes.principles].map((route, index) => {
      const isActiveTab = route.name === this.state.activeTabName ||
        (route.name === 'Events' && this.state.activeTabName === 'Event')
      const borderStyle = index !== 0 ? {borderLeftWidth: 2} : {borderLeftWidth: 0}

      return <TabButton
        key = {guid()}
        activeImage = {route.activeImage}
        inactiveImage = {route.inactiveImage}
        onPress = {this._handleOnPress.bind(this, route)}
        isActiveTab = {isActiveTab}
        activeTabColor = {this.theme}
        borderStyle={borderStyle}
      />
    })
  },

  _handleOnPress: function (route) {
    if (this.state.activeTabName !== route.name) {
      this.props.onTabChange(route)
    }
  },

  setActiveTabName (name) {
    this.setState({
      activeTabName: name
    })
  }
})
