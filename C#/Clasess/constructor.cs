/* Un constructor de clase es un método miembro especial 
de una clase que se ejecuta cada vez 
que se crea un nuevo objeto de esa clase.
Un constructor tiene exactamente el mismo nombre que 
su clase, es público y no tiene ningún tipo de retorno. */

class Person
{
  private int age;
  private string name;
  public Person(string nm)
  {
    name = nm;
  }
  public string getName()
  {
    return name;
  }
}
static void Main(string[] args)
 {
  Person p = new Person("David");
  p.nm("Juan");
  Console.WriteLine(p.getName());
}
//Outputs "David"