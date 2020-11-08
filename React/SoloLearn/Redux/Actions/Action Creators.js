
/* Para usar la misma acción con diferentes cargas útiles, 
así como para crear código reutilizable, podemos crear creadores de acciones.

Los creadores de acciones son funciones simples que devuelven acciones. */

function addContact(person) {
    return {
      type: 'ADD_CONTACT',
      payload: person
    }
  }

/* La función creadora de acciones toma un parámetro de persona y lo usa como carga útil de acciones.
Ahora, podemos usar el creador de acciones para crear múltiples contactos nuevos pasándole los datos
correspondientes. */


/* Los creadores de acciones no están integrados en la biblioteca de Redux de forma predeterminada. 
Es un patrón que se implementó para crear código que refleja un enfoque más 
DRY (Don't Repeat Yourself) */