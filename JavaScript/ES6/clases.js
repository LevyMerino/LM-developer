class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 

// Crear clase con la palabra class

var Square = class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

//    En la expresión de clase sin nombre, a una 
//    variable simplemente se le asigna la definición de clase

var Square = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };