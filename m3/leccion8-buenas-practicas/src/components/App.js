import Form from './Form';
import React from 'react';
import '../stylesheets/_app.scss';
import Palette from './Palette';
import Escobas from './Escobas';
import getDataFromApi from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };

    getDataFromApi().then((data) => {
      console.log(data);
      this.setState({ series: data });
    });
  }
  render() {
    console.log('Render', this.state.series);
    return (
      <div>
        <Form />
        <Palette />
        <Escobas />
      </div>
    );
  }
}

export default App;
