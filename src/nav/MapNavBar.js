import styles from '../styles/NavBarStyles'
import {MAP_THEME} from '../styles/ColorConstants'
import React from 'react-native'
const {
  View,
  Text
} = React

const background = {
  backgroundColor: MAP_THEME
}

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
  },

  render () {
    return (
      <View
        style={[styles.navbar, background]}
      >
        <View style={[styles.corner, styles.alignLeft]}>
          <Text style={styles.navbarText}>Map</Text>
        </View>
        <View style={[styles.corner, styles.alignRight]}>
          <Text style={styles.navbarText}>Buttons</Text>
        </View>
      </View>
    )
  }
})
