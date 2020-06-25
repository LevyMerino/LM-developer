/* value es una palabra clave especial, que representa 
el valor que asignamos a una propiedad utilizando el 
descriptor de acceso establecido.
El nombre de la propiedad puede ser lo que desee, 
pero las convenciones de codificación dictan que 
las propiedades tienen el mismo nombre que el campo 
privado con una letra mayúscula. */

// public string Name { get; set; } Auto

class Person
{
  private string name;
  public string Name
  {
    get { return name; }
    set { name = value; }
  }
}
static void Main(string[] args)
{
  Person p = new Person();
  p.Name = "Bob";
  Console.WriteLine(p.Name);
}