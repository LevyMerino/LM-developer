using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class SomeClass {
            public static int X { get; set; }
            public static int Y { get; set; }
            
            static SomeClass() {
                X = 10;
                Y = 20;
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine(SomeClass.X);
        }
    }
}

/* class Person {
  public static int Age { get; set; }
  static Person() {
    Age = 0;
  }
} */