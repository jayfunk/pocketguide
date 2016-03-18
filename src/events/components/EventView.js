import React from 'react-native'
import {GENERAL_FONT, CONTENT_BACKGROUND, BORDER} from '../../styles/ColorConstants'
const {
  View,
  Text
} = React

const styles = {
  backgroundColor: CONTENT_BACKGROUND,
  borderWidth: 0,
  borderBottomWidth: 2,
  borderBottomColor: BORDER,
  height: 60,
  flex: 1
}

const textStyle = {
  color: GENERAL_FONT
}

export default EventView = React.createClass({
  propTypes: {
    event: React.PropTypes.object
  },

  render: function () {
    return <View style={styles}>
      <Text style={textStyle}>
        <Text>
          {this.props.event.name}
        </Text>
        <Text>
          {this.props.event.startTime}
        </Text>
        <Text>
          {this.props.event.endTime}
        </Text>
        <Text>
          {this.props.event.location}
        </Text>
        <Text>
          {this.props.event.description}
        </Text>
        <Text>
          {this.props.event.isAllDay}
        </Text>
        <Text>
          {this.props.event.days}
        </Text>
      </Text>
    </View>
  }
})
