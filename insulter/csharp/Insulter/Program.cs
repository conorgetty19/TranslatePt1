using System;
using System.Collections.Generic;

Main();

void Main()
{
    //create a list of insults
    //insults is a new instance of List with type string
    List<string> insults = new List<string>
    {
        "You look like what morning breath smells like.",
            "If you tried to give me CPR I would probably throw myself back underwater",
            "I am not a fan of you",
            "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
            "I'd rather walk than be on the same plane as you",
            "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
            "Do you have to be so...like that?"
    };

    //create an empty list to hold indexes, type int
    List<int> indexes = new List<int>();
    //create an instance of the random class and store it in a variable
    Random random = new Random();

    //generate random indices for the index list
    //make sure they are all unique
    while (indexes.Count < 3)
    {
        int candidate = random.Next(0, insults.Count);
        if (!indexes.Contains(candidate))
        {
            indexes.Add(candidate);
        }

    }

    //for each index, print the corresponding chosen insult
    foreach (int index in indexes)
    {
        Console.WriteLine(insults[index]);
    }
}