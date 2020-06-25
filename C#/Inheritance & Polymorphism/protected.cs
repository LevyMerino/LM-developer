
Hasta este momento, hemos trabajado exclusivamente con modificadores 
de acceso públicos y privados.
Se puede acceder a los miembros públicos desde cualquier 
lugar fuera de la clase, mientras que el acceso a los miembros 
privados se limita a su clase.
El modificador de acceso protegido es muy similar al privado con 
una diferencia; Se puede acceder en las clases derivadas. 
Por lo tanto, un miembro protegido solo es accesible desde clases 
derivadas.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class Person {
            protected int Age {get; set;}
            protected string Name {get; set;}
        }
        class Student : Person {
            public Student(string nm) {
                Name = nm;
            }
            public void Speak() {
                Console.Write("Name: "+Name);
            }
        }
        static void Main(string[] args)
        {
            Student s = new Student("David");
            s.Speak();
        }
    }
}