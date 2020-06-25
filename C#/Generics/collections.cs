
/* Una colección se usa para agrupar objetos relacionados. 
A diferencia de una matriz, es dinámica y también puede 
agrupar objetos. Una colección puede crecer y reducirse 
para acomodar cualquier cantidad de objetos. Las clases de 
colección están organizadas en espacios de nombres y contienen 
métodos integrados para procesar elementos dentro de la colección. */

List<int> li = new List<int>();


Dictionary<string, int> d = new Dictionary<string, int>();
d.Add("Uno", 1);
d.Add("One", 1);
...
d.Remove("One");  // Remove key-value pair One, 1
...
Console.WriteLine("Dictionary: ");
foreach (string s in d.Keys)
    Console.WriteLine(s + ": " + d[s]);  // Uno: 1  Deux: 2
Console.WriteLine("\nCount: {0}", d.Count); // 2 