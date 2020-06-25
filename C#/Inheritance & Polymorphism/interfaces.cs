/* Una interfaz es una clase completamente abstracta, que contiene 
solo miembros abstractos.
Se declara utilizando la palabra clave de interfaz:

Todos los miembros de la interfaz son abstractos de forma 
predeterminada, por lo que no es 
necesario utilizar la palabra clave abstract. */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        public interface IShape {
            void Draw();
        }
        class Circle : IShape {
            public void Draw() {
                Console.WriteLine("Circle Draw");
            }
        }
        static void Main(string[] args)
        {
            IShape c = new Circle();
            c.Draw();
        }
    }
}