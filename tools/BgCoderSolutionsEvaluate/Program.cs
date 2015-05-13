namespace BgCoderSolutionsEvaluate
{
    using System;
    using System.Diagnostics;
    using System.IO;

    public static class Program
    {
        private static readonly string TaskName = "Task 2";
        private static readonly string WorkingDirectory = Environment.CurrentDirectory;
        private static readonly string SolutionsFolder = WorkingDirectory + @"\solutions\";
        private static readonly string ReportsDirectory = WorkingDirectory + @"\reports\";
        private static readonly string OutputFile = WorkingDirectory + @"\results.csv";
        private static readonly string ExecutablePath = WorkingDirectory + @"\phantomjs.exe";
        private static readonly string JudgeJsFile = WorkingDirectory + @"\judge.js";
        private static readonly string CssFile = WorkingDirectory + @"\style.css";
        
        public static void Main()
        {
            if (!CheckPreconditions())
            {
                Console.WriteLine("Errors found! Exiting.");
                return;
            }

            var stopwatch = new Stopwatch();
            stopwatch.Start();
            using (var results = new StreamWriter(OutputFile))
            {
                var directories = Directory.GetDirectories(SolutionsFolder);
                foreach (var directory in directories)
                {
                    var username = directory.GetUsername();

                    var sourceFile = string.Format("{0}\\{1}.css", directory, TaskName);
                    if (!File.Exists(sourceFile))
                    {
                        results.WriteLine("{0},{1}", username, 0);
                        Console.WriteLine("{0},{1}", username, 0);
                        continue;
                    }

                    File.Delete(CssFile);
                    File.Copy(sourceFile, CssFile);

                    var process = new Process();
                    process.StartInfo = new ProcessStartInfo(ExecutablePath)
                                            {
                                                UseShellExecute = false,
                                                RedirectStandardOutput = true,
                                                Arguments = string.Format("\"{0}\"", JudgeJsFile),
                                                WorkingDirectory = WorkingDirectory,
                                            };
                    process.Start();

                    var output = process.StandardOutput.ReadToEnd();
                    var checkerOutputFile = ReportsDirectory + string.Format("{0}-checker-report.txt", username);
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

        private static bool CheckPreconditions()
        {
            if (!Directory.Exists(SolutionsFolder))
            {
                Console.WriteLine("Solutions directory not found!");
                Console.WriteLine("Searched in: \"{0}\"", SolutionsFolder);
                return false;
            }

            if (!File.Exists(ExecutablePath))
            {
                Console.WriteLine("phantomjs.exe not found!");
                Console.WriteLine("Searched in: \"{0}\"", ExecutablePath);
                return false;
            }

            if (!File.Exists(JudgeJsFile))
            {
                Console.WriteLine("judge.js file not found!");
                Console.WriteLine("Searched in: \"{0}\"", JudgeJsFile);
                return false;
            }

            Directory.CreateDirectory(ReportsDirectory);

            if (File.Exists(OutputFile))
            {
                File.Delete(OutputFile);
            }

            return true;
        }
    }
}
