/* En este punto, hemos creado nuestra acción, el reductor, la tienda, 
y la hemos puesto a disposición de nuestro componente Contador utilizando el elemento Proveedor.

Para conectar nuestro componente a la tienda, necesitamos llamar a la función connect ().
La función connect () devuelve un nuevo componente, que envuelve el componente que le pasó 
y lo conecta a la tienda usando sus funciones de parámetros especiales. */

// function connect(mapStateToProps?, mapDispatchToProps?) 

// connect () toma dos parámetros opcionales:


/* mapStateToProps
Esta función se llama cada vez que cambia el estado de la tienda. 
Recibe el estado como parámetro y devuelve el estado del componente.
Por ejemplo, para nuestro Contador, necesitamos devolver la variable de estado de conteo: */

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }


/*   ¡Ahora, nuestro componente puede acceder a la variable count usando sus accesorios! 
  Tal como indica el nombre de la función, asigna el estado a los accesorios.

  mapDispatchToProps
  Como puede haber adivinado por el nombre, este parámetro se usa para mapear 
  las funciones de envío a los accesorios.
  Puede ser un objeto simple, definiendo la función que necesita ser mapeada: */

  const mapDispatchToProps = {
    incrementCounter
  }


  /* Esto puede parecer un poco confuso, pero es muy sencillo: mapStateToProps simplemente devuelve 
  las variables de estado como accesorios a nuestro componente, mientras que mapDispatchToProps 
  permite definir cómo enviamos acciones y hacer que las funciones de envío estén disponibles 
  como accesorios.

  Ambos son opcionales, ya que, por ejemplo, es posible que su componente solo necesite 
  leerse en la tienda.
 */

/* mapDispatchToProps también se puede definir como una función. Consulte la documentación 
oficial para obtener más detalles.
Tenga en cuenta que necesitamos importar la función de conexión: importar {connect} 
desde 'react-redux'; */