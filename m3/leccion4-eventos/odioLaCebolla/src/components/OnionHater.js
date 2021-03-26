import React from 'react';

let classInput = 'noHateOnion';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
  }

  onKeyUpListener(ev) {
    ev.target.value.toLowerCase().includes('cebolla')
      ? (classInput = 'hateOnion')
      : (classInput = 'noHateOnion');
    this.forceUpdate();
  }

  render() {
    return (
      <textarea
        className={classInput}
        name=""
        id=""
        cols="30"
        rows="10"
        onKeyUp={this.onKeyUpListener}
      ></textarea>
    );
  }
}

export default OnionHater;
