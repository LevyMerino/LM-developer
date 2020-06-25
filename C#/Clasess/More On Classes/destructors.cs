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
            public Dog() {
                Console.WriteLine("Constructor");
            }
            ~Dog() {
                Console.WriteLine("Destructor");
            }
        }
        static void Main(string[] args)
        {
            Dog d = new Dog();
        }
    }
}