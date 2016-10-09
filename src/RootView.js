import React, {PropTypes} from 'react'
import {View, Navigator, BackAndroid, StyleSheet} from 'react-native'
import {loadData} from './actionCreators'
import {connect} from 'react-redux'
import appRoutes from './appRoutes'
import NavBar from './nav/NavBar'
import TabBar from './tabs/TabBar'
import {NAV_BAR_SIZE} from './styles/StyleConstants'
import {CONTENT_BACKGROUND} from './styles/ColorConstants'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: CONTENT_BACKGROUND
  },
  routeView: {
    marginTop: NAV_BAR_SIZE
  }
})

const RootView = React.createClass({
  propTypes: {
    loadData: PropTypes.func.isRequired,
    changeActiveTab: PropTypes.func.isRequired
  },

  componentWillMount () {
    this.props.loadData()
  },

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop()
        return true
      }
      return false
    })
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
                {...route.props}
              />
            }
          }}
          navigationBar = {<NavBar/>}
          onDidFocus={this._setTabState}
        />
        <TabBar
          ref='tabBar'
          onTabChange={this.onTabChange}
        />
      </View>
    )
  },

  _setTabState (route) {
    this.props.changeActiveTab(route.name)
  },

  onTabChange (route) {
    const [first, second, third] = this.navigator.getCurrentRoutes()
    if (first && second && third && first.name === 'Events' && second.name === 'Event' && third.name === 'Map') {
      this.navigator.pop()
    } else {
      this.navigator.resetTo(route)
    }
  },

  _storeNavigatorInstance (navigator) {
    this.navigator = navigator
  }
})

function mapDispatchToProps (dispatch, props) {
  return {
    loadData: () => {
      dispatch(loadData())
    },
    changeActiveTab: (name) => {
      dispatch({
        type: 'tabs:active:update',
        activeTab: name
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(RootView)
