import TabButton from './TabButton'
import appRoutes from './appRoutes'
import guid from 'guid'
import React from 'react-native'
const {
  StyleSheet,
  View
} = React

const styles = StyleSheet.create({
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'black'
  }
})

export default TabBar = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    onTabChange: React.PropTypes.func
  },

  getInitialState () {
    return {
      activeTabName: appRoutes.events.name
    }
  },

  render: function () {
    return <View style={styles.tabs}>
      {this._renderTabButtons()}
    </View>
  },

  _renderTabButtons: function () {
    return [appRoutes.events, appRoutes.map, appRoutes.volunteer].map(route => {
      const isActiveTab = route.name === this.state.activeTabName
      return <TabButton
        key = {guid()}
        title = {route.name}
        onPress = {this._handleOnPress.bind(this, route)}
        isActiveTab = {isActiveTab}
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
