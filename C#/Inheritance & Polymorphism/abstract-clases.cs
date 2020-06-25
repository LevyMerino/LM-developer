/* 
Las clases abstractas tienen las siguientes características:
- Una clase abstracta no puede ser instanciada.
- Una clase abstracta puede contener métodos abstractos y accesores.
- Una clase no abstracta derivada de una clase abstracta debe incluir 
implementaciones reales de todos los métodos y accesos abstractos 
heredados
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        abstract class Shape {
            public abstract void Draw();
        }
        class Circle : Shape {
            public override void Draw() {
                Console.WriteLine("Circle Draw");
            }
        }
        class Rectangle : Shape {
            public override void Draw() {
                Console.WriteLine("Rect Draw");
            }
        }
        static void Main(string[] args)
        {
            Shape c = new Circle();
            c.Draw();
        }
    }
}