import React, {
  View,
  Text,
  TouchableOpacity,
  PropTypes
} from 'react-native'
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
    showEventDetail: PropTypes.bool.isRequired
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
        onPress={() => this.props.navigator.pop()}
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
    showEventDetail: state.events.showEventDetail
  }
}

export default connect(mapStateToProps)(EventsNavBar)
