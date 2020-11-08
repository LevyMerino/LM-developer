/* El manejo de eventos en React es muy similar al manejo de eventos en DOM.

La única diferencia es que los nombres de eventos usan la sintaxis de camelCase y 
el controlador de eventos 
debe pasarse entre llaves. */

<button onClick={handleClick}>
  My Button
</button> 


//////////////////

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);