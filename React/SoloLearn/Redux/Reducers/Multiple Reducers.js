/* 
Si tiene más de una entidad (es decir, usuarios, productos, facturas, pedidos, etc.), 
generalmente es una buena idea dividirlos en múltiples funciones de reducción para separar 
preocupaciones.

Redux nos da un método que podemos usar llamado combineReducers. Esto nos permite usar 
más de un reductor para que cuando se envíe una acción, la acción se ejecute a través de
 todos los reductores en lugar de solo uno. También nos permite separar las preocupaciones del 
 estado de nuestra tienda. */

 const contactsApp = combineReducers({
    addContacts,
    doSomething
  })

  
/* Es una buena práctica proporcionar a cada reductor solo la parte del estado que necesita administrar. 
Esto se denomina composición reductora y es un patrón fundamental para crear aplicaciones Redux. */