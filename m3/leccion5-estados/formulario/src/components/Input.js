import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(ev) {
    this.props.handleInput(ev.target.name, ev.target.value);
  }

  render() {
    return (
      <>
        <label htmlFor="">{this.props.name}</label>
        <input
          name={this.props.nameInput}
          type="text"
          onKeyUp={this.handleKeyUp}
        />
        <p className="result">{this.props.result}</p>
      </>
    );
  }
}

export default Input;
