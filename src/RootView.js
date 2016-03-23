import appRoutes from './nav/appRoutes'
import {EventEmitter} from 'events'
import NavBar from './nav/NavBar'
import React from 'react-native'
import TabBar from './nav/TabBar'
import {NAV_BAR_SIZE} from './styles/StyleConstants'
import {CONTENT_BACKGROUND} from './styles/ColorConstants'
const {
  View,
  Navigator,
  BackAndroid,
  StyleSheet
} = React

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: CONTENT_BACKGROUND
  },
  routeView: {
    marginTop: NAV_BAR_SIZE
  }
})

export default RootView = React.createClass({
  childContextTypes: {
    events: React.PropTypes.object
  },

  getChildContext () {
    return {
      events: new EventEmitter()
    }
  },

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
    return (
      <View style={styles.view}>
        <Navigator
          configureScene={(route, routeStack) => { 
            if (route.name === 'Event') {
              return Navigator.SceneConfigs.HorizontalSwipeJump
            }
            return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
          }}
          sceneStyle={styles.routeView}
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
        <TabBar
          onTabChange={this.onTabChange}
        />
      </View>
    )
  },

  onTabChange (route) {
    this.navigator.resetTo(route)
  },

  _storeNavigatorInstance (navigator) {
    this.navigator = navigator
  }
})
