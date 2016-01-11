'use strict'

import RootView from './src/RootView'
import React from 'react-native'
const {
  AppRegistry
} = React

const pocketguide = React.createClass({
  render: function () {
    return (
      <RootView/>
    )
  }
})

AppRegistry.registerComponent('pocketguide', () => pocketguide)
