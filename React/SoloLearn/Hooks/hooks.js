
/* La versión anterior de React permitía usar el estado solo con componentes de clase.
En iteraciones recientes de React, se introdujo una nueva característica llamada hooks,
que permite usar el estado dentro de los componentes funcionales. */

import React, { useState } from 'react'; 

/* useState devuelve un par, el valor del estado actual y una función, que 
le permite cambiar el estado.
useState toma un argumento, que es el valor inicial del estado. */

function Hello() {
    const [name, setName] = useState("David");
  
    return <h1>Hello {name}.</h1>;
  }

/* En el ejemplo anterior, creamos una variable de estado de nombre y una función setName. 
La sintaxis de los corchetes se denomina desestructuración de matrices.
Asigna la variable de nombre al valor del estado actual y setName a la función que 
permite cambiar el estado. Puede nombrar estas variables como desee.
Luego, pasamos "David" como el valor inicial de nuestra variable de nombre para useState ().
 */