import React from 'react';
import '../stylesheets/App.css';

const sheepURL =
  'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png';

class SheepImage extends React.Component {
  /*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <img
        key={this.props.key}
        className="sheep-img"
        src={sheepURL}
        alt="sheep"
      />
    );
  }
}

export default SheepImage;
