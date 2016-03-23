import React from 'react-native'
import {GENERAL_FONT, NAV_BAR_ACTIVE_SEARCH_BACKGROUND} from '../styles/ColorConstants'

const {
  View,
  Image,
  TextInput,
  TouchableOpacity
} = React

const searchImage = {
  margin: 10,
  alignItems: 'center'
}

const navbarTextInput = {
  color: GENERAL_FONT,
  textAlign: 'left',
  backgroundColor: NAV_BAR_ACTIVE_SEARCH_BACKGROUND
}

export default NavSearchButton = React.createClass({
  propTypes: {
    styles: React.PropTypes.array
  },

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
        style={this.props.styles}
        onPress={this.onSearchPress}
      >
        <Image resizeMode='contain' style={searchImage} source={require('../../images/events/Search_Button_Inactive.png')}/>
      </TouchableOpacity>
    )
  },

  _renderSearchInput () {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={navbarTextInput}
          autoCorrect
          autoFocus
          onFocus={this._clearSearchTerm}
          onBlur={this._resetSearchButton}
          placeholder={'Search'}
          onChangeText={this._handleSearchInput}
        />
      </View>
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
