/* Los métodos de ciclo de vida que cubrimos solo están disponibles para componentes de clase.
Sin embargo, React proporciona un Hook especial llamado useEffect para hacer que los 
métodos del ciclo de vida estén disponibles en componentes funcionales. 
Combina los métodos componentDidMount, componentDidUpdate y componentWillUnmount en uno. */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Number of clicks: " + counter);
  });

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