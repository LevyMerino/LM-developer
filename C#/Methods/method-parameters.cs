using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        static void Func(int x)
        {
            Console.WriteLine(x*2);
        }
        static void Main(string[] args)
        {
            Func(5);
  
            Func(12);

            Func(42);
        }
    }
}