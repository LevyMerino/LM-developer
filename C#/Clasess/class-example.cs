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
            public string name;
            public int age;
         }
        // 
        class Person 
        {
            int age;
            string name;
            public void SayHi() {
            Console.WriteLine("Hi");
          }
        }
        static void Main(string[] args)
        {
            Person p1 = new Person();
            p1.SayHi();

              Dog bob = new Dog();
              bob.name = "Bobby";
              bob.age = 3;
  
            Console.WriteLine(bob.age);
        }
    }
}