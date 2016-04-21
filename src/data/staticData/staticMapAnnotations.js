import art from './annotations/art.json'
import offlimits from './annotations/offlimits.json'
import landmarks from './annotations/landmarks.json'
import opencamping from './annotations/opencamping.json'
import placementMap from './annotations/placementMap.json'
import roads from './annotations/roads.json'
import tcs from './annotations/tcs.json'

const allMapAnnotations = []

export default allMapAnnotations.concat(
  art,
  landmarks,
  offlimits,
  opencamping,
  placementMap,
  roads,
  tcs
)
