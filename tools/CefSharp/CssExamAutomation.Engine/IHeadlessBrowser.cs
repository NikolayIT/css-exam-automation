namespace CssExamAutomation.Engine
{
    using System;

    public interface IHeadlessBrowser : IDisposable
    {
        event EventHandler PageReady;

        void SaveScreenshot(string filePath);
    }
}
