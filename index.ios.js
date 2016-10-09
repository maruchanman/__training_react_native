import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './components/App.js';

class dentakku extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('dentakku', () => dentakku);
