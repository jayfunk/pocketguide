import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootView from './RootView'
import reducers from './reducers'
import createLogger from 'redux-logger'
import {NetInfo} from 'react-native'
import store from 'react-native-simple-store'

const logger = createLogger()

export default React.createClass({
  getInitialState () {
    return {
      store: createStore(
        reducers,
        applyMiddleware(
          thunk.withExtraArgument({netInfo: NetInfo, diskStore: store}),
          logger
        )
      )
    }
  },

  render () {
    return (
      <Provider store={this.state.store}>
        <RootView/>
      </Provider>
    )
  }
})
