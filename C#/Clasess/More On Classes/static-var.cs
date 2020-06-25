
/* No importa cuántos objetos Cat se instancian, siempre hay 
una sola variable de conteo que pertenece a la clase Cat 
porque se declaró estática. */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class Cat {
            public static int count=0;
            public Cat() {
                count++;
            }
        }
        static void Main(string[] args)
        {
            Cat c1 = new Cat();
            Cat c2 = new Cat();
            Console.WriteLine(Cat.count);
        }
    }
}