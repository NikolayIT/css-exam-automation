namespace CssExamAutomation.Engine
{
    using System;
    using System.Drawing;
    using System.Threading;

    using CefSharp;
    using CefSharp.OffScreen;

    public class ChromiumHeadlessBrowserWithCefSharp : IHeadlessBrowser
    {
        private readonly ChromiumWebBrowser browser;

        public ChromiumHeadlessBrowserWithCefSharp(string url, int width, int height)
        {
            Cef.Initialize(new CefSettings());

            // Create the offscreen Chromium browser
            var settings = new BrowserSettings
                               {
                                   FileAccessFromFileUrlsAllowed = true,
                                   UniversalAccessFromFileUrlsAllowed = true,
                                   WebSecurityDisabled = true,
                               };

            this.browser = new ChromiumWebBrowser(url, settings);

            // Set the size of the browser
            this.browser.Size = new Size(width, height);

            // An event that is fired when the first page is finished loading.
            // This returns to us from another thread.
            this.browser.FrameLoadEnd += this.BrowserFrameLoadEnd;
            this.browser.ConsoleMessage += this.BrowserConsoleMessage;
        }

        public event EventHandler PageReady;

        public void SaveScreenshot(string filePath)
        {
            // Wait for the screenshot to be taken.
            var task = this.browser.ScreenshotAsync();
            task.Wait();

            // Save the Bitmap to the path. 
            // The image type is auto-detected via the extension.
            task.Result.Save(filePath);

            // We no longer need the Bitmap.
            // Dispose it to avoid keeping the memory alive.
            task.Result.Dispose();
        }

        public void Dispose()
        {
            // Clean up Chromium objects.
            // We need to call this in otherwise we will get a crash when closing.
            Cef.Shutdown();
        }

        private void BrowserFrameLoadEnd(object sender, FrameLoadEndEventArgs e)
        {
            if (this.PageReady != null && e.IsMainFrame)
            {
                this.PageReady(this, EventArgs.Empty);
            }
        }

        private void BrowserConsoleMessage(object sender, ConsoleMessageEventArgs e)
        {
            Console.WriteLine(e.Message);
        }
    }
}