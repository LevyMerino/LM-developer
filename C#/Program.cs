using System.Text.Json;
using System.Text.Json.Serialization;
using System;

namespace C_
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    public class WeatherForecast
    {   
        
        public DateTimeOffset Date { get; set; } 
        public int TemperatureCelsius { get; set; }
        public string Summary { get; set; }
    }
}
