
/* El operador?: Funciona de la siguiente manera: se evalúa 
Exp1. Si es cierto, entonces Exp2 se evalúa y se convierte 
en el valor de toda la expresión. Si Exp1 es falso, se evalúa 
Exp3 y su valor se convierte en el valor de la expresión */

int age = 42;
string msg;
msg = (age >= 18) ? "Welcome" : "Sorry";
Console.WriteLine(msg);