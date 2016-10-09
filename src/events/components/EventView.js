import React, {PropTypes} from 'react'
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import styles from '../../styles/EventViewStyles'
import {GENERAL_FONT} from '../../styles/ColorConstants'
import {createRoute} from '../../appRoutes'

const EventView = React.createClass({
  propTypes: {
    navigator: PropTypes.object.isRequired,
    event: PropTypes.object.isRequired,
    handleLocatePress: PropTypes.func.isRequired
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
    if (!this.props.event.hasCoordinates) return

    return (
      <View>
        <TouchableHighlight style={styles.locateButton} underlayColor={GENERAL_FONT} onPress={this.props.handleLocatePress}>
            <Image source={require('../../../images/events/Locate_Button.png')}/>
        </TouchableHighlight>
        <Text style={styles.locateText}>LOCATE</Text>
      </View>
    )
  }
})

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleLocatePress: () => {
      const mapRoute = createRoute('map', { selectedEvent: ownProps.event })
      ownProps.navigator.push(mapRoute)
      dispatch({
        type: 'map:event:selected',
        selectedEvent: ownProps.event
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(EventView)
