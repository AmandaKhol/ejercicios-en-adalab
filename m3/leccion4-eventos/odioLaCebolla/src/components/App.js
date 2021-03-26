import React from 'react';
import OnionHater from './OnionHater';
import Destiny from './Destiny';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <OnionHater />
        <Destiny />
      </div>
    );
  }
}

export default App;
