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
            int mark = 85;
            
            if (mark < 50) 
            {
                Console.WriteLine("You failed.");
            }
            else
            {
                Console.WriteLine("You passed.");
            }
            // 

            mark = 100;

            if (mark >= 50) {
            Console.WriteLine("You passed.");
            if (mark == 100) {
                Console.WriteLine("Perfect!");
            }
            }
            else {
            Console.WriteLine("You failed.");
            }

            /*Outputs
            You passed.
            Perfect! */


            // 

            int x = 33;

            if (x == 8) {
            Console.WriteLine("Value of x is 8");
            }
            else if (x == 18) {
            Console.WriteLine("Value of x is 18");
            }
            else if (x == 33) {
            Console.WriteLine("Value of x is 33");
            }
            else {
            Console.WriteLine("No match");
            }
            //Outputs "Value of x is 33"
        }
    }
}