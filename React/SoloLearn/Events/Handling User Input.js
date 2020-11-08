/* Una de las formas más comunes en que los usuarios interactúan con las páginas web
 es a través de campos de texto.

Podemos manejar la entrada del usuario en React usando el evento onChange del campo de texto.
Cuando cambia el valor del campo de texto, se llama al controlador de eventos, actualizando 
el valor del campo en el estado del componente.
De esta forma siempre tendrá el valor real del campo de texto en el estado.

Hagamos una aplicación para convertir kilómetros a millas. Tomaremos 
el valor de Km de un campo de texto y calcularemos el valor de millas al ingresar: */

function Converter() {
    const [km, setKm] = useState(0);
  
    function handleChange(e) {
      setKm(e.target.value);
    }
    function convert(km) {
      return (km/1.609).toFixed(2);
    }
  
    return <div>
    <input type="text" value={km}
       onChange={handleChange} />
    <p> {km} km is {convert(km)} miles </p>
    </div>;
  }