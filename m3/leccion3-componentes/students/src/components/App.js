import React from 'react';

import '../stylesheets/App.css';
import Student from './Student';

class App extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20,
      },
      {
        promo: 'B',
        name: 'María',
        age: 21,
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22,
      },
      /*       {
        promo: 3,
        name: 'Lucía',
      }, */
    ];
    // 1º filtro
    const studentsFilter = students.filter((student) => student.promo === 'A');

    const result = students.map(
      (item, index) => (
        <li key={index}>
          <Student name={item.name} promo={item.promo} age={item.age} />
        </li>
      )

      // el map retorna un array de li, es decir, un listado de HTML
    );

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {result}
      </div>
    );
  }
}

export default App;
