import React from 'react-native'
const {
  Text,
  TouchableOpacity,
  StyleSheet
} = React



export default NavSearchButton = React.createClass({
  propTypes: {
    styles: React.PropTypes.array
  },

  getInitialState () {
    return {
      isShowingSearchBar: false
    }
  },

  render () {
    const navBarText = {
      color: 'white',
      fontSize: 17,
      margin: 10,
      fontWeight: '600',
      textAlign: 'center',
      alignItems: 'center'
    }

    return <TouchableOpacity
      style={this.props.styles}
      onPress={() => this.setState({ isShowingSearchBar: !this.state.isShowingSearchBar })}
    >
      <Text style={navBarText}>
        Search
      </Text>
    </TouchableOpacity>
  }
})
