import React from 'react-native'
import {GENERAL_FONT, CONTENT_BACKGROUND, BORDER} from '../../styles/ColorConstants'

const {
  View,
  ListView,
  Text,
  TouchableOpacity
} = React

const styles = {
  eventView: {
    backgroundColor: CONTENT_BACKGROUND,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: BORDER,
    height: 60
  },
  eventText: {
    color: GENERAL_FONT
  }
}

export default EventsView = React.createClass({
  propTypes: {
    events: React.PropTypes.array,
    onEventPress: React.PropTypes.func
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

  _renderRow: function (rowData, sectionId, rowId) {
    return <TouchableOpacity
      onPress = {() => this._handleEventPress(rowId)} >
      <View style={styles.eventView}>
        <Text style={styles.eventText}>
          {rowData[0]}
        </Text>
        <Text style={styles.eventText}>
          {rowData[1]}
        </Text>
      </View>
    </TouchableOpacity>
  },

  _handleEventPress: function (rowId) {
    return this.props.onEventPress(this.props.events[rowId])
  }
})
