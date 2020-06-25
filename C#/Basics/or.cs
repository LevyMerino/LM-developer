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
            int x = 5; int y = 12;
            if(x>10 || y/x > 1)
            {
                Console.Write(y-x);
            }
            else
            {
                Console.Write(y);
            }  
        }
    }
}