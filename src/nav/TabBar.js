import TabButton from './TabButton'
import appRoutes from './appRoutes'
import {BORDER, TAB_BACKGROUND, MAP_THEME, EVENTS_THEME} from '../styles/ColorConstants'
import guid from 'guid'
import React from 'react-native'
const {
  StyleSheet,
  View
} = React

const styles = StyleSheet.create({
  tabs: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: BORDER,
    backgroundColor: TAB_BACKGROUND
  }
})

export default TabBar = React.createClass({
  propTypes: {
    onTabChange: React.PropTypes.func
  },

  getInitialState () {
    return {
      activeTabName: appRoutes.events.name
    }
  },

  render: function () {
    this.theme = appRoutes.map.name === this.state.activeTabName ? MAP_THEME : EVENTS_THEME

    const borderColor = {
      borderColor: this.theme
    }

    return <View style={[styles.tabs, borderColor]}>
      {this._renderTabButtons()}
    </View>
  },

  _renderTabButtons: function () {
    return [appRoutes.events, appRoutes.map, appRoutes.volunteer].map((route, index) => {
      const isActiveTab = route.name === this.state.activeTabName
      const borderStyle = index !== 0 ? {borderLeftWidth: 2} : {borderLeftWidth: 0}

      return <TabButton
        key = {guid()}
        title = {route.name}
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
      this.setState({ activeTabName: route.name })
    }
  }
})
