import React, {
  StyleSheet,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import Mapbox from 'react-native-mapbox-gl'

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

const MapView = React.createClass({
  mixins: [Mapbox.Mixin],

  propTypes: {
    center: PropTypes.object.isRequired,
    selectedEvent: PropTypes.object,
    filter: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    annotations: PropTypes.array.isRequired,
    staticAnnotations: PropTypes.array.isRequired,
    zoomLevel: PropTypes.number.isRequired,
    openAnnotation: PropTypes.func.isRequired
  },

  render () {
    return (
      <Mapbox
        ref={mapRef}
        style={styles.container}
        styleURL={this.mapStyles.satellite}
        zoomLevel={this.props.zoomLevel}
        direction={0}
        accessToken={'pk.eyJ1IjoiY2hlZjA5OCIsImEiOiJjaWtwcjlocDQxMzZzdXhrbXE5NXp3bmViIn0.F9CMetNmIS4woy5gK1O3Ug'}
        annotations={this._getDisplayAnnotations()}
        zoomEnabled
        logoIsHidden
        rotateEnabled
        centerCoordinate={this.props.center}
        userTrackingMode={this.userTrackingMode.none}
        showsUserLocation
        attributionButtonIsHidden={false}
        onOpenAnnotation={this.props.openAnnotation}
      />
    )
  },

  _getDisplayAnnotations () {
    let eventAnnotations = []
    if (this.props.selectedEvent) {
      const filteredEventAnnotations = this._filterEventAnnotations()
      return filteredEventAnnotations
    }

    if (this.props.filter.showAnnotations) {
      eventAnnotations = eventAnnotations.concat(this.props.annotations)
    }

    if (this.props.filter.showStaticAnnotations) {
      eventAnnotations = eventAnnotations.concat(this.props.staticAnnotations)
    }
    return eventAnnotations
  },

  _filterEventAnnotations () {
    const foundEventAnnotation = this.props.annotations.find(event => {
      return event.id === this.props.selectedEvent.id
    })
    return [foundEventAnnotation]
  }
})

function mapStateToProps (state) {
  return state.map
}

function mapDispatchToProps (dispatch) {
  return {
    openAnnotation: ({src}) => {
      dispatch({
        type: 'map:annotation:selected',
        selectedAnnotation: src
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView)
