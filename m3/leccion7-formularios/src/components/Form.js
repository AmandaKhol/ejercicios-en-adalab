import { Input } from './Input';
import React from 'react';
import Card from './Card';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fistName: '',
      description: '',
      language: '0',
      languageText: 'Español',
      clasification: 'A',
      genres: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }
  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  handleLanguage(ev) {
    const index = ev.target.value;
    console.log(ev);
    debugger;
    this.setState({
      language: index,
      languageText: ev.nativeEvent.target[index].innerText,
    });
  }

  handleGenres(ev) {
    if (ev.target.checked) {
      this.setState((prevState) => {
        prevState.genres.push(ev.target.value);
        return {
          genres: prevState.genres,
        };
      });
    } else {
      this.setState((prevState) => {
        const genres = prevState.genres.filter(
          (genre) => genre !== ev.target.value
        );
        return {
          genres: genres,
        };
      });
    }
  }

  render() {
    return (
      <>
        <form action="" className="form">
          <label htmlFor="firstName">Nombre</label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <label htmlFor="language">Idioma</label>
          <select
            name="language"
            id="language"
            value={this.state.language}
            onChange={this.handleLanguage}
          >
            <option value="0">Español</option>
            <option value="1">Portugués</option>
            <option value="2">Inglés</option>
            {/* con esta solución valdría usar el handleChange */}
            {/*             <option value="Español">Español</option>
            <option value="Portugues">Portugués</option>
            <option value="Inglés">Inglés</option> */}
          </select>
          <fieldset className="form__clasification">
            <label htmlFor="ageA">
              <input
                id="ageA"
                type="radio"
                value="A"
                name="clasification"
                checked={this.state.clasification === 'A'}
                onChange={this.handleChange}
              />
              A
            </label>
            <label htmlFor="age7">
              <input
                id="age7"
                type="radio"
                value="7"
                name="clasification"
                checked={this.state.clasification === '7'}
                onChange={this.handleChange}
              />
              7
            </label>
            <label htmlFor="age12">
              <input
                id="age12"
                type="radio"
                value="12"
                name="clasification"
                checked={this.state.clasification === '12'}
                onChange={this.handleChange}
              />
              12
            </label>
            <label htmlFor="age16">
              <input
                id="age16"
                type="radio"
                value="16"
                name="clasification"
                checked={this.state.clasification === '16'}
                onChange={this.handleChange}
              />
              16
            </label>
            <label htmlFor="age18">
              <input
                id="age18"
                type="radio"
                value="18"
                name="clasification"
                checked={this.state.clasification === '18'}
                onChange={this.handleChange}
              />
              18
            </label>
          </fieldset>
          <fieldset className="form__genres">
            <label htmlFor="comedia">
              <input
                id="comedia"
                name="genres"
                type="checkbox"
                value="comedia"
                onClick={this.handleGenres}
              />
              Comedia
            </label>
            <label htmlFor="drama">
              <input
                id="drama"
                name="genres"
                type="checkbox"
                value="drama"
                onClick={this.handleGenres}
              />
              Drama
            </label>
            <label htmlFor="fantasia">
              <input
                id="fantasia"
                name="genres"
                type="checkbox"
                value="fantasia"
                onClick={this.handleGenres}
              />
              Fantasía
            </label>
            <label htmlFor="accion">
              <input
                id="accion"
                name="genres"
                type="checkbox"
                value="accion"
                onClick={this.handleGenres}
              />
              Acción
            </label>
            <label htmlFor="familiar">
              <input
                id="familiar"
                name="genres"
                type="checkbox"
                value="familiar"
                onClick={this.handleGenres}
              />
              Familiar
            </label>
            <label htmlFor="terror">
              <input
                id="terror"
                name="genres"
                type="checkbox"
                value="terror"
                onClick={this.handleGenres}
              />
              Terror
            </label>
          </fieldset>
        </form>
        <Card
          name={this.state.firstName}
          description={this.state.description}
          language={this.state.languageText}
          clasification={this.state.clasification}
          genres={this.state.genres}
        />
      </>
    );
  }
}

export default Form;
