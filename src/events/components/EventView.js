import React from 'react-native'
import styles from '../../styles/EventViewStyles'
import {GENERAL_FONT} from '../../styles/ColorConstants'
const {
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight
} = React

export default React.createClass({
  propTypes: {
    event: React.PropTypes.object
  },

  render: function () {
    return (
      <ScrollView>
        <Image style={styles.logoImage} resizeMode={'stretch'} source={require('../../../images/Logo.png')}/>
        <View style={styles.eventNameDesc}>
          <Text style={styles.eventName}>
            {this.props.event.name}
          </Text>
          <Text style={styles.eventDesc}>
            {this.props.event.description}
          </Text>
        </View>
        <Text style={styles.times}>
          {this.props.event.startTime}
          <Text> - </Text>
          {this.props.event.endTime}
        </Text>
        <TouchableHighlight style={styles.locateButton} underlayColor={GENERAL_FONT} onPress={this._handleLocatePress}>
            <Image source={require('../../../images/events/Locate_Button.png')}/>
        </TouchableHighlight>
        <Text style={styles.locateText}>LOCATE</Text>
      </ScrollView>
    )
  },

  _handleLocatePress () {
    return this.props.event.location
  }
})
