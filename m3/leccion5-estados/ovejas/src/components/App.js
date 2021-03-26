import React from 'react';
import '../stylesheets/App.css';
import SheepCounter from './SheepCounter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      color: 'change-color',
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyUp(ev) {
    this.setState({
      text: ev.target.value,
    });
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextColor;
      if (prevState.color === 'change-color') {
        nextColor = 'change-color-red';
      } else {
        nextColor = 'change-color';
      }
      return {
        color: nextColor,
      };
    });
  }

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="value">Introduce el texto aquí:</label>
          <input
            id="value"
            type="text"
            name="value"
            className="js-input"
            onKeyUp={this.handleKeyUp}
          />
        </form>
        <p className="js-paragraph">{this.state.text}</p>
        <div className={this.state.color} onClick={this.handleClick}>
          HOLA
        </div>
        <SheepCounter />
      </div>
    );
  }
}

export default App;
