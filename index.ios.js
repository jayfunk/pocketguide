'use strict'

import React, {
  AppRegistry
} from 'react-native'
import RootViewContainer from './src/RootViewContainer'

const pocketguide = React.createClass({
  render () {
    return (
      <RootViewContainer/>
    )
  }
})

AppRegistry.registerComponent('pocketguide', () => pocketguide)
