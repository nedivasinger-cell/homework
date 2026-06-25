using System;
namespace csharpquiz
{
	public class Shirt
	{
		public string Color { get; set; }
		public string Pattern { get; set; }
		public Shirt(string color, string pattern)
		{
			Color = color;
			Pattern = pattern;
		}
	}
}
namespace csharpquiz;

class Program
{
    static void Main(string[] args)
    {
        string[] colors = { "red", "green", "blue" };
        string[] patterns = { "striped", "checked", "plain" };
        Shirt[] shirts = new Shirt[9];
        int counter = 0;
        for(int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                shirts[counter++] = new Shirt(colors[i], patterns[j]);
            }
        }
        for (int i = 0; i < shirts.Length; i++)
        {
            Console.WriteLine(shirts[i].Color + ": " + shirts[i].Pattern);
        }


    }
}