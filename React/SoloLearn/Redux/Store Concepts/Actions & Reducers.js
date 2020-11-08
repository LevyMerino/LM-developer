
// Una acción es solo un objeto JavaScript simple:

{ 
    type: 'ADD_CONTACT', 
    name; 'James' 
}

/* El código anterior define una acción con el tipo ADD_CONTACT y una propiedad de nombre.

Una acción describe claramente por qué ocurrió el cambio de estado y puede enviarse desde 
cualquier lugar de su aplicación.

En este punto, solo tenemos una tienda, que incluye nuestros datos de estado y un objeto, 
que incluye algunos datos que deben cambiarse en el estado. Entonces, ¿cómo realizamos el cambio?
Para unir la tienda y la acción, necesitamos escribir una función, llamada reductor.
Toma el estado y la acción como argumentos y devuelve el siguiente estado de la aplicación. */

function contactsApp(state, action) {
    if (action.type === 'ADD_CONTACT') {
      return [ ...state,  action.name ]
    } else {
      return state
    }
  }

  
/* El código anterior define una función reductora simple, que verifica la acción y 
devuelve el nuevo estado.

Estos conceptos son básicamente la idea de Redux: mantienes el 
estado global en una tienda, defines acciones para describir qué cambiar en la tienda y 
escribes funciones reductoras para manejar esas acciones. */


/* Conceptos básicos

Redux se puede describir utilizando los siguientes principios:

Fuente única de verdad
El estado global de la aplicación se almacena en una única tienda.

El estado es de solo lectura
Puede cambiar el estado solo enviando acciones. Las acciones son objetos 
que contienen información sobre lo que se debe cambiar.

Reductores puros
Los reductores son funciones que manejan las acciones y devuelven el siguiente estado 
de la aplicación. Los reductores deben ser puros, lo que significa que no pueden modificar el estado,
 deben devolver un nuevo objeto de estado. */