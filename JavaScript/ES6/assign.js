let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2

// 

let person = {
    name: 'Jack',
    age: 18,
    type: true
};

let newPerson = person;
newPerson.name = 'Bob';
newPerson.type = false;

console.log(person.name); // Bob
console.log(person.type); // false
console.log(newPerson.name); // Bob

/////////////////////

let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = Object.assign({}, person); 
  newPerson.name = 'Bob';
  
  console.log(person.name); // Jack
  console.log(newPerson.name); // Bob

  /////////

  let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = Object.assign({}, person, {name: 'Bob'});