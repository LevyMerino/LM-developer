/* Los reductores son funciones que manejan las acciones.
La función toma el estado actual y la acción como parámetros y devuelve el nuevo estado.

Un reductor puede manejar múltiples acciones, por lo que generalmente incluye una declaración
de cambio para cada caso de acción. */

function contactsApp(state, action) {
    switch (action.type) {
      case 'ADD_CONTACT':
        return [ ...state,  action.person ]
      default:
        return state
    }
  }

/* En el código anterior, nuestra función reductora usa una instrucción de cambio para manejar 
las acciones apropiadas. Como caso predeterminado, solo devuelve el estado actual.

Recuerde, el reductor tiene que ser una función pura, lo que significa que no puede 
modificar el estado actual. En su lugar, debe devolver un nuevo objeto de estado. */