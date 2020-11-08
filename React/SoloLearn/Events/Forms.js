/* Los campos de texto suelen formar parte de un formulario.

Al igual que en el ejemplo anterior, los elementos del formulario React mantienen su estado 
y lo actualizan en función de la entrada del usuario.
De esta forma siempre tienes los datos de tu formulario a tu disposición en el estado.

Para demostrar esto, crearemos un formulario, que agregará números cada vez que 
se envíe el formulario y mostrará la suma.
Nuestro formulario contiene un campo de entrada y un botón de envío: */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

const el = <AddForm />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);


  
/* En el código anterior, el valor de la entrada está controlado por React 
(mantenemos el valor en el estado).
Cuando el formulario se envía mediante el botón enviar, se llama a la función 
handleSubmit, que actualiza el valor de sum en el estado.

Un elemento de formulario de entrada cuyo valor es controlado por React de esta
 manera se denomina "componente controlado". */