import appRoutes from './nav/appRoutes'
import DataStore from './data/DataStore'
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

export default React.createClass({
  childContextTypes: {
    eventChannel: React.PropTypes.object
  },

  getInitialState () {
    const eventChannel = new EventEmitter()
    return {
      eventChannel,
      dataStore: new DataStore(eventChannel)
    }
  },

  getChildContext () {
    return {
      eventChannel: this.state.eventChannel
    }
  },

  componentDidMount () {
    this.state.dataStore.load()
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop()
        return true
      }
      return false
    })
  },

  _isOnMainRoute () {
    const currentRoutes = this.navigator.getCurrentRoutes()
    return currentRoutes.length === 1 && currentRoutes[0].name === appRoutes.events.name
  },

  render () {
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
                navigator={navigator}
                dataStore={this.state.dataStore}
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
