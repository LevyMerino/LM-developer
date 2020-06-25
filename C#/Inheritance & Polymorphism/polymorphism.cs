/* Considere tener un programa que permita a los usuarios dibujar 
diferentes formas. Cada forma se dibuja de manera diferente y 
no sabe qué forma elegirá el usuario.
Aquí, el polimorfismo se puede aprovechar para invocar 
el método Draw apropiado de cualquier clase derivada anulando 
el mismo método en la clase base. Dichos métodos deben declararse 
utilizando la palabra clave virtual en la clase base. */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class Shape {
            public virtual void Draw() {
                Console.Write("Base Draw");
            }
        }
        class Circle : Shape {
            public override void Draw() {
                // draw a circle...
                Console.WriteLine("Circle Draw");
            }
        }
        class Rectangle : Shape {
            public override void Draw() {
                // draw a rectangle...
                Console.WriteLine("Rect Draw");
            }
        }
        static void Main(string[] args)
        {
            Shape c = new Circle();
            c.Draw();

            Shape r = new Rectangle();
            r.Draw();
        }
    }
}


/* La forma es la clase base. El círculo es la clase derivada.
Entonces, ¿por qué usar polimorfismo? Podríamos crear 
instancias de cada objeto de su tipo y llamar a su método */

/* El polimorfismo puede ser útil en muchos casos. Por ejemplo, 
podríamos crear un juego en el que tendríamos diferentes tipos
de jugadores con cada jugador con un comportamiento diferente para
el método de ataque.
En este caso, Attack sería un método virtual de la clase base Player 
y cada clase derivada lo anularía. */