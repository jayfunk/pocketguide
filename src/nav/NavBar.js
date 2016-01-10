import NavButton from './NavButton'
import appRoutes from './appRoutes'
import React from 'react-native'
const {
  View
} = React

export default NavBar = React.createClass({
  propTypes: {
    navigator: React.PropTypes.object
  },

  render: function () {
    return <View>
      <NavButton
        onPress = {() => this.props.navigator.push(appRoutes.events)}
        title = {appRoutes.events.name}
      />
      <NavButton
        onPress = {() => this.props.navigator.push(appRoutes.map)}
        title = {appRoutes.map.name}
      />
      <NavButton
        onPress = {() => this.props.navigator.push(appRoutes.volunteer)}
        title = {appRoutes.volunteer.name}
      />
    </View>
  }
})
