import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFooter() {
    return (
      <footer className="footer">
        <p className="read">Leer mas...</p>
        <p className="likes">
          30
          <span className="heart">&#10084;</span>
        </p>
      </footer>
    );
  }

  render() {
    const header = (
      <header className="header">
        <img src={logo} className="mediacard-logo" alt="logo" />
        <div className="name-date">
          <h2>Alex Guerrero</h2>
          <h3>Lunes 26 de junio de 2017</h3>
        </div>
      </header>
    );

    const appRoot = (
      <div className="App">
        {header}
        <p
          className="paragraph"
          style={{ backgroundImage: `url(require("./logo.svg"))` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis ducimus aliquam unde ipsam ad eius corporis ipsum
          repellendus esse, ut laborum quis nostrum voluptate aperiam commodi
          vitae reprehenderit itaque!
        </p>
        {this.renderFooter()}
      </div>
    );
    return Math.random() > 0.5 ? appRoot : <div>Hola</div>;
  }
}

export default App;
