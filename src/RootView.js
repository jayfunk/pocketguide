import appRoutes from './nav/appRoutes'
import NavBar from './nav/NavBar'
import React from 'react-native'
const {
  Navigator,
  BackAndroid,
  StyleSheet
} = React

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})

export default RootView = React.createClass({
  componentDidMount: function () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop()
        return true
      }
      return false
    })
  },

  _isOnMainRoute: function () {
    const currentRoutes = this.navigator.getCurrentRoutes()
    return currentRoutes.length === 1 && currentRoutes[0].name === appRoutes.events.name
  },

  render: function () {
    return <Navigator
      initialRoute = {appRoutes.events}
      sceneStyle = {styles.view}
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
