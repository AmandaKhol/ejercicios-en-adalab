import React, { Component } from 'react';

class PersonDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <p>User ID: {this.props.match.params.number}</p> */}
        <p>User Name: {this.props.person.name.first} </p>
      </div>
    );
  }
}

export default PersonDetail;
