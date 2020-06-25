using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class Program
    {
        class Person {
            public void Speak() {
                Console.WriteLine("Hi there");
            }
        }
        class Student : Person {
            int number;
        }
        static void Main(string[] args)
        {
            Student s = new Student();
            s.Speak();
        }
    }
}