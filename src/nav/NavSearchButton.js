import React, {PropTypes} from 'react'
import {Image, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import styles from '../styles/NavBarStyles'

const textInput = {
  width: 200,
  margin: 5,
  height: 50,
  textAlign: 'left'
}

const image = {
  marginRight: 10
}

const NavSearchButton = React.createClass({
  propTypes: {
    search: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired
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
        style={image}
        onPress={this.onSearchPress}
      >
        <Image source={require('../../images/events/Search_Button_Inactive.png')}/>
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
    this.props.clearSearch()
  },

  _resetSearchButton () {
    this.setState({
      isShowingSearchBar: false
    })
  },

  _handleSearchInput (searchTerm) {
    this.props.search(searchTerm)
  },

  onSearchPress () {
    this.setState({
      isShowingSearchBar: !this.state.isShowingSearchBar
    })
  }
})

function mapDispatchToProps (dispatch, props) {
  return {
    search: (filter) => {
      dispatch({
        type: 'events:filter',
        filter
      })
    },
    clearSearch: () => {
      dispatch({
        type: 'events:filter',
        filter: null
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(NavSearchButton)
