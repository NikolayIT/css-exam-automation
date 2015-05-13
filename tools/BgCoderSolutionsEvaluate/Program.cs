namespace BgCoderSolutionsEvaluate
{
    using System;
    using System.Diagnostics;
    using System.IO;

    // Forgive me for the code quality
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
            Directory.CreateDirectory(ReportsDirectory);
            File.Delete(OutputFile);
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            using (var results = new StreamWriter(OutputFile))
            {
                var directories = Directory.GetDirectories(SolutionsFolder);
                foreach (var directory in directories)
                {
                    var username = GetUsername(directory);

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

        private static string GetUsername(string path)
        {
            var directoryName = Path.GetFileName(path);
            var indexOfBracket = directoryName.IndexOf("(", StringComparison.Ordinal);
            var username = directoryName.Substring(0, indexOfBracket).Trim();
            return username;
        }
    }
}
