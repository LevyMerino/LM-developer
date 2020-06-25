/* Las estructuras pueden contener métodos, 
propiedades, indexadores, etc. Las estructuras 
no pueden contener constructores predeterminados 
(un constructor sin parámetros), pero pueden tener 
constructores que tomen parámetros. En ese caso, 
la nueva palabra clave se utiliza para crear una 
instancia de un objeto de estructura, similar a los 
objetos de clase */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        struct Point {
            public int x;
            public int y;
            public Point(int x, int y) {
                this.x = x;
                this.y = y;
            }
        }
        static void Main(string[] args)
        {
            Point p = new Point(10, 15);
            Console.WriteLine(p.x);
        }
    }
}

/* Considere definir una estructura en lugar de una clase 
si está tratando de representar un conjunto simple de datos. */

