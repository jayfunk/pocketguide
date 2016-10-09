import React, {PropTypes} from 'react'
import {View, Text} from 'react-native'
import styles from '../styles/NavBarStyles'
import {PRINCIPLES_THEME} from '../styles/ColorConstants'

const background = {
  backgroundColor: PRINCIPLES_THEME
}

export default React.createClass({
  propTypes: {
    navigator: PropTypes.object
  },

  render () {
    return (
      <View
        style={[styles.navbar, background]}
      >
        <View style={[styles.corner, styles.alignLeft]}>
          <Text style={styles.navbarText}>Principles</Text>
        </View>
        <View style={[styles.corner, styles.alignRight]}/>
      </View>
    )
  }
})
