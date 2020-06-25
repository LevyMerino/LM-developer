/* .NET Framework usa espacios de nombres para organizar 
sus muchas clases. El sistema es un ejemplo de un 
espacio de nombres de .NET Framework.
Declarar sus propios espacios de nombres puede ayudarlo a 
agrupar sus nombres de clase y método en proyectos de 
programación más grandes. */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hi");
        }
    }
}


/* Without the using statement, we would have to specify the namespace
wherever it is used:
System.Console.WriteLine("Hi"); */
