using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Para grupos de constates con nombre 
// enum estaciones {primavera, invierno}; 

namespace SoloLearn
{
    class Program
    {
        enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }; 
        // enum Days {Sun, Mon, Tue=4, Wed, Thu, Fri, Sat}; 
        static void Main(string[] args)
        {
            int x = (int)Days.Tue;
            Console.WriteLine(x);
        }
    }
}


enum TrafficLights { Green, Red, Yellow };

static void Main(string[] args) {
  TrafficLights x = TrafficLights.Red;
  switch (x) {
    case TrafficLights.Green:
      Console.WriteLine("Go!");
      break;
    case TrafficLights.Red:
      Console.WriteLine("Stop!");
      break;
    case TrafficLights.Yellow:
      Console.WriteLine("Caution!");
      break;
  }
  //Outputs "Stop!"
}