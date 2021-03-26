import React from 'react';
import Input from './Input';

class Birthday extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Input
          name="Día: "
          nameInput="day"
          result={this.props.dayTitle}
          handleInput={this.props.handleInput}
        />
        <Input
          name="Mes: "
          nameInput="month"
          result={this.props.monthTitle}
          handleInput={this.props.handleInput}
        />
      </>
    );
  }
}

export default Birthday;
