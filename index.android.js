'use strict';

import React from 'react-native';
const {
  AppRegistry
} = React;

import RootView from './src/RootView';

const pocketguide = React.createClass({
  render: function() {
    return (
      <RootView/>
    );
  }
});

AppRegistry.registerComponent('pocketguide', () => pocketguide);
