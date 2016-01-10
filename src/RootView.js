import appRoutes from './nav/appRoutes'
import NavBar from './nav/NavBar'
import React from 'react-native'
const {
  Navigator,
  BackAndroid
} = React

export default RootView = React.createClass({
  componentDidMount: function () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (!this.navigator) return false

      if (!this._isOnMainRoute()) {
        this.navigator.pop()
        return true
      } else {
        return false
      }
    })
  },

  _isOnMainRoute: function () {
    const currentRoutes = this.navigator.getCurrentRoutes()
    return currentRoutes.length === 1 && currentRoutes[0].name === appRoutes.events.name
  },

  render: function () {
    return <Navigator
      initialRoute = {appRoutes.events}
      renderScene = {(route, navigator) => {
        this._storeNavigatorInstance(navigator)

        if (route.component) {
          return <route.component
            navigator = {navigator}
            {...route.props}
          />
        }
      }}
      navigationBar = {<NavBar/>}
    />
  },

  _storeNavigatorInstance: function (navigator) {
    this.navigator = navigator
  }
})
