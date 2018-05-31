import React, { Component } from 'react';

import DefaultHeader from './modules/navigation/header/header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <DefaultHeader />
        <Routes />
      </div>
    );
  }
} 

export default App;
