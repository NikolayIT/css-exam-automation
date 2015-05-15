namespace BgCoderSolutionsEvaluate
{
    using System;
    using System.IO;

    public static class StringExtensions
    {
        public static string GetStringBetween(this string input, string startString, string endString, int startFrom = 0)
        {
            input = input.Substring(startFrom);
            startFrom = 0;
            if (!input.Contains(startString) || !input.Contains(endString))
            {
                return string.Empty;
            }

            var startPosition = input.IndexOf(startString, startFrom, StringComparison.Ordinal) + startString.Length;
            if (startPosition == -1)
            {
                return string.Empty;
            }

            var endPosition = input.IndexOf(endString, startPosition, StringComparison.Ordinal);
            if (endPosition == -1)
            {
                return string.Empty;
            }

            return input.Substring(startPosition, endPosition - startPosition);
        }
        
        public static string GetUsername(this string path)
        {
            var directoryName = Path.GetFileName(path);
            if (directoryName == null)
            {
                return null;
            }

            var indexOfBracket = directoryName.IndexOf("[", StringComparison.Ordinal);
            var username = directoryName.Substring(0, indexOfBracket).Trim();
            return username;
        }

        public static string GetStudentsNumber(this string path)
        {
            var directoryName = Path.GetFileName(path);
            if (directoryName == null)
            {
                return null;
            }

            return path.GetStringBetween("] [", "]");
        }
    }
}
