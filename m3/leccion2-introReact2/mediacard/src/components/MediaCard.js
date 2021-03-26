import React from 'react';
import logo from '../images/logo.svg';

class MediaCard extends React.Component {
  render() {
    let heartClass;

    if (this.props.fas === true) {
      heartClass = 'fas fa-heart';
    } else {
      heartClass = 'far fa-heart';
    }
    const header = (
      <header className="header">
        <img src={this.props.logo} className="mediacard-logo" alt="logo" />
        <div className="name-date">
          <h2>{this.props.name}</h2>
          <h3>{this.props.date}</h3>
        </div>
      </header>
    );

    const footer = (
      <footer className="footer">
        <p className="read">Leer mas...</p>
        <p className="likes">
          {this.props.likes}
          <span className="heart">
            <i className={heartClass}></i>
          </span>
        </p>
      </footer>
    );

    const mediaCard = (
      <div className="card">
        {header}
        <p className="paragraph">{this.props.paragraph}</p>
        {footer}
      </div>
    );
    return mediaCard;
  }
}

export default MediaCard;
