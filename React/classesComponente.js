/* Los componentes de la clase se utilizan normalmente cuando hay interacciones 
de usuario más avanzadas, como formularios y animaciones.
Todos los componentes de la clase deben ampliar la clase React.Component.
Podemos reescribir nuestro componente funcional Hello como un componente de clase */

class Hello extends React.Component {
    render() {
      return <h1>Hello world.</h1>;
    }
  } 