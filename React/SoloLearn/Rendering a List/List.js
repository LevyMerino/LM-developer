/* Las aplicaciones web suelen contener elementos repetidos, como listas o secciones, 
donde el mismo elemento DOM se repite con un conjunto de datos diferente.

Considere una matriz de cadenas: */

const arr = ["A", "B", "C"];

/* Necesitamos representar un elemento de lista <li> para cada elemento de la matriz.
Podemos definir un componente MyList y pasarle la matriz como un accesorio usando 
un atributo de datos personalizado: */

<MyList data={arr}/>

/* Ahora, cuando se puede acceder a la matriz a través de accesorios, 
podemos escribir la lógica del componente: */

function MyList(props) {
    const arr = props.data;
    const listItems = arr.map((val) =>
      <li>{val}</li>
    );
    return <ul>{listItems}</ul>;
  }

/* Tomamos la matriz de entrada de los accesorios entrantes, recorremos 
la matriz usando la función de mapa de JavaScript y devolvemos un elemento <li> 
para cada elemento.
La matriz resultante se almacena en la variable listItems.
Luego, el componente devuelve la matriz listItems dentro de una etiqueta <ul>. */

