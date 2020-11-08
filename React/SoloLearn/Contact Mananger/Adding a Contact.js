/* 
Ahora, podemos crear una función addPerson () a nuestro componente ContactManager 
para agregar una nueva persona a nuestra matriz 
de estado de contactos: */

function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
  
    function addPerson(name) {
      setContacts([...contacts, name]);
    }
   // ...
  } 

/* Pero, ¿cómo vamos a llamar a esta función desde nuestro componente secundario AddPersonForm,.
donde se almacenan los datos de la nueva persona?
Al igual que pasamos datos usando propiedades, ¡React nos permite transmitir referencias 
de funciones! */

function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
  
    function addPerson(name) {
      setContacts([...contacts, name]);
    }
  
    return (
      <div>
        <AddPersonForm handleSubmit={addPerson} />
        <PeopleList data={contacts} />
      </div>
    );
  } 

  
/* De manera similar a pasar la lista de contactos a nuestro componente PeopleList, 
pasamos la función addPerson () a nuestro AddPersonForm usando un accesorio llamado handleSubmit.

Ahora, nuestra PeopleList puede llamar a la función handleSubmit que recibió cuando se envió el 
formulario, para agregar una nueva persona a la lista: */

function AddPersonForm(props) {
    const [ person, setPerson ] = useState('');
      
    function handleChange(e) {
      setPerson(e.target.value);
    }
      
    function handleSubmit(e) {
      props.handleSubmit(person);
      setPerson('');
      e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add new contact" 
          onChange={handleChange} 
          value={person} />
        <button type="submit">Add</button>
      </form>
    );
  } 
  
/* Una conclusión importante de esta lección es que los accesorios se pueden usar
para transmitir no solo el estado, sino también las funciones que pueden manipular el estado.
De esta manera, podemos almacenar el estado de la aplicación en el padre y permitir
que sus componentes secundarios usen y manipulen el estado. */