namespace CssExamAutomation.Engine.WebServer
{
    using System;

    public interface IWebServer : IDisposable
    {
        void RegisterResource(string path, byte[] contentBytes);

        void RegisterResource(string path, string contentString);

        void Run();

        void Stop();
    }
}
