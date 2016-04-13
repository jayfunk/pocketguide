import React from 'react-native'
import Event from '../events/Event'
const {
  AsyncStorage,
  NetInfo
} = React

const URL = 'http://10.0.2.2:3000/api/events' // 'http://pocketguide-web-server.herokuapp.com/api/events'
const LAST_MODIFIED_KEY = 'LAST_MODIFIED_KEY'
const LAST_DATA_FROM_DISK = 'LAST_DATA_FROM_DISK'

export default class DataStore {
  constructor (eventChannel) {
    this.eventChannel = eventChannel
    this.isConnected = false
    this.data = null
  }

  load () {
    if (this.data) return
    NetInfo.isConnected.fetch().done((isConnected) => {
      if (!isConnected) return this._loadLastFromDisk()
      this._getEventsLastModified().then(lastModified => {
        this._fetchEventData(lastModified)
      })
    })
  }

  getAll () {
    return this.data
  }

  isLoaded () {
    return !!this.data
  }

  _loadLastFromDisk () {
    // TODO: Data is not being loaded from the disk and always fails.
    // Might be that async storage is clearing on app reload
    AsyncStorage.getItem(LAST_DATA_FROM_DISK).then(data => {
      this._emitDataLoaded(data)
    }).catch(error => {
      this.eventChannel.emit('dataStore:load:error', {
        message: 'Unable to load data from cache.',
        error
      })
    }).done()
  }

  _emitDataLoaded (data) {
    this.data = {}
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

  _getEventsLastModified () {
    return AsyncStorage.getItem(LAST_MODIFIED_KEY)
  }

  _fetchEventData (lastModified) {
    // TODO: need to test all failure scenarios
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
    }).done()
  }

  _writeDataToDisk (data) {
    AsyncStorage.setItem(LAST_DATA_FROM_DISK, data)
    AsyncStorage.setItem(LAST_MODIFIED_KEY, new Date().toISOString())
  }
}
