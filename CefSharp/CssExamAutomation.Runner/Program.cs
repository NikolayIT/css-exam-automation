namespace CssExamAutomation.Runner
{
    using System;
    using System.IO;

    using CssExamAutomation.Engine;

    public static class Program
    {
        private static IHeadlessBrowser browser;

        public static void Main(string[] args)
        {
            browser = new ChromiumHeadlessBrowserWithCefSharp("http://google.com", 1024, 768);
            browser.PageReady += BrowserPageReady;
            
            Console.ReadLine();
        }

        private static void BrowserPageReady(object sender, EventArgs e)
        {
            var screenshotPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "screenshot.png");
            browser.SaveScreenshot(screenshotPath);
            Console.WriteLine("Ready...");
        }
    }
}
