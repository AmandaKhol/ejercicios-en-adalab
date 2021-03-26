import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import Relax from './Relax';

import '../stylesheets/_app.scss';
import InputLS from './InputLS';
import InputLSFunc from './InputLSFunc';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/relax">Relax</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/pricing" component={Relax} />
        </Switch>
        {/* <InputLS /> */}
        <InputLSFunc />
      </div>
    );
  }
}

export default App;
