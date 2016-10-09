import React, {PropTypes} from 'react'
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Mapbox, {MapView} from 'react-native-mapbox-gl'

const mapBoxAccessToken = 'pk.eyJ1IjoiY2hlZjA5OCIsImEiOiJjaWtwcjlocDQxMzZzdXhrbXE5NXp3bmViIn0.F9CMetNmIS4woy5gK1O3Ug'

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

const MapsView = React.createClass({
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

  componentWillMount () {
    Mapbox.setAccessToken(mapBoxAccessToken)
  },

  render () {
    return (
      <MapView
        ref={map => this._map = map}
        initialZoomLevel={this.props.zoomLevel}
        initialCenterCoordinate={this.props.center}
        style={styles.container}
        styleURL={Mapbox.mapStyles.satellite}
        annotations={this._getDisplayAnnotations()}
        showsUserLocation
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
    if (foundEventAnnotation) {
      return [foundEventAnnotation]
    }
    return []
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

export default connect(mapStateToProps, mapDispatchToProps)(MapsView)
