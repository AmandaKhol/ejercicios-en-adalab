import React from 'react';
import '../stylesheets/App.css';
import SheepImage from './SheepImage';

let sheepsImages = [];

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheepNumber: 0,
    };

    this.handleClickSheepCounter = this.handleClickSheepCounter.bind(this);
  }

  handleClickSheepCounter() {
    console.log(this.state.sheepNumber);
    sheepsImages.push(<SheepImage key={this.state.sheepNumber} />);
    console.log(sheepsImages); //pinta un objeto Symbol ???

    this.setState(function (prevState) {
      return {
        sheepNumber: prevState.sheepNumber + 1,
      };
    });

    /*     for (let i = 0; i<this.state.sheepNumber; i ++) {
      console.log(this.state.sheepNumber);
      sheepsImages.push(<SheepImage key={i} />);
    } */
  }

  render() {
    return (
      <>
        <p>Número de ovejas: {this.state.sheepNumber} </p>
        <button className="btn-sheeps" onClick={this.handleClickSheepCounter}>
          Añadir
        </button>
        {console.log(sheepsImages)}
        {sheepsImages}
      </>
    );
  }
}

export default SheepCounter;
