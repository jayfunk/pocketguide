// android local url: http://10.0.2.2:3000/api
// ios local url: http://localhost:3000/api
// heroku url: http://pocketguide-web-server.herokuapp.com/api/mobile
const URL = 'http://pocketguide-web-server.herokuapp.com/api/mobile'

const LAST_DATA = 'LAST_DATA'
const LAST_MODIFIED_KEY = 'LAST_MODIFIED_KEY'

function loadFromDisk (dispatch, diskStore) {
  return diskStore.get(LAST_DATA).then(data => {
    dispatch({
      type: 'data:load:complete',
      events: data.events
    })
  })
}

function fetchData (dispatch, lastModified) {
  return fetch(URL, {
    timeout: 10000,
    headers: {
      'Last-Modified': lastModified
    }
  }).then(response => {
    // const status = response.status
    if (response.ok) {
      return response.json()
    }
  }).then(data => {
    if (data) {
      // writeDataToDisk(data)
      dispatch({
        type: 'data:load:complete',
        events: data.events
      })
    }
  })
}

export function loadData () {
  return (dispatch, getState, {netInfo, diskStore}) => {
    dispatch({
      type: 'data:load'
    })

    return netInfo.isConnected.fetch().then(isConnected => {
      if (!isConnected) {
        return loadFromDisk(dispatch, diskStore)
      }
      return diskStore.get(LAST_MODIFIED_KEY).then(lastModified => {
        return fetchData(dispatch, lastModified)
      })
    })
  }
}
