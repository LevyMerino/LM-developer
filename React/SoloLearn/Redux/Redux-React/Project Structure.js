
/* En nuestro ejemplo de Counter, escribimos el código completo en un solo archivo fuente.
Por lo general, las aplicaciones web contienen múltiples componentes, reductores y acciones.

Para que nuestro proyecto sea más manejable, podemos usar archivos de origen (y carpetas) 
separados para componentes, reductores y acciones.
Por ejemplo, podemos mover nuestro componente Contador y la función de creación de acciones a un 
archivo Counter.js separado.

Para usar el componente Counter en nuestro index.js, primero debemos exportarlo: */


// Para usar el componente Counter en nuestro index.js, primero debemos exportarlo:

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 


/* Observe, exportamos el componente conectado.
Ahora, podemos importar el componente en index.js: */

import Counter from './Counter'; 