'use strict'

import RootViewContainer from './src/RootViewContainer'
import React from 'react-native'

const {
  AppRegistry
} = React

const pocketguide = React.createClass({
  render () {
    return (
      <RootViewContainer/>
    )
  }
})

AppRegistry.registerComponent('pocketguide', () => pocketguide)
