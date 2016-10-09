var tj = require('togeojson')
var fs = require('fs')
var jsdom = require('jsdom').jsdom
var rootPath = './src/data/staticData/'
var geoJSONToAnnotations = require('../src/data/transformers/geoJSONToAnnotations')

var fileNames = [
  'art',
  'landmarks',
  'opencamping',
  'roads',
  'tcs'
]

fileNames.forEach(function(fileName) {
  var kml = jsdom(fs.readFileSync(rootPath + 'kml/' + fileName + '.kml', 'utf8'));

  var geoJSON = tj.kml(kml, { styles: true });
  fs.writeFileSync(rootPath + 'geoJSON/' + fileName + '.json', JSON.stringify(geoJSON, null, 2))
  
  var annotations = geoJSONToAnnotations(geoJSON)
  fs.writeFileSync(rootPath + 'annotations/' + fileName + '.json', JSON.stringify(annotations, null, 2))
})
