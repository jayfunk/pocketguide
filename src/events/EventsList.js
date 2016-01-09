import React from 'react-native';
const {
  StyleSheet,
  ListView,
  Text,
  View
} = React;

export default class EventsList extends React.Component {
  //At this layer we should be performing the IO or fetching to get the data from the server instead of using static data from the disk.
  //Following a fetch we need to store that data locally and perform checks with the server.

  render() {
    return (
      <ListView
        dataSource={this._createDataSource()}
        renderRow={this._renderRow}
      />
    );
  }

  _createDataSource() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.props.events
    return ds.cloneWithRows(this._getRows(this.props.events));
  }

  _getRows(events) {
    return events.map(event => {
      return [event.name]
    });
  }

  _renderRow(rowData) {
    return <View ><Text>{rowData[0]}</Text></View>
  }
};