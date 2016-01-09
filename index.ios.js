/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import RootView from './src/RootView';

const pocketguide = React.createClass({
  render: function() {
    return (
      <RootView/>
    );
  }
});

AppRegistry.registerComponent('pocketguide', () => pocketguide);
