import styles from '../styles/NavBar'
import {PRINCIPLES_THEME} from '../styles/ColorConstants'
import React from 'react-native'
const {
  View,
  Text
} = React

const background = {
  backgroundColor: PRINCIPLES_THEME
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
          <Text style={styles.navbarText}>Principles</Text>
        </View>
        <View style={[styles.corner, styles.alignRight]}>
        </View>
      </View>
    )
  }
})
