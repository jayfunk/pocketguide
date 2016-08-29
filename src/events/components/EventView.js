import React from 'react-native'
import styles from '../../styles/EventViewStyles'
import {GENERAL_FONT} from '../../styles/ColorConstants'
import { createRoute } from '../../appRoutes'

const {
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight
} = React

export default React.createClass({
  propTypes: {
    event: React.PropTypes.object,
    navigator: React.PropTypes.object
  },

  render: function () {
    return (
      <ScrollView>
        <Image style={styles.logoImage} resizeMode={'stretch'} source={require('../../../images/Logo.png')}/>
        <Text style={styles.eventName}>
          {this.props.event.name}
        </Text>
        <Text style={styles.eventDesc}>
          {this.props.event.description}
        </Text>
        <Text style={styles.times}>
          {this.props.event.dateOfEvent}
          <Text> - </Text>
          {this.props.event.startTime}
          <Text> - </Text>
          {this.props.event.endTime}
        </Text>
        {this._renderHostingThemeCamp()}
        <Text style={styles.locateText}>
          Intended Ages: {this.props.event.intendedAges}
        </Text>
        <Text style={styles.locateText}>
          Location: {this.props.event.location}
        </Text>
        {this._renderLocateButton()}
      </ScrollView>
    )
  },

  _renderHostingThemeCamp () {
    if (this.props.event.themeCampName) {
      return (
        <Text style={styles.locateText}>
          Hosting Theme Camp: {this.props.event.themeCampName}
        </Text>
      )
    }
    return null
  },

  _renderLocateButton () {
    if (!this.props.event.hasCoordinates()) return

    return (
      <View>
        <TouchableHighlight style={styles.locateButton} underlayColor={GENERAL_FONT} onPress={this._handleLocatePress}>
            <Image source={require('../../../images/events/Locate_Button.png')}/>
        </TouchableHighlight>
        <Text style={styles.locateText}>LOCATE</Text>
      </View>
    )
  },

  _handleLocatePress () {
    const mapRoute = createRoute('map', { selectedEvent: this.props.event })
    this.props.navigator.push(mapRoute)
  }
})
