import React, {NetInfo} from 'react-native'
import Event from '../events/Event'
import store from 'react-native-simple-store'

// TODO: This should all be converted to a action creator and all of the data should be kept in the reducer.
// None of the data should be stored in here.

// android local url: http://10.0.2.2:3000/api
// ios local url: http://localhost:3000/api
// heroku url: http://pocketguide-web-server.herokuapp.com/api/mobile
const URL = 'http://pocketguide-web-server.herokuapp.com/api/mobile'
const LAST_MODIFIED_KEY = 'LAST_MODIFIED_KEY'
const LAST_DATA_FROM_DISK = 'LAST_DATA_FROM_DISK'

export default class DataStore {
  constructor (eventChannel) {
    this.eventChannel = eventChannel
    this.isConnected = false
    this._isLoaded = false
    this.data = {
      events: []
    }
  }

  load () {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (!isConnected) return this._loadLastFromDisk()
      store.get(LAST_MODIFIED_KEY).then(lastModified => {
        this._fetchEventData(lastModified)
      })
    })
  }

  getAll () {
    return this.data
  }

  isLoaded () {
    return this._isLoaded
  }

  _loadLastFromDisk () {
    store.get(LAST_DATA_FROM_DISK).then(data => {
      this._emitDataLoaded(data)
    }).catch(error => {
      this.eventChannel.emit('dataStore:load:error', {
        message: 'Unable to load data from cache.',
        error
      })
    })
  }

  _emitDataLoaded (data) {
    this._isLoaded = true
    if (data.events) {
      this.data.events = this._transformEvents(data.events)
    }
    this.eventChannel.emit('dataStore:load:complete', {
      data: this.data
    })
  }

  _transformEvents (rawEventData) {
    return rawEventData.map(rawEvent => {
      return new Event(rawEvent)
    })
  }

  _fetchEventData (lastModified) {
    fetch(URL, {
      timeout: 10000,
      headers: {
        'Last-Modified': lastModified
      }
    }).then(response => {
      const status = response.status
      if (response.ok) {
        return response.json()
      } else if (status === 304) {
        this._loadLastFromDisk()
      } else {
        this.eventChannel.emit('dataStore:load:error', {
          message: 'Unknown status code.',
          status
        })
      }
    }).then(data => {
      if (data) {
        this._writeDataToDisk(data)
        this._emitDataLoaded(data)
      }
    }).catch(error => {
      console.error(error)
      this._loadLastFromDisk()
    })
  }

  _writeDataToDisk (data) {
    store.save(LAST_DATA_FROM_DISK, data)
    store.save(LAST_MODIFIED_KEY, Date.now())
  }
}
