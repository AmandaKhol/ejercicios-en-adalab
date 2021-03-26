import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h2>Nombre: {props.name}</h2>
      <p>Descripción: {props.description} </p>
      <p>Idioma: {props.language}</p>
      <p>Edades: {props.clasification}</p>
      <p>Género: {props.genres}</p>
    </div>
  );
};

export default Card;
