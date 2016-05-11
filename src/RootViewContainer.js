import React from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import RootView from './RootView'
import reducers from './reducers'

export default React.createClass({
  getInitialState () {
    return {
      store: createStore(reducers)
    }
  },

  render () {
    return (
      <Provider store={this.state.store}>
        <RootView/>
      </Provider>
    )
  },
})
