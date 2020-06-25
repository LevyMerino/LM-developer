/* Utilizamos la encapsulación para ocultar el miembro de 
equilibrio del código externo. Luego proporcionamos acceso 
restringido a él utilizando métodos públicos. Los datos de 
la clase pueden leerse a través del método GetBalance y 
modificarse solo a través de los métodos de Depósito y Retirada.
 */

/*  En resumen, los beneficios de la encapsulación son:
- Controlar la forma en que se accede o modifica los datos.
- El código es más flexible y fácil de cambiar con nuevos requisitos.
- Cambie una parte del código sin afectar otras partes del código. */


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoloLearn
{
    class BankAccount {
        private double balance=0;
        public void Deposit(double n) {
            balance += n;
        }
        public void Withdraw(double n) {
            balance -= n;
        }
        public double GetBalance() {
            return balance;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            BankAccount b = new BankAccount();
            b.Deposit(199);
            b.Withdraw(42);
            Console.WriteLine(b.GetBalance());
        }
    }
}