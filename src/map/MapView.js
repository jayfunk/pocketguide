import React from 'react-native'
import Mapbox from 'react-native-mapbox-gl'
import annotationsMapData from '../data/staticData/annotationsMapData.json'

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

  getInitialState () {
    return {
      center: {
        latitude: 33.378,
        longitude: -83.34
      },
      zoomLevel: 14,
      infrastructureAnnotations: annotationsMapData,
      eventAnnotations: this._buildEventAnnotations()
    }
  },

  onOpenAnnotation (annotation) {
    this.setState({
      drawerInfo: annotation.src
    })
  },

  render () {
    const annotations = this._getDisplayAnnotations()

    return (
      <Mapbox
        ref={mapRef}
        style={styles.container}
        styleURL={this.mapStyles.satellite}
        zoomLevel={this.state.zoomLevel}
        direction={45}
        accessToken={'pk.eyJ1IjoiY2hlZjA5OCIsImEiOiJjaWtwcjlocDQxMzZzdXhrbXE5NXp3bmViIn0.F9CMetNmIS4woy5gK1O3Ug'}
        annotations={annotations}
        zoomEnabled
        logoIsHidden
        rotateEnabled
        centerCoordinate={this.state.center}
        userTrackingMode={this.userTrackingMode.none}
        onOpenAnnotation={this.onOpenAnnotation}
        showsUserLocation
        attributionButtonIsHidden={false}
      />
    )
  },

  _getDisplayAnnotations () {
    if (this.props.selectedEvent) {
      const filteredEventAnnotations = this._filterEventAnnotations()
      return filteredEventAnnotations
    }
    return this.state.infrastructureAnnotations.concat(this.state.eventAnnotations)
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
        subtitle: ''
      }
    })
  }
})
