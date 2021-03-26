import React, { useState } from 'react';

function HappyBirthday(props) {
  const [age, setAge] = useState(20);
  const [presentsNumber, setPresents] = useState(1);
  const [plural, setPlural] = useState('');

  const handleIncrementAge = () => {
    const newAge = age + 1;
    setAge(newAge);
  };

  const handleIncrementPresents = () => {
    const newPresentsNumber = presentsNumber + 1;
    setPresents(newPresentsNumber);
    if (newPresentsNumber > 1) {
      setPlural('s');
    }
  };

  return (
    <div>
      <p>Hoy tengo {age} años de edad</p>
      <button onClick={handleIncrementAge}>Hazme más viejo</button>
      <p>
        Tengo {presentsNumber} regalo{plural}
      </p>
      <button onClick={handleIncrementPresents}>Dame regalo</button>
    </div>
  );
}

export default HappyBirthday;
