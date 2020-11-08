/* En el módulo anterior, creamos una aplicación Contact Manager, que almacena el estado 
en el componente principal y lo pasa a los componentes secundarios correspondientes.

En el mundo real con aplicaciones a mayor escala, esto puede volverse mucho más complejo. 
Es posible que tengamos que transmitir los datos del estado en varios niveles para llegar 
al componente deseado.

Tener que transmitir datos a múltiples niveles de componentes anidados dificultaría la 
comprensión de qué causó un cambio en el estado, ya que podría haber múltiples componentes 
potenciales que pueden cambiar el estado.

Esto también provocaría una gran cantidad de código redundante, lo que dificultaría 
el mantenimiento y la depuración del código. */


/* Redux fue creado para hacer predecible la administración del estado, proporcionando 
un contenedor de estado único y reglas estrictas sobre cómo se puede cambiar el estado.

Redux es una pequeña biblioteca de JavaScript y se puede usar con cualquier marco 
front-end, como React, Angular, jQuery.

Emplea el patrón de "fuente única de verdad".
En resumen, la fuente única de la verdad solo se refiere a reubicar el 
estado de la aplicación y toda la lógica asociada fuera de la aplicación, 
lo que permite que CUALQUIER componente acceda a los datos que necesita. */


/* Tener un contenedor de estado único facilita la administración del estado de su aplicación, 
ya que puede acceder y cambiar los datos desde cualquier componente que lo necesite, 
sin tener que transmitir los datos. */