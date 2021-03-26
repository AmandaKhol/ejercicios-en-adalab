import React from 'react';

class Destiny extends React.Component {
  render() {
    const onChangeListener = (ev) => {
      ev.target.value !== ''
        ? alert(`Tu destino es viajar a ${ev.target.value}`)
        : alert('Selecciona un destino');
    };
    return (
      <select
        className="destiny-select"
        name="destiny"
        id=""
        onChange={onChangeListener}
      >
        <option value=""></option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sidney">Sidney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}

export default Destiny;
