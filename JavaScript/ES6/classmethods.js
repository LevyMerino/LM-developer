class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() { // area es un captador
      return this.calcArea();
    }
    calcArea() {
      return this.height * this.width;
    }
  }
  const square = new Rectangle(5, 5);
  console.log(square.area); // 25

//   el método estático, que no se puede llamar a través 
//   de una instancia de clase. Los métodos estáticos se 
//   utilizan a menudo para crear funciones de utilidad 
//   para una aplicación.

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }
  const p1 = new Point(7, 2);
  const p2 = new Point(3, 8);
  
  console.log(Point.distance(p1, p2));