let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Desctruturar en una funcion

let a = () => {
    return [1, 3, 2];
  };
  
  let [one, , two] = a();

  //

    let a, b, c = 4, d = 8;
    [a, b = 6] = [2]; // a = 2, b = 6

    [c, d] = [d, c]; // c = 8, d = 4


    // destructuring con objetos
    let obj = {h:100, s: true};
    let {h, s} = obj;
    
    console.log(h); // 100
    console.log(s); // true

    //

    let a, b;
    ({a, b} = {a: 'Hello ', b: 'Jack'});

    console.log(a + b); // Hello Jack
    
    //

    let {a, b} = {a: 'Hello ', b: 'Jack'};
    console.log(a + b);

    
    // 
    
    var o = {h: 42, s: true};
    var {h: foo, s: bar} = o;
    
    //console.log(h); // Error
    console.log(foo); // 42
    
    //

    var obj = {id: 42, name: "Jack"};

    let {id = 10, age = 20} = obj;

    console.log(id); // 42
    console.log(age); // 20
    
    