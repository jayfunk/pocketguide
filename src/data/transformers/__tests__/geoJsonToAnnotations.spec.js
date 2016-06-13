var geoJSONToAnnotations = require('../geoJSONToAnnotations')

describe('geoJSONToAnnotations', () => {
  it('should transform geo json point feature to annotation point', () => {
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
    expect(actual).to.eql(expected);
  })

  it('should transform geo json line string feature to annotation polyline', () => {
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
    expect(actual).to.eql(expected)
  })

  it('should transform geo json polygon feature to annotation polygon', () => {
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

    expect(actual).to.eql(expected)
  })
})
