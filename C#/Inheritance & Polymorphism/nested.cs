
// C # admite clases anidadas: una clase que es miembro de otra clase.

class Car {
  string name;
  public Car(string nm) {
    name = nm;
    Motor m = new Motor();
  }
  public class Motor {
    // some code
  }
}