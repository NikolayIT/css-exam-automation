namespace BgCoderSolutionsEvaluate
{
    using System;
    using System.Diagnostics;
    using System.IO;

    // Forgive me for the code quality
    internal class Program
    {
        // private static string workingDirectory = Environment.CurrentDirectory;
        private static string taskName = "Task 1";
        private static string workingDirectory = @"C:\CSS\";
        private static string solutionsFolder = workingDirectory + @"\solutions\";
        private static string reportsDirectory = workingDirectory + @"\reports\";
        private static string outputFile = workingDirectory + @"\results.csv";
        private static string executablePath = workingDirectory + @"\phantomjs.exe";
        private static string judgeJsFile = workingDirectory + @"\judge.js";
        private static string cssFile = workingDirectory + @"\style.css";

        private static void Main()
        {
            Directory.CreateDirectory(reportsDirectory);
            File.Delete(outputFile);
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            using (var results = new StreamWriter(outputFile))
            {
                var directories = Directory.GetDirectories(solutionsFolder);
                foreach (var directory in directories)
                {
                    var username = GetUsername(directory);

                    var sourceFile = string.Format("{0}\\{1}.css", directory, taskName);
                    if (!File.Exists(sourceFile))
                    {
                        results.WriteLine("{0},{1}", username, 0);
                        Console.WriteLine("{0},{1}", username, 0);
                        continue;
                    }

                    File.Delete(cssFile);
                    File.Copy(sourceFile, cssFile);

                    var process = new Process();
                    process.StartInfo = new ProcessStartInfo(executablePath)
                                            {
                                                UseShellExecute = false,
                                                RedirectStandardOutput = true,
                                                Arguments = string.Format("\"{0}\"", judgeJsFile),
                                                WorkingDirectory = workingDirectory,
                                            };
                    process.Start();

                    var output = process.StandardOutput.ReadToEnd();
                    var checkerOutputFile = reportsDirectory + string.Format("{0}-checker-report.txt", username);
                    File.WriteAllText(checkerOutputFile, output);

                    var points = int.Parse(output.GetStringBetween("Total points: ", "/"));
                    if (points < 5)
                    {
                        points = 0;
                    }

                    results.WriteLine("{0},{1}", username, points);
                    Console.WriteLine("{0},{1}", username, points);
                }
            }

            Console.WriteLine(stopwatch.Elapsed);
        }

        private static string GetUsername(string path)
        {
            var directoryName = Path.GetFileName(path);
            var indexOfBracket = directoryName.IndexOf("(", StringComparison.Ordinal);
            var username = directoryName.Substring(0, indexOfBracket).Trim();
            return username;
        }
    }
}
