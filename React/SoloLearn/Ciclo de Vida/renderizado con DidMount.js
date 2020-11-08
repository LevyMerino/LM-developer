/* Dado el código siguiente, ¿cuál será el valor de x después de que se haya 
renderizado <div> <Prueba /> <Prueba /> </div> 
en la página? */

let x = 0;
class Test extends React.Component {
  componentDidMount() {
    x+=3;
  }
  render() {
    return null;
  }
}

// R = 6