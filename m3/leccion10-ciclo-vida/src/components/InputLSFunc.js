import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';

const InputLSFunc = () => {
  const [text, setText] = useState(localStorage.getItem('textFunc') || 'Girls');
  /*  const [text, setText] = useState('girls');*/
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromApi(text).then((data) => {
      setData(data);
    });
  }, [text]);

  useEffect(() => {
    localStorage.setItem('textFunc', text);
  }, [text]);

  /*   useEffect(() => {
    if (!text) {
      localStorage.removeItem('textFunc');
    }
  }, [text]); */

  const handleInput = (ev) => {
    setText(ev.target.value);
  };

  const renderSeriesObject = () => {
    return data.map((showItem) => {
      return <li key={showItem.id}>{showItem.name}</li>;
    });
  };

  return (
    <div>
      <label htmlFor="text">(Funcional) Pinta algo aquí:</label>
      <input
        type="text"
        name="text"
        id=""
        value={text}
        onChange={handleInput}
      />
      <p>{text}</p>
      <ul>{renderSeriesObject()}</ul>
    </div>
  );
};

export default InputLSFunc;
