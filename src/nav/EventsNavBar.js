import NavSearchButton from './NavSearchButton'
import React from 'react-native'
const {
  Text,
  TouchableOpacity
} = React

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    styles: React.PropTypes.object
  },

  render () {
    if (this._isEventDetail()) {
      return this._renderBackButton()
    }
    return this._renderSearchButton()
  },

  _isEventDetail () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return this._isEvents() && currentRoutes.length === 2
  },

  _renderBackButton () {
    if (!this._isEventDetail()) return null

    return (
      <TouchableOpacity
        style={[this.props.styles.corner, this.props.styles.alignLeft]}
        onPress={() => this.props.navigator.pop()}
      >
        <Text style={this.props.styles.navbarText}>
          Back
        </Text>
      </TouchableOpacity>
    )
  },

  _isEvents () {
    const currentRoutes = this.props.navigator.getCurrentRoutes()
    return currentRoutes[0].name === 'Events'
  },

  _renderSearchButton () {
    if (!this._isEvents()) return null

    return (
      <NavSearchButton
        styles={[this.props.styles.corner, this.props.styles.alignRight]}
      />
    )
  }
})
