// android emulator url:
// const URL = 'http://10.0.2.2:3000/api/mobile'

// genymotion emulator url:
// const URL = 'http://10.0.3.2:3000/api/mobile'

// ios local url:
// const URL = 'http://localhost:3000/api/mobile'

// heroku url:
const URL = 'http://pocketguide-web-server.herokuapp.com/api/mobile'

const LAST_DATA = 'LAST_DATA'
const LAST_MODIFIED = 'LAST_MODIFIED'

export function loadData () {
  return (dispatch, getState, {netInfo, diskStore}) => {
    dispatch({
      type: 'data:load'
    })

    netInfo.addEventListener('change', isConnected => {
      if (!isConnected) return loadFromDisk(dispatch, diskStore)

      return diskStore.get(LAST_MODIFIED).then(lastModified => {
        return fetchData(dispatch, diskStore, lastModified)
      }).catch(error => {
        dispatch({
          type: 'data:load:error',
          errorMessage: `Unable to load data from disk. ${error}`
        })
      })
    })
  }
}

function loadFromDisk (dispatch, diskStore) {
  return diskStore
    .get(LAST_DATA)
    .then(data => {
      loadComplete(dispatch, data)
    })
    .catch(error => {
      dispatch({
        type: 'data:load:error',
        errorMessage: `Unable to load data from disk. ${error}`
      })
    })
}

function loadComplete (dispatch, data) {
  dispatch({
    type: 'data:load:complete',
    events: data.events
  })
}

function fetchData (dispatch, diskStore, lastModified) {
  return fetch(URL, {
    timeout: 10000,
    headers: getHeaders(lastModified)
  }).then(response => {
    const status = response.status
    if (response.ok) {
      return response.json()
    } else if (status === 304) {
      loadFromDisk(dispatch, diskStore)
    } else {
      dispatch({
        type: 'data:load:error',
        errorMessage: `Unable to load data from server. Unknown server response: ${response.status}`
      })
    }
  }).then(data => {
    if (data) {
      writeToDisk(data, diskStore)
      loadComplete(dispatch, data)
    }
  }).catch(error => {
    console.error(error)
    return loadFromDisk(dispatch, diskStore)
  })
}

function getHeaders (lastModified) {
  if (lastModified === null) return {}
  return {
    'Last-Modified': lastModified
  }
}

function writeToDisk (data, diskStore) {
  diskStore.save(LAST_DATA, data)
  diskStore.save(LAST_MODIFIED, Date.now())
}
