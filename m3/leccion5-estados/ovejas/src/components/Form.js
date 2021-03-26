import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state({
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthDate: {
        day: 10,
        month: 'diciembre',
        year: 1815,
      },
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="">Nombre:</label>
        <input type="text" />
        <label htmlFor="">Apellido:</label>
        <input type="text" />
        <label htmlFor="">Fecha Nacimiento:</label>
        <fieldset>
          <label htmlFor="">Día:</label>
          <input type="number" />
          <label htmlFor="">Mes:</label>
          <input type="text" />
          <label htmlFor="">Año:</label>
          <input type="number" />
        </fieldset>
      </form>
    );
  }
}

export default Form;
