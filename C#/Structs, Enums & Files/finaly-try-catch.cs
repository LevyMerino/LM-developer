/* Se puede usar un bloque final opcional después de los bloques catch.
El último bloque se usa para ejecutar un conjunto dado de declaraciones,
ya sea que se lance una excepción o no. */

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
            int result=0;
            int num1 = 8;
            int num2 = 2;
            try {
                result = num1 / num2;
            }
            catch (DivideByZeroException e) {
                Console.WriteLine("Error");
            }
            finally {
                Console.WriteLine(result); // Output 2
            }
        }
    }
}