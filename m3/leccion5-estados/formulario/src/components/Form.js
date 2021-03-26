import React, { Component } from 'react';
import Birthday from './Birthday';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthDate: {
        day: 10,
        month: 'diciembre',
        year: 1815,
      },
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormBirth = this.handleFormBirth.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyUpBirth = this.handleKeyUpBirth.bind(this);
  }

  handleFormInput(inputName, inputValue) {
    this.setState({ [inputName]: inputValue });
  }

  handleKeyUp(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleFormBirth(inputName, inputValue) {
    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          [inputName]: inputValue,
        },
      };
    });
  }

  handleKeyUpBirth(ev) {
    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          [ev.target.name]: ev.target.value,
        },
      };
    });
  }

  render() {
    return (
      <form className="form">
        <Input
          name="Nombre: "
          nameInput="firstName"
          result={this.state.firstName}
          handleInput={this.handleFormInput}
        />
        <label htmlFor="">Apellido:</label>
        <input name="lastName" type="text" onKeyUp={this.handleKeyUp} />
        <p className="result">{this.state.lastName}</p>
        <label htmlFor="">Fecha Nacimiento:</label>
        <fieldset className="birthday">
          <Birthday
            dayTitle={this.state.birthDate.day}
            monthTitle={this.state.birthDate.month}
            handleInput={this.handleFormBirth}
          />
          <label htmlFor="">Año:</label>
          <input name="year" type="text" onKeyUp={this.handleKeyUpBirth} />
          <p className="result">{this.state.birthDate.year}</p>
        </fieldset>
      </form>
    );
  }
}

export default Form;
