export default class Event {
  constructor (rawEvent) {
    this.id = `${Math.random()}`
    this.name = rawEvent.eventName
    this.startTime = rawEvent.startTime
    this.endTime = rawEvent.endTime
    this.dateOfEvent = rawEvent.dateOfEvent
    this.location = rawEvent.location
    this.description = rawEvent.eventDescription
    this.latitude = rawEvent.locationLatitude
    this.longitude = rawEvent.locationLongitude
    this.intendedAges = rawEvent.intendedAges
    this.themeCampName = rawEvent.themeCampName
  }

  get name () {
    return this._name
  }

  set name (rawName) {
    this._name = rawName.trim()
  }

  get startTime () {
    return this._startTime
  }

  set startTime (rawStartTime) {
    this._startTime = rawStartTime.trim()
  }

  get endTime () {
    return this._endTime
  }

  set endTime (rawEndTime) {
    this._endTime = rawEndTime.trim()
  }

  get location () {
    return this._location
  }

  set location (rawLocation) {
    this._location = rawLocation.trim()
  }

  get description () {
    return this._description
  }

  set description (rawDescription) {
    this._description = rawDescription.trim()
    this._shortDescription = this._description.substring(0, 70) + '...'
  }

  get shortDescription () {
    return this._shortDescription
  }

  get coordinates () {
    return [this._latitude, this._longitude]
  }

  hasCoordinates () {
    return this._latitude && this._longitude && !Number.isNaN(this._latitude) && !Number.isNaN(this._longitude)
  }

  // Need to handle lat/lon degree bearing to decimal
  set latitude (latitudeString) {
    this._latitude = Number(latitudeString.trim())
  }

  set longitude (longitudeString) {
    this._longitude = Number(longitudeString.trim())
  }
}
