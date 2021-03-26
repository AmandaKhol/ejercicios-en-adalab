/* eslint-disable no-useless-constructor */
import React from 'react';
import '.././stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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
    ];
    return (
      <div className="App App-header">
        <h1>Pintar listados con React:</h1>
        <ul>
          {students.map((student) => {
            if (student.promo === 'A') {
              return (
                <li>
                  <h3>Nombre: {student.name}</h3>
                  <p>Edad: {student.age}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default App;
