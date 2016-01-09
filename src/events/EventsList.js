import React from 'react-native'
const {
  Text,
  View,
  ListView
} = React

export default EventsList = React.createClass({
  propTypes: {
    events: React.PropTypes.array
  },

  render: function () {
    return (
      <ListView
        dataSource={this._createDataSource()}
        renderRow={this._renderRow}
      />
    )
  },

  _createDataSource: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return ds.cloneWithRows(this._getRows(this.props.events))
  },

  _getRows: function (events) {
    return events.map(event => {
      return [event.name]
    })
  },

  _renderRow: function (rowData) {
    return <View ><Text>{rowData[0]}</Text></View>
  }
})
