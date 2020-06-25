using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class Dog
        {
            public static void Bark() {
                Console.WriteLine("Woof");
            }
        }
        static void Main(string[] args)
        {
            Dog.Bark();
        }
    }
}