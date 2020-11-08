/* React proporciona métodos de ciclo de vida especiales para los componentes de la clase, que 
se llaman cuando
 los componentes se montan, actualizan o desmontan.

El montaje es el proceso en el que se representa un componente en la página.
El desmontaje es el proceso en el que se elimina un componente de la página.

El método componentDidMount se llama cuando se representa un componente en la página.

Por ejemplo, podemos usar componentDidMount en nuestra aplicación Contador para establecer 
el valor inicial del contador: */

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidMount() {
    this.setState({counter: 42});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);