import React from 'react-native'
const {
  AsyncStorage,
  NetInfo
} = React

const URL = 'http://10.0.2.2:3000/api/events' //'http://pocketguide-web-server.herokuapp.com/api/events'
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
    AsyncStorage.getItem(LAST_DATA_FROM_DISK).then(data => {
      this.data = data
      this.eventChannel.emit('dataStore:load:complete', {
        data: data
      })
    }).catch(error => {
      this.eventChannel.emit('dataStore:load:error', {
        message: 'Unable to load data from cache.',
        error
      })
    }).done()
  }

  _getEventsLastModified () {
    return AsyncStorage.getItem(LAST_MODIFIED_KEY)
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
        this.eventChannel.emit('dataStore:load:complete', {
          data: data
        })
      }
    }).catch((error) => {
      console.error(error)
      this._loadLastFromDisk()
    }).done()
  }

  _writeDataToDisk (data) {
    this.data = data
    AsyncStorage.setItem(LAST_DATA_FROM_DISK, data)
    AsyncStorage.setItem(LAST_MODIFIED_KEY, new Date().toISOString())
  }
}
