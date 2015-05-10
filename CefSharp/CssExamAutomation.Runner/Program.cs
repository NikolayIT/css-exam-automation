namespace CssExamAutomation.Runner
{
    using System;
    using System.IO;

    using CssExamAutomation.Engine;
    using CssExamAutomation.Engine.WebServer;

    public static class Program
    {
        private static string webAddress = "http://localhost:1337/";

        private static IWebServer webServer;

        private static IHeadlessBrowser browser;

        public static void Main(string[] args)
        {
            webServer = new WebServer(webAddress);
            webServer.Run();

            browser = new ChromiumHeadlessBrowserWithCefSharp(webAddress + "index.html", 1024, 768);
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
