import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

class Student extends React.Component {
  render() {
    // cada return retorna un li
    return (
      <>
        <h2>Nombre: {this.props.name}</h2>
        <p>Promo: {this.props.promo}</p>
        <p>Edad: {this.props.age}</p>
        <p>Description : {this.props.description}</p>
      </>
    );
    // el map retorna un array de li, es decir, un listado de HTML
  }
}
//PropTypes
Student.propTypes = {
  name: PropTypes.string,
  promo: PropTypes.string,
  age: PropTypes.number.isRequired,
};

// Así definimos las defaultProps
Student.defaultProps = {
  description: 'No hay descripción',
};

export default Student;
