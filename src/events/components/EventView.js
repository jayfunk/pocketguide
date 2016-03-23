import React from 'react-native'
import {GENERAL_FONT, CONTENT_BACKGROUND, BORDER} from '../../styles/ColorConstants'
const {
  View,
  Text,
  Image,
  TouchableHighlight
} = React

const container = {
  backgroundColor: CONTENT_BACKGROUND,
  flex: 1
}

const textStyle = {
  color: GENERAL_FONT
}

const content = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 50
}

const eventName = {
  flex: 1,
  alignSelf: 'flex-start'
}

const eventDescription = {
  flex: 2
}

const imageContainer = {
  marginTop: 50,
  alignItems: 'center'
}

const headerImageContainer = {
  height: 100,
  width: 100
}

const imageThing = {
  height: 100,
  width: 100
}

const locateText = {
  marginTop: 10
}

export default EventView = React.createClass({
  propTypes: {
    event: React.PropTypes.object
  },

  render: function () {
    return (
      <View style={container}>
        <View style={headerImageContainer}>
          <Image style={imageThing} resizeMode={'contain'} source={require('../../../images/Logo.png')}/>
        </View>
        <View style={content}>
          <Text style={[eventName, textStyle]}>
            {this.props.event.name}
          </Text>
          <Text style={[eventDescription, textStyle]}>
            {this.props.event.description}
          </Text>
        </View>
        <Text style={[textStyle, {textAlign: 'center'}]}>
          {this.props.event.startTime}
          {this.props.event.endTime}
        </Text>
        <TouchableHighlight underlayColor={GENERAL_FONT} onPress={this._handleLocatePress}>
          <View style={imageContainer}>
            <Image source={require('../../../images/events/Locate_Button.png')}/>
            <Text style={[textStyle, locateText]}>LOCATE</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  },

  _handleLocatePress () {
    return this.props.event.location
  }
})
