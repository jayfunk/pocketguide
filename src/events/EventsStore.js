import rawEventData from '../data/eventData'
import Event from './Event'

export default class EventsStore {
  constructor () {
    this.events = this._transform(rawEventData)
  }

  getAll () {
    return this.events
  }

  _transform (rawEventData) {
    return rawEventData.map(rawEvent => {
      return new Event(rawEvent)
    })
  }
}
