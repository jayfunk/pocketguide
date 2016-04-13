import React from 'react-native'
import {GENERAL_FONT, BORDER} from '../../styles/ColorConstants'

const {
  View,
  ListView,
  Text,
  TouchableOpacity
} = React

const styles = {
  eventView: {
    paddingLeft: 5,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: BORDER,
    height: 80,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventText: {
    color: GENERAL_FONT,
    fontWeight: 'bold',
    flex: 1
  },

  descriptionText: {
    color: GENERAL_FONT,
    flex: 2
  }
}

export default React.createClass({
  propTypes: {
    events: React.PropTypes.array,
    onEventPress: React.PropTypes.func
  },

  render () {
    return (
      <ListView
        dataSource={this._createDataSource()}
        renderRow={this._renderRow}
      />
    )
  },

  _createDataSource () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return ds.cloneWithRows(this._getRows(this.props.events))
  },

  _getRows (events) {
    return events.map(event => {
      return [event.name, event.shortDescription]
    })
  },

  _renderRow (rowData, sectionId, rowId) {
    return <TouchableOpacity
      onPress = {() => this._handleEventPress(rowId)}>
      <View style={styles.eventView}>
        <Text style={styles.eventText}>
          {rowData[0]}
        </Text>
        <Text style={styles.descriptionText}>
          {rowData[1]}
        </Text>
      </View>
    </TouchableOpacity>
  },

  _handleEventPress (rowId) {
    return this.props.onEventPress(this.props.events[rowId])
  }
})
