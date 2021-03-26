import React from 'react';
import Form from './Form';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
