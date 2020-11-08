
/* La acción puede verse como cargas útiles de información que envían datos a la tienda.
Las acciones están representadas por un objeto JavaScript simple y deben tener una propiedad 
de tipo: */

{
    type: 'ADD_CONTACT',
    name; 'James'
}


/* En el ejemplo anterior, definimos una acción con el tipo ADD_CONTACT y le proporcionamos 
una propiedad de nombre como su carga útil. */

/* Observe que para el tipo estamos usando todas las letras mayúsculas y palabras separadas por 
guiones bajos. Esto también se llama "caso de serpiente". 
Esta es la forma generalmente aceptada de crear un tipo de acción. */


/* Puede usar cualquier nombre y estructura para las otras propiedades que definen los datos 
en la acción.

Puede, por ejemplo, llamarlo payload y proporcionarle un objeto con los datos: */

{
    type: 'ADD_CONTACT',
    payload; {
        name: "Jimmy Barnes"
    }
 }

 
/* Debe pasar la menor cantidad de datos posible en cada acción. 
Eso mantiene las acciones limpias y fáciles de leer */
