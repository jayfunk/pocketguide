var json = require('../data/lavenderFarmsMap.json')
var convert = require('./geoJSONToAnnotations')

module.exports = function (json) {
  console.log(JSON.stringify(convert(json), null, 2))
}(json)
