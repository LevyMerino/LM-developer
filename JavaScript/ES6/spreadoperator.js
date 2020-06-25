
// ES6 proporciona una manera fácil de hacer el ejemplo 
// anterior con operadores de propagación:

const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
  };
  let args = [1, 2, 3];
  myFunction(...args, 4);