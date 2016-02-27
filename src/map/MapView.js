import React from 'react-native'
import Mapbox from 'react-native-mapbox-gl'
import annotationsMapData from '../data/annotationsMapData.json'

const {
  StyleSheet,
  View,
  Text
} = React

const mapRef = 'map'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MapView = React.createClass({
  mixins: [Mapbox.Mixin],

  getInitialState () {
    return {
      center: {
        latitude: 33.378,
        longitude: -83.34
      },
      zoomLevel: 14,
      annotations: annotationsMapData
    }
  },

  onOpenAnnotation (annotation) {
    console.log(annotation)
  },

  render () {
    return (
      <View style={styles.container}>
        <Mapbox
          ref={mapRef}
          style={styles.container}
          styleUrl={this.mapStyles.satellite}
          zoomLevel={this.state.zoomLevel}
          direction={45}
          accessToken={'pk.eyJ1IjoiY2hlZjA5OCIsImEiOiJjaWtwcjlocDQxMzZzdXhrbXE5NXp3bmViIn0.F9CMetNmIS4woy5gK1O3Ug'}
          annotations={this.state.annotations}
          zoomEnabled={true}
          logoIsHidden={true}
          rotateEnabled={true}
          centerCoordinate={this.state.center}
          userTrackingMode={this.userTrackingMode.none}
          onOpenAnnotation={this.onOpenAnnotation}
          showsUserLocation={true}
          attributionButtonIsHidden={true}
        />
      </View>
    )
  }
})
