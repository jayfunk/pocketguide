export default function transformEvents (events) {
  return events.map(event => {
    return transformEvent(event)
  })
}

function transformEvent (event) {
  const transformedEvent = {}

  transformedEvent.id = event.id ? event.id : `${Math.random()}`
  transformedEvent.name = event.eventName.trim()
  transformedEvent.startTime = event.startTime.trim()
  transformedEvent.endTime = event.endTime.trim()
  transformedEvent.dateOfEvent = event.dateOfEvent.trim()
  transformedEvent.location = event.location.trim()
  transformedEvent.description = event.eventDescription.trim()
  transformedEvent.shortDescription = transformedEvent.description.substring(0, 70) + '...'
  transformedEvent.latitude = Number(event.locationLatitude.trim())
  transformedEvent.longitude = Number(event.locationLongitude.trim())
  transformedEvent.coordinates = [transformedEvent.latitude, transformedEvent.longitude]
  transformedEvent.hasCoordinates = (transformedEvent.latitude && transformedEvent.longitude && !Number.isNaN(transformedEvent.latitude) && !Number.isNaN(transformedEvent.longitude))
  transformedEvent.intendedAges = event.intendedAges.trim()
  transformedEvent.themeCampName = event.themeCampName.trim()

  return transformedEvent
}
