
/* Hasta este punto, hemos aprendido cómo pasar datos a componentes usando accesorios.

Muchas aplicaciones web necesitan sus componentes para cambiar sus datos, por ejemplo, 
después de la interacción del usuario (hacer clic en un botón, enviar un formulario, etc.).
Sin embargo, los accesorios no se pueden cambiar.

Para permitir que los componentes administren y cambien sus datos, React proporciona 
una función llamada estado.
El estado es un objeto que se agrega como propiedad en los componentes de la clase. */

class Hello extends React.Component {
    state = {
      name: "James"
    }
  
    render() {
      return <h1>Hello {this.state.name}.</h1>;
    }
  }

  
  // Changing State

  /* El estado no debe modificarse directamente. En cambio, React proporciona un método 
  setState (), que puede usarse para modificar el estado. */

  this.setState({ 
    name: "James",
    age: 25
  }); 

  
/* Debe pasar un objeto con los nuevos pares clave: valor al método setState.

¿Por qué deberíamos usar setState, en lugar de simplemente cambiar los valores de 
las propiedades del objeto directamente?
La respuesta descubre una de las características más útiles de React: cuando se llama a 
setState, React vuelve a renderizar automáticamente el componente afectado con el nuevo estado.

Normalmente, el cambio de estado ocurre en los controladores de eventos.  */