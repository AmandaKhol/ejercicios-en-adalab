import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxValue: 0,
      even: false,
    };
    this.handleClickNumber = this.handleClickNumber.bind(this);
    this.handleActiveEven = this.handleActiveEven.bind(this);
  }

  getNumbers(maxValue) {
    let numbers = [1, 4, 6, 8, 45, 89];
    if (this.state.even) {
      numbers = numbers.filter((number) => number % 2 === 0);
    }
    const numberList = numbers
      .filter((number) => number > maxValue)
      .map((number, index) => <li key={index}>{number}</li>);

    return numberList;
  }

  handleClickNumber(ev) {
    this.setState({
      maxValue: parseInt(ev.target.value),
    });
  }
  handleActiveEven(ev) {
    ev.target.checked
      ? this.setState({
          even: true,
        })
      : this.setState({ even: false });
  }

  render() {
    return (
      <>
        <form action="">
          <label htmlFor="numberInput">Escribe un número: </label>
          <input
            id="numberInput"
            name="numberInput"
            type="text"
            onKeyUp={this.handleClickNumber}
          />
          <label htmlFor="even">Pares</label>
          <input
            type="checkbox"
            value="Pares"
            onChange={this.handleActiveEven}
          />
        </form>
        <ul>{this.getNumbers(this.state.maxValue)}</ul>
      </>
    );
  }
}

export default Form;
