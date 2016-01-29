import NavButton from './NavButton'
import appRoutes from './appRoutes'
import guid from 'guid'
import React from 'react-native'
const {
  View
} = React

export default NavBar = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object
  },

  render: function () {
    return <View>
      {this._renderNavButtons()}
    </View>
  },

  _renderNavButtons: function () {
    return [appRoutes.events, appRoutes.map, appRoutes.volunteer].map(route => {
      const selected = this._isRouteCurrentRoute(route)
      return <NavButton
        key = {guid()}
        onPress = {this._handleOnPress.bind(this, selected, route)}
        title = {route.name}
        isSelected = {selected}
      />
    })
  },

  _isRouteCurrentRoute: function (route) {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[currentRoutes.length - 1].name === route.name
  },

  _handleOnPress: function (selected, route) {
    if (!selected) {
      this.props.navigator.resetTo(route)
    }
  }

})
