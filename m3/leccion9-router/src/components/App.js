import React from 'react';
import '../stylesheets/_app.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';
import data from '../data/data.json';
import PersonDetail from './PersonDetail';

class App extends React.Component {
  renderPersonDetail(routerProps) {
    const routerPersonId = routerProps.match.params.number;
    console.log(data.results);

    const personFound = data.results[routerPersonId];

    return <PersonDetail person={personFound} />;
  }

  render() {
    const people = data.results.map((person, index) => (
      <li key={index}>
        <Link to={'/people/' + index}>
          {'Name: ' + person.name.first + ', Last Name: ' + person.name.last}
        </Link>
      </li>
    ));

    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <ul>{people}</ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/people/:number" render={this.renderPersonDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
