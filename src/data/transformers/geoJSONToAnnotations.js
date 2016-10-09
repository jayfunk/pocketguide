var uuid = require('node-uuid')

function geoJSONToAnnotations (geoJSON) {
  if (!geoJSON || !geoJSON.features) throw new Error('Invalid GeoJSON data.')
  return geoJSON.features.map(function (feature) {
    return convert(feature)
  })
}

function convert (feature) {
  switch (feature.geometry.type.toLowerCase()) {
    case 'point': return convertPoint(feature)
    case 'linestring': return convertLineString(feature)
    case 'polygon': return convertPolygon(feature)
  }
}

function convertPoint (feature) {
  var properties = feature.properties
  return {
    id: feature.id ? feature.id : uuid.v4(),
    coordinates: convertCoordinate(feature.geometry.coordinates),
    type: 'point',
    title: properties.name,
    subtitle: properties.description,
    annotationImage: {
      source: {uri: 'pin'},
      height: 70,
      width: 30
    }
  }
}

function convertCoordinate (coordinate) {
  return coordinate.slice(0, -1).reverse()
}

function convertLineString (feature) {
  var properties = feature.properties
  return {
    id: feature.id ? feature.id : uuid.v4(),
    coordinates: convertLineStringCoordinates(feature),
    type: 'polyline',
    title: properties.title,
    subtitle: properties.description,
    strokeColor: '#000000',
    strokeWidth: 5,
    strokeAlpha: 0.5
  }
}

function convertLineStringCoordinates (feature) {
  return feature.geometry.coordinates.map(function (coordinate) {
    return convertCoordinate(coordinate)
  })
}

function convertPolygon (feature) {
  var properties = feature.properties
  return {
    id: feature.id ? feature.id : uuid.v4(),
    coordinates: convertPolygonCoordinates(feature),
    type: 'polygon',
    title: properties.title,
    subtitle: properties.description,
    strokeColor: properties.stroke,
    strokeWidth: 5,
    strokeAlpha: 0.5,
    fillColor: '#0E3453',
    fillAlpha: 0.5
  }
}

function convertPolygonCoordinates (feature) {
  return feature.geometry.coordinates.pop().map(function (coordinate) {
    return convertCoordinate(coordinate)
  })
}

module.exports = geoJSONToAnnotations
