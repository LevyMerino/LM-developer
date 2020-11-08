/* Para crear la tienda, llamamos a la función createStore (), que toma el reductor como parámetro: */

const store = createStore(reducer);


/* Pero, ¿cómo pasamos la tienda a nuestros componentes?
Eso se logra utilizando un elemento <Provider> especial. 
Hace que la tienda esté disponible para cualquier componente hijo anidado. */

const el = <Provider store={store}>
    <Counter/>
  </Provider>; 

/* El proveedor toma la tienda como un atributo y la pone a disposición de su componente secundario. */


/* Necesitamos importar {createStore} y {Provider} usando la siguiente sintaxis:
importar {Provider} de 'react-redux';
importar {createStore} desde 'redux'; */