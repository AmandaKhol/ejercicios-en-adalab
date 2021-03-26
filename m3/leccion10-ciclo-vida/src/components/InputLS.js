import React, { Component } from 'react';
import getDataFromApi from '../services/api';

class InputLS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: [],
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    this.setState({
      text: ev.target.value,
    });
  }
  componentDidMount() {
    getDataFromApi('girls').then((data) => {
      console.log('pasa por did mount');
      this.setState({
        text: JSON.parse(localStorage.getItem('text')),
        data: data,
      });
    });
  }

  componentDidUpdate() {
    console.log('pasa por update');
    if (!this.state.text) {
      localStorage.setItem('text', JSON.stringify(''));
    } else {
      localStorage.setItem('text', JSON.stringify(this.state.text));
    }
    console.log(this.state.data);
  }

  renderSeriesObject() {
    return this.state.data.map((showItem) => {
      return <li key={showItem.id}>{showItem.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <label htmlFor="text">Pinta algo aquí:</label>
        <input type="text" name="text" id="" onChange={this.handleInput} />
        <ul>{this.renderSeriesObject()}</ul>
      </div>
    );
  }
}

export default InputLS;
