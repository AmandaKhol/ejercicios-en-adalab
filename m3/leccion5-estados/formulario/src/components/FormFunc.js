import React, { useState } from 'react';
/* import Birthday from './Birthday';
import Input from './Input'; */

function FormFunc(props) {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const [birthDate, setBirthday] = useState({
    day: 10,
    month: 'diciembre',
    year: 1815,
  });

  /*   handleFormInput(inputValue){
        setFirstName({inputValue})
      }
     */
  const handleKeyUp = (ev) => {
    setLastName(ev.target.value);
  };

  /*   handleFormBirth(inputName, inputValue) {
    setBirthday(
          ...birthDate,
          [inputName]: inputValue,
       );
  } */

  function handleKeyUpBirth(ev) {
    console.log(birthDate);

    /*       birthDate. = ev.target.value; */
    setBirthday({ ...birthDate });
  }

  return (
    <form className="form">
      {/*       <Input
        name="Nombre: "
        nameInput="firstName"
        result={this.state.firstName}
        handleInput={this.handleFormInput}
      /> */}
      <label htmlFor="">Apellido:</label>
      <input name="lastName" type="text" onKeyUp={handleKeyUp} />
      <p className="result">{lastName}</p>
      <label htmlFor="">Fecha Nacimiento:</label>
      <fieldset className="birthday">
        {/*         <Birthday
          dayTitle={this.state.birthDate.day}
          monthTitle={this.state.birthDate.month}
          handleInput={this.handleFormBirth}
        /> */}
        <label htmlFor="">Año:</label>
        <input name="year" type="text" onKeyUp={handleKeyUpBirth} />
        <p className="result">{birthDate.year}</p>
      </fieldset>
    </form>
  );
}

export default FormFunc;
