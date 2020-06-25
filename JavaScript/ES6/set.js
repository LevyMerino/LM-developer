
// Un objeto Set se puede usar para mantener valores únicos 
// (no se permiten repeticiones).
// Un valor en un conjunto puede ser cualquier cosa 
// (objetos y valores primitivos).

let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5


// Methods
// add(value) Adds a new element with the given value to the Set.
// delete(value) Deletes a specified value from the set.
// has(value) Returns true if a specified value exists in the set and false otherwise.
// clear() Clears the set.
// values() Returns an Iterator of values in the set.

let set = new Set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
  console.log(v);