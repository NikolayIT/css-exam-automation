namespace BgCoderSolutionsEvaluate
{
    using System;
    using System.Diagnostics;
    using System.IO;

    public static class Program
    {
        private const string TaskName = "Task 2";
        private const int MinimumPointsRequired = 0;
        private const int PointsRequiredForMaximum = 100;
        private static readonly string WorkingDirectory = Environment.CurrentDirectory;
        private static readonly string SolutionsFolder = WorkingDirectory + @"\solutions\";
        private static readonly string ReportsDirectory = WorkingDirectory + @"\reports\";
        private static readonly string OutputFile = WorkingDirectory + @"\results.csv";
        private static readonly string ExecutablePath = WorkingDirectory + @"\phantomjs.exe";
        private static readonly string JudgeJsFile = WorkingDirectory + @"\judge.js";
        private static readonly string TestsJsFile = WorkingDirectory + @"\tests.js";
        private static readonly string CssFile = WorkingDirectory + @"\style.css";
        private static readonly string ImageFile = WorkingDirectory + @"\image.png";
        
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
                results.AutoFlush = true;

                var directories = Directory.GetDirectories(SolutionsFolder);
                foreach (var directory in directories)
                {
                    // Prepare environment for running tests
                    var username = directory.GetUsername();
                    var studentsNumber = directory.GetStudentsNumber();
                    var sourceFile = string.Format("{0}\\{1}.css", directory, TaskName);
                    if (!File.Exists(sourceFile))
                    {
                        results.WriteLine("{0},{1},{2}", username, studentsNumber, 0);
                        Console.WriteLine("{0},{1}", username, 0);
                        continue;
                    }

                    File.Delete(CssFile);
                    File.Delete(ImageFile);
                    File.Copy(sourceFile, CssFile);

                    // Create phantomjs.exe process and run it
                    var process = new Process
                    {
                        StartInfo =
                            new ProcessStartInfo(ExecutablePath)
                                {
                                    UseShellExecute = false,
                                    RedirectStandardOutput = true,
                                    Arguments = string.Format("\"{0}\"", JudgeJsFile),
                                    WorkingDirectory = WorkingDirectory,
                                    CreateNoWindow = true,
                                }
                    };
                    process.Start();

                    // Wait the process to finish
                    var output = process.StandardOutput.ReadToEnd();

                    // Write test reports to report file
                    var checkerOutputFile = ReportsDirectory + string.Format("{0}-report.txt", username);
                    File.WriteAllText(checkerOutputFile, output);

                    // Move image to reports folder
                    File.Delete(ReportsDirectory + string.Format("{0}-image.png", username));
                    File.Move(ImageFile, ReportsDirectory + string.Format("{0}-image.png", username));

                    // Move solution to reports folder
                    File.Delete(ReportsDirectory + string.Format("{0}-style.css", username));
                    File.Copy(sourceFile, ReportsDirectory + string.Format("{0}-style.css", username));

                    // Extract final points
                    var points = int.Parse(output.GetStringBetween("Total points: ", "/"));
                    if (points < MinimumPointsRequired)
                    {
                        points = 0;
                    }

                    if (points >= PointsRequiredForMaximum)
                    {
                        points = 100;
                    }

                    // Output results
                    results.WriteLine("{0},{1},{2}", username, studentsNumber, points);
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

            if (!File.Exists(TestsJsFile))
            {
                Console.WriteLine("tests.js file not found!");
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
