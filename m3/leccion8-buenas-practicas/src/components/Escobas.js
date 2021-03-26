import React from 'react';

const Escobas = () => {
  const users = [
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Gregory Goyle', time: 56 },
  ];
  const [first, second, third] = users;
  console.log('Primero: ' + first.name + ' Tiempo: ' + first.time);
  console.log('Segundo: ' + second.name + ' Tiempo: ' + second.time);
  console.log('Tercero: ' + third.name + ' Tiempo: ' + third.time);

  return <div></div>;
};

export default Escobas;
