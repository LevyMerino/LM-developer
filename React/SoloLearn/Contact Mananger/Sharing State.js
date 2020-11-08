import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm() {
  const [ person, setPerson ] = useState("");
    
   function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person.name} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
const el = (
  <div>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>
);
ReactDOM.render(
  el, 
  document.getElementById('root')
);

/* 
En este momento, nuestro AddPersonForm mantiene su estado de forma independiente. 
¿Cómo podemos agregar un nuevo contacto a nuestra PeopleList entonces, 
cuando se envía el formulario? */

function AddPersonForm() {
  const [ person, setPerson ] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
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
/*
Para lograr eso, necesitamos compartir el estado entre los componentes. 
Podemos hacer eso elevando el estado a un componente principal. 
Esto significa que el componente principal contendrá los datos que deben compartirse
entre los componentes. En nuestro caso, esa es la lista de contactos.

Creemos un componente principal llamado ContactManager, que incluye AddPersonForm y PeopleList 
como componentes secundarios y mantiene la lista de contactos en su estado: */

function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
  
    return (
      <div>
        <AddPersonForm />
        <PeopleList data={contacts} />
      </div>
    );
  } 

  /////////////////


  import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
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

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  return (
    <div>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);