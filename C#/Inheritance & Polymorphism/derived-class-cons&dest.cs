/* Se llama a los constructores cuando se crean objetos de una clase. 
Con la herencia, el constructor de la clase base y el destructor 
no se heredan, por lo que debe definir constructores para las clases 
derivadas.
Sin embargo, el constructor y el destructor de la clase base se invocan 
automáticamente cuando se crea o elimina un objeto de la clase derivada.
using System; */
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class Animal {
            public Animal() {
                Console.WriteLine("Animal created");
            }
            ~Animal() {
                Console.WriteLine("Animal deleted");
            }
        }
        class Dog: Animal {
            public Dog() {
                Console.WriteLine("Dog created");
            }
            ~Dog() {
                Console.WriteLine("Dog deleted");
            }
        }
        static void Main(string[] args)
        {
            Dog d = new Dog();
        }
    }
}


/*Outputs
Animal created
Dog created
Dog deleted
Animal deleted
*/