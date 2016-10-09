import React, {PropTypes} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import TabButton from './TabButton'
import appRoutes from '../appRoutes'
import {TAB_BACKGROUND} from '../styles/ColorConstants'
import guid from 'guid'

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: TAB_BACKGROUND
  }
})

const TabBar = React.createClass({
  propTypes: {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
  },

  render () {
    return <View style={[styles.tabs]}>
      {this._renderTabButtons()}
    </View>
  },

  _renderTabButtons () {
    return [appRoutes.events, appRoutes.map, appRoutes.principles].map((route, index) => {
      const isActiveTab = route.name === this.props.activeTab ||
        (route.name === 'Events' && this.props.activeTab === 'Event')
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

  _handleOnPress (route) {
    if (this.props.activeTab !== route.name) {
      this.props.onTabChange(route)
    }
  }
})

function mapStateToProps (state, ownProps) {
  return state.tabs
}

export default connect(mapStateToProps)(TabBar)
