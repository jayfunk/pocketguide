import React from 'react-native'
import styles from '../styles/NavBar'

const {
  Image,
  TextInput,
  TouchableOpacity
} = React

const textInput = {
  width: 200,
  margin: 5,
  height: 50,
  textAlign: 'left'
}

export default NavSearchButton = React.createClass({
  contextTypes: {
    events: React.PropTypes.object
  },

  getInitialState () {
    return {
      isShowingSearchBar: false
    }
  },

  render () {
    if (this.state.isShowingSearchBar) return this._renderSearchInput()

    return (
      <TouchableOpacity
        onPress={this.onSearchPress}
      >
        <Image resizeMode='contain' source={require('../../images/events/Search_Button_Inactive.png')}/>
      </TouchableOpacity>
    )
  },

  _renderSearchInput () {
    return (
      <TextInput
        style={[styles.navbarText, textInput]}
        autoCorrect
        autoFocus
        onFocus={this._clearSearchTerm}
        onBlur={this._resetSearchButton}
        placeholder={'Search'}
        onChangeText={this._handleSearchInput}
      />
    )
  },

  _clearSearchTerm () {
    this.context.events.emit('event:search', {
      searchTerm: null
    })
  },

  _resetSearchButton () {
    this.setState({
      isShowingSearchBar: false
    })
  },

  _handleSearchInput (searchTerm) {
    this.context.events.emit('event:search', {
      searchTerm
    })
  },

  onSearchPress () {
    this.setState({
      isShowingSearchBar: !this.state.isShowingSearchBar
    })
  }
})
