import React, {PropTypes} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import NavSearchButton from './NavSearchButton'
import {EVENTS_THEME} from '../styles/ColorConstants'
import styles from '../styles/NavBarStyles'

const background = {
  backgroundColor: EVENTS_THEME
}

const EventsNavBar = React.createClass({
  propTypes: {
    navigator: PropTypes.object,
    showEventDetail: PropTypes.bool.isRequired,
    hideEventDetail: PropTypes.func.isRequired
  },

  render () {
    return (
      <View
        style={[styles.navbar, background]}
      >
        <View style={[styles.corner, styles.alignLeft]}>
          {this._renderLeftSide()}
        </View>
        <View style={[styles.corner, styles.alignRight]}>
          {this._renderSearchButton()}
        </View>
      </View>
    )
  },

  _renderLeftSide () {
    if (!this.props.showEventDetail) {
      return (
        <Text style={styles.navbarText}>
          Events
        </Text>
      )
    }

    return (
      <TouchableOpacity
        onPress={this.props.hideEventDetail}
      >
        <Text style={styles.navbarText}>
          Back
        </Text>
      </TouchableOpacity>
    )
  },

  _renderSearchButton () {
    if (this.props.showEventDetail) return <View/>
    return <NavSearchButton/>
  }
})

function mapStateToProps (state, ownProps) {
  return {
    showEventDetail: !!state.events.selectedEvent
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    hideEventDetail: () => {
      ownProps.navigator.pop()
      dispatch({
        type: 'event:selected',
        selectedEvent: null
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsNavBar)
