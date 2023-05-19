using System;

Main();

void Main()
{
    //iterate through 1-100
    //if number is evenly divisible by 15, fizzbuzz
    //if by 3, fizz
    //if by 5, buzz
    //else just print number
    for (int i = 1; i <= 100; i++)
    {
        if (i % 15 == 0)
        {
            Console.WriteLine("fizzbuzz");
        }
        else if (i % 3 == 0)
        {
            Console.WriteLine("fizz");
        }
        else if (i % 5 == 0)
        {
            Console.WriteLine("buzz");
        }
        else
        {
            Console.WriteLine(i);
        }
    }
}