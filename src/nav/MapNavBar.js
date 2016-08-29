import React, {
  PropTypes,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import {connect} from 'react-redux'
import styles from '../styles/NavBarStyles'
import {MAP_THEME} from '../styles/ColorConstants'

const background = {
  backgroundColor: MAP_THEME
}

const MapNavBar = React.createClass({
  propTypes: {
    navigator: PropTypes.object,
    toggleShowAnnotations: PropTypes.func.isRequired,
    showAnnotations: PropTypes.bool.isRequired,
    toggleShowStaticAnnotations: PropTypes.func.isRequired,
    showStaticAnnotations: PropTypes.bool.isRequired
  },

  render () {
    return (
      <View
        style={[styles.navbar, background]}
      >
        <View style={[styles.corner, styles.alignLeft, styles.title]}>
          <Text style={styles.navbarText}>Map</Text>
        </View>
        <View style={[styles.corner, styles.alignRight]}>
          <TouchableOpacity
            onPress={this.props.toggleShowAnnotations}
          >
            {this._renderEventsIcon()}
          </TouchableOpacity>
        </View>
        <View style={[styles.corner, styles.alignRight, styles.navBarButtons]}>
          <TouchableOpacity
            onPress={this.props.showStaticAnnotations}
          >
            {this._renderOpsIcon()}
          </TouchableOpacity>
        </View>
      </View>
    )
  },

  _renderEventsIcon () {
    if (this.props.showAnnotations) {
      return <Image source={require('../../images/map/Events_Button_Active.png')}/>
    }
    return <Image source={require('../../images/map/Events_Button_Inactive.png')}/>
  },

  _renderOpsIcon () {
    if (this.props.showStaticAnnotations) {
      return <Image source={require('../../images/map/Ops_Button_Active.png')}/>
    }
    return <Image source={require('../../images/map/Ops_Button_Inactive.png')}/>
  }
})

function mapStateToProps (state, ownProps) {
  return {
    showAnnotations: state.map.filter.showAnnotations,
    showStaticAnnotations: state.map.filter.showStaticAnnotations
  }
}

function mapDispatchToProps (dispatch, props) {
  return {
    toggleShowAnnotations: () => {
      dispatch({
        type: 'map:filter:update',
        filter: {
          showStaticAnnotations: props.showStaticAnnotations,
          showAnnotations: !props.showAnnotations
        }
      })
    },
    toggleShowStaticAnnotations: () => {
      dispatch({
        type: 'map:filter:update',
        filter: {
          showAnnotations: props.showAnnotations,
          showStaticAnnotations: !props.showStaticAnnotations
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapNavBar)

