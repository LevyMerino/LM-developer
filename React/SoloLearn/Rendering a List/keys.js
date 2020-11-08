/* Cada elemento de una lista debe tener un atributo clave.
Las claves actúan como una identidad única, identificando cada elemento.
Por lo general, estos son ID de sus datos o pueden ser índices generados automáticamente.. */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el = <MyList data={arr} />; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);