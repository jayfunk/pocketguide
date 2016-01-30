import React from 'react-native'
const {
  StyleSheet,
  TouchableOpacity,
  Text,
  Navigator
} = React

const styles = StyleSheet.create({
  navBar: {
  }
})

export default Nav = React.createClass({
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

      const previousRoute = navState.routeStack[index - 1]

      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
        >
          <Text>
            {previousRoute.name}
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
      <Navigator.NavigationBar
        style={styles.navBar}
        navigator={this.props.navigator}
        routeMapper={this.routeMapper}
        navState={this.props.navState}
      />
    )
  }
})
