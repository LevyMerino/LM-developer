int x, y;
try {
  x = Convert.ToInt32(Console.Read());
  y = Convert.ToInt32(Console.Read());
  Console.WriteLine(x / y);
}
catch (DivideByZeroException e) {
  Console.WriteLine("Cannot divide by 0");
}
catch(Exception e) {
  Console.WriteLine("An error occurred");
}

/* The following exception types are some of the most commonly 
used: 
FileNotFoundException, 
FormatException, 
IndexOutOfRangeException, 
InvalidOperationException, 
OutOfMemoryException. */