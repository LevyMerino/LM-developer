// Un Objeto es similar a un Mapa, pero existen diferencias 
// importantes que hacen preferible usar un Mapa en ciertos casos:
// 1) Las teclas pueden ser de cualquier tipo, incluidas 
// funciones, objetos y cualquier primitiva.
// 2) Puede obtener el tamaño de un mapa.
// 3) Puede iterar directamente sobre el mapa.
// 4) El rendimiento del mapa es mejor en escenarios que 
// implican la adición y eliminación frecuente de pares clave / valor.

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

// 

// Methods
// set(key, value) Adds a specified key/value pair to the map. 
// If the specified key already exists, value corresponding to 
// it is replaced with the specified value.
// get(key) Gets the value corresponding to a specified key 
// in the map. If the specified key doesn't exist, undefined is returned.
// has(key) Returns true if a specified key exists in the map and false 
// otherwise.
// delete(key) Deletes the key/value pair with a specified key from the
//  map and returns true. Returns false if the element does not exist.
// clear() Removes all key/value pairs from map.
// keys() Returns an Iterator of keys in the map for each element.
// values() Returns an Iterator of values in the map for each element.
// entries() Returns an Iterator of array[key, value] in the map 
// for each element.

let map = new Map();

map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);