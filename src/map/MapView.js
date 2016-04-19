import React from 'react-native'
import Mapbox from 'react-native-mapbox-gl'
import staticAnnotations from '../data/staticData/staticMapAnnotations'

const {
  StyleSheet
} = React

const mapRef = 'map'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0
  },
  map: {
    flex: 2
  },
  drawer: {
    flex: 0.1
  }
})

export default React.createClass({
  mixins: [Mapbox.Mixin],

  propTypes: {
    selectedEvent: React.PropTypes.object,
    dataStore: React.PropTypes.object
  },

  contextTypes: {
    eventChannel: React.PropTypes.object
  },

  componentWillMount () {
    this.context.eventChannel.addListener('maps:toggle:filters', this._updateFilters)
  },

  componentWillUmount () {
    this.context.eventChannel.removeListener('maps:toggle:filters', this._updateFilters)
  },

  getInitialState () {
    return {
      center: {
        latitude: 33.378917,
        longitude: -83.337274
      },
      zoomLevel: 15,
      infrastructureAnnotations: staticAnnotations,
      eventAnnotations: this._buildEventAnnotations(),
      isEventsActive: true,
      isOpsActive: true
    }
  },

  render () {
    const annotations = this._getDisplayAnnotations()

    return (
      <Mapbox
        ref={mapRef}
        style={styles.container}
        styleURL={this.mapStyles.satellite}
        zoomLevel={this.state.zoomLevel}
        direction={0}
        accessToken={'pk.eyJ1IjoiY2hlZjA5OCIsImEiOiJjaWtwcjlocDQxMzZzdXhrbXE5NXp3bmViIn0.F9CMetNmIS4woy5gK1O3Ug'}
        annotations={annotations}
        zoomEnabled
        logoIsHidden
        rotateEnabled
        centerCoordinate={this.state.center}
        userTrackingMode={this.userTrackingMode.none}
        showsUserLocation
        attributionButtonIsHidden={false}
      />
    )
  },

  _updateFilters (updatedState) {
    this.setState(updatedState)
  },

  _getDisplayAnnotations () {
    let eventAnnotations = []
    if (this.props.selectedEvent) {
      const filteredEventAnnotations = this._filterEventAnnotations()
      return filteredEventAnnotations
    }
    if (this.state.isEventsActive) {
      eventAnnotations = eventAnnotations.concat(this.state.eventAnnotations)
    }
    if (this.state.isOpsActive) {
      eventAnnotations = eventAnnotations.concat(this.state.infrastructureAnnotations)
    }
    return eventAnnotations
  },

  _filterEventAnnotations () {
    const foundEventAnnotation = this.state.eventAnnotations.find(event => {
      return event.id === this.props.selectedEvent.id
    })
    return [foundEventAnnotation]
  },

  _buildEventAnnotations () {
    const {events} = this.props.dataStore.getAll()
    return events.filter(event => {
      return event && event.hasCoordinates()
    }).map(event => {
      return {
        id: event.id,
        coordinates: event.coordinates,
        type: 'point',
        title: event.name,
        annotationImage: {
          url: 'image!pin',
          width: 30,
          height: 70
        }
      }
    })
  }
})
