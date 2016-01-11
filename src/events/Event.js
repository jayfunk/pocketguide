export default class Event {
  constructor (rawEvent) {
    this.name = rawEvent['Event Name']
    this.startTime = rawEvent['Start']
    this.endTime = rawEvent['End']
    this.location = rawEvent['Location']
    this.description = rawEvent['Description']
    this.isAllDay = rawEvent['All Day Event?']
    this.days = rawEvent['Days']
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
  }

  get isAllDay () {
    return this._isAllDay
  }

  set isAllDay (rawAllDayEvent) {
    this._isAllDay = rawAllDayEvent.trim().toLowerCase() === 'yes'
  }

  get days () {
    return this._days
  }

  set days (rawDays) {
    this._days = rawDays.trim().split(',')
  }
}
