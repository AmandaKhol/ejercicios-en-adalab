import React, { useState } from 'react';
import data from '../data/data.json';

const Palette = () => {
  const [collapsable, setCollapsabe] = useState({ id: '1-93-po', state: true });
  const dataCleaned = data.palettes;

  const handleClick = (ev) => {
    let newState = true;
    console.log(collapsable.state);
    /*     if (collapsable === ev.currentTarget.id) {
      console.log(collapsable);
      newState = !collapsable;
    } */
    setCollapsabe({
      id: ev.currentTarget.id,
      state: newState,
    });
  };

  function paintPalette() {
    const palettes = dataCleaned.map((palette) => (
      <div
        key={palette.id}
        id={palette.id}
        className="palette"
        onClick={handleClick}
      >
        <p className="name">{palette.name}</p>
        {collapsable.id === palette.id && collapsable.state ? (
          <p className="collapsable">From: {palette.from}</p>
        ) : (
          <p className="collapsable hidden">From: {palette.from}</p>
        )}
      </div>
    ));
    return palettes;
  }
  return <div>{paintPalette()}</div>;
};

export default Palette;
