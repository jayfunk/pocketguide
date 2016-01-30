import NavSearchButton from './NavSearchButton'
import React from 'react-native'
const {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} = React

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 44, // Default iOS navbar height
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5589B7'
  },
  navbarText: {
    color: 'white',
    fontSize: 17,
    margin: 10,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center'
  },
  corner: {
    flex: 1,
    justifyContent: 'center'
  },

  alignLeft: {
    alignItems: 'flex-start'
  },
  alignRight: {
    alignItems: 'flex-end'
  }
})

export default NavBar = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    navState: React.PropTypes.object
  },

  routeMapper: {
    RightButton () {
      return null
    },

    LeftButton (route, navigator, index, navState) {
      if (index === 0) {
        return null
      }
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
        >
          <Text>
            Back
          </Text>
        </TouchableOpacity>
      )
    },

    Title (route, navigator, index, navState) {
      return (
        <Text>
          {route.name}
        </Text>
      )
    }
  },

  render () {
    return (
      <View
        style={styles.navBar}
      >
        {this._renderBackButton()}

        {<NavSearchButton
          styles={[styles.corner, styles.alignRight]}
        />}
      </View>
    )
  },

  _renderBackButton () {
    if (this.props.navigator.getCurrentRoutes().length <= 1) {
      return <View
        style={[styles.corner, styles.alignLeft]}
      />
    }

    return <TouchableOpacity
      style={[styles.corner, styles.alignLeft]}
      onPress={() => this.props.navigator.pop()}
    >
      <Text style={styles.navbarText}>
        Back
      </Text>
    </TouchableOpacity>
  }
})
