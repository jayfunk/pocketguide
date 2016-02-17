import React from 'react-native'
const {
  Text,
  TextInput,
  TouchableOpacity
} = React

const navbarText = {
  color: 'white',
  fontSize: 17,
  margin: 10,
  fontWeight: '600',
  textAlign: 'center',
  alignItems: 'center'
}

const navbarTextInput = {
  flex: 1,
  margin: 5,
  color: 'black',
  textAlign: 'left',
  backgroundColor: 'white'
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

    return <TouchableOpacity
      style={this.props.styles}
      onPress={this.onSearchPress}
    >
      <Text style={navbarText}>
        Search
      </Text>
    </TouchableOpacity>
  },

  _renderSearchInput () {
    return <TextInput
      style={[navbarText, navbarTextInput]}
      autoCorrect
      autoFocus
      onFocus={this._clearSearchTerm}
      onBlur={this._resetSearchButton}
      placeholder={'Search'}
      placeholderTextColor={'#e6e6e6'}
      onChangeText={this._handleSearchInput}
    />
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
