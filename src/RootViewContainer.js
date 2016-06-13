import React from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootView from './RootView'
import reducers from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()

export default React.createClass({
  getInitialState () {
    return {
      store: createStore(
        reducers,
        applyMiddleware(
          thunk,
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
