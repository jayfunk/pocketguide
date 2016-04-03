var test = require('tape')
var geoJSONToAnnotations = require('../src/data/transformers/geoJSONToAnnotations')

test('should transform geo json point feature to annotation point', function (t) {
  t.plan(1)

  var geoJson = {
    features: [{
      type: 'Feature',
      properties: {
        name: 'Rangers',
        styleUrl: '#icon-503-DB4436-nodesc',
        styleHash: '-3b37c65d',
        title: 'Rangers',
        description: 'We are awesome!',
        'marker-color': '',
        'marker-size': '',
        'marker-symbol': 'danger'
      },
      geometry: {
        coordinates: [
          -83.33864,
          33.377138,
          0
        ],
        type: 'Point'
      },
      id: '175f34b700d3df7ab7d17235274b79e6'
    }]
  }

  var expected = [{
    id: '175f34b700d3df7ab7d17235274b79e6',
    coordinates: [33.377138, -83.33864],
    type: 'point',
    title: 'Rangers',
    subtitle: 'We are awesome!',
    annotationImage: {
      url: '',
      height: 30,
      width: 70
    }
  }]

  var actual = geoJSONToAnnotations(geoJson)

  t.deepEqual(actual, expected)
})

test('should transform geo json line string feature to annotation polyline', function (t) {
  t.plan(1)

  var geoJson = {
    features: [{
      type: 'Feature',
      properties: {
        name: 'Path through woods',
        description: 'Path shown here is highly approximated.',
        title: 'Path through woods',
        'marker-color': '',
        'marker-size': '',
        'marker-symbol': '',
        stroke: '#a3e46b',
        'stroke-width': 4,
        'stroke-opacity': 1
      },
      geometry: {
        coordinates: [
          [-83.34098, 33.379508, 0],
          [-83.343883, 33.381743, 0],
          [-83.34766, 33.378947, 0],
          [-83.345246, 33.376949, 0],
          [-83.344956, 33.376743, 0],
          [-83.343401, 33.377586, 0],
          [-83.342596, 33.378284, 0],
          [-83.342113, 33.379359, 0],
          [-83.340863, 33.379526, 0]
        ],
        type: 'LineString'
      },
      id: '04f6b19035966f3276f453303c425b25'
    }]
  }

  var expected = [{
    coordinates: [
      [33.379508, -83.34098],
      [33.381743, -83.343883],
      [33.378947, -83.34766],
      [33.376949, -83.345246],
      [33.376743, -83.344956],
      [33.377586, -83.343401],
      [33.378284, -83.342596],
      [33.379359, -83.342113],
      [33.379526, -83.340863]
    ],
    title: 'Path through woods',
    subtitle: 'Path shown here is highly approximated.',
    type: 'polyline',
    strokeColor: '#a3e46b',
    strokeWidth: 4,
    strokeAlpha: 1,
    id: '04f6b19035966f3276f453303c425b25'
  }]

  var actual = geoJSONToAnnotations(geoJson)

  t.deepEqual(actual, expected)
})

test('should transform geo json polygon feature to annotation polygon', function (t) {
  t.plan(1)

  var geoJson = {
    features: [{
      type: 'Feature',
      properties: {
        name: 'Hearth Camp',
        title: 'Hearth Camp',
        description: '',
        'marker-color': '',
        'marker-size': '',
        'marker-symbol': '',
        stroke: '#e7857f',
        'stroke-width': 4,
        'stroke-opacity': 1,
        fill: '#e7857f',
        'fill-opacity': 0.20000000298023224
      },
      geometry: {
        coordinates: [
          [
            [-83.338815, 33.377057, 0],
            [-83.339329, 33.377106, 0],
            [-83.33905, 33.376638, 0],
            [-83.33864, 33.376785, 0],
            [-83.338815, 33.377057, 0]
          ]
        ],
        type: 'Polygon'
      },
      id: '621705c016fcebf3855df695ca03b973'
    }]
  }

  var expected = [{
    coordinates: [
      [33.377057, -83.338815],
      [33.377106, -83.339329],
      [33.376638, -83.33905],
      [33.376785, -83.33864],
      [33.377057, -83.338815]
    ],
    title: 'Hearth Camp',
    subtitle: '',
    type: 'polygon',
    strokeColor: '#e7857f',
    strokeWidth: 4,
    strokeAlpha: 1,
    fillColor: '#e7857f',
    fillAlpha: 0.20000000298023224,
    id: '621705c016fcebf3855df695ca03b973'
  }]

  var actual = geoJSONToAnnotations(geoJson)

  t.deepEqual(actual, expected)
})
