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
    id: feature.id,
    coordinates: convertCoordinate(feature.geometry.coordinates),
    type: 'point',
    title: properties.title,
    subtitle: properties.description,
    annotationImage: {
      url: '',
      height: 30,
      width: 70
    }
  }
}

function convertCoordinate (coordinate) {
  return coordinate.slice(0, -1).reverse()
}

function convertLineString (feature) {
  var properties = feature.properties
  return {
    id: feature.id,
    coordinates: convertLineStringCoordinates(feature),
    type: 'polyline',
    title: properties.title,
    subtitle: properties.description,
    strokeColor: properties.stroke,
    strokeWidth: properties['stroke-width'],
    strokeAlpha: properties['stroke-opacity']
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
    id: feature.id,
    coordinates: convertPolygonCoordinates(feature),
    type: 'polygon',
    title: properties.title,
    subtitle: properties.description,
    strokeColor: properties.stroke,
    strokeWidth: properties['stroke-width'],
    strokeAlpha: properties['stroke-opacity'],
    fillColor: properties['fill'],
    fillAlpha: properties['fill-opacity']
  }
}

function convertPolygonCoordinates (feature) {
  return feature.geometry.coordinates.pop().map(function (coordinate) {
    return convertCoordinate(coordinate)
  })
}

module.exports = geoJSONToAnnotations
